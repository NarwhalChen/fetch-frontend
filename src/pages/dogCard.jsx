import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Interaction from "./util/interaction.jsx";
import { useInView } from "react-intersection-observer";

export default function DogCard(props) {
  const [dogImg, setDogImg] = useState("");
  const [fullBreed, setFullBreed] = useState("");
  const { ref, inView } = useInView({ triggerOnce: true });

  const getDogImg = async () => {
    let url = `https://dog.ceo/api/breed/${fullBreed}/images/random`;
    let img = await fetch(url)
      .then((res) => res.json())
      .then((data) => data.message);
    return img;
  };

  useEffect(() => {
    if (inView) {
      let name = props.subbreed
        ? `${props.breed}/${props.subbreed}`
        : props.breed;
      setFullBreed(name);
    }
  }, [inView, props.breed, props.subbreed]);

  useEffect(() => {
    const fetchImage = async () => {
      if (fullBreed && inView) {
        const img = await getDogImg(fullBreed);
        setDogImg(img);
      }
    };
    fetchImage();
  }, [fullBreed, inView]);

  return (
    <Card
      ref={ref}
      style={{
        margin: "10px",
        width: "18rem",
        height: "24rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#d5986b",
        border: "0px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
      }}
    >
      <h2
        style={{
          margin: "10px",
        }}
      >
        {props.subbreed} {props.breed}
      </h2>
      {dogImg ? (
        <img
          src={dogImg}
          alt="dog"
          style={{
            margin: "20px",
            width: "50%",
            height: "50%",
            objectFit: "cover",
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
      <Interaction />
    </Card>
  );
}
