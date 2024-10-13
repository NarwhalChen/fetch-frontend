import React, { useState, useEffect } from "react";
import DogGroup from "./dogGroup";
import { Container, Card } from "react-bootstrap";
import Search from "./util/search.jsx";
import { DogProvider, DogContext } from "./util/DogContext.js";
import "./style/Home.css";

export default function Home() {
  const [randomImg, setRandomImg] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setRandomImg(data.message));
  }, []);

  return (
    <DogProvider>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vh",
          }}
        >
          {randomImg ? (
            <img
              src={randomImg}
              alt="dog"
              style={{
                margin: "20px",
                width: "20%",
                height: "20%",
                objectFit: "cover",
                borderRadius: "90%",
              }}
            />
          ) : (
            <p>Loading...</p>
          )}

          <Card
            style={{
              width: "300px",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50px",
              backgroundColor: "#d5986b",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              margin: "20px",
            }}
          >
            <h2>DoggyDoggy</h2>
          </Card>
          <Search />
        </div>

        <div className="parent-container">
          <Container fluid className="dog-container">
            <DogGroupContainer />
          </Container>
        </div>
      </div>
    </DogProvider>
  );
}

function DogGroupContainer() {
  const { dogs, selectedBreeds } = React.useContext(DogContext);

  const breedsToShow =
    selectedBreeds.length === 0 ? Object.keys(dogs) : selectedBreeds;

  return (
    <>
      {breedsToShow.map((breed) => (
        <DogGroup dogs={dogs[breed]} breed={breed} key={breed} />
      ))}
    </>
  );
}
