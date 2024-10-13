import React, { useState, useContext } from "react";
import { DogContext } from "./DogContext.js";

export default function Search() {
  const { dogs, selectedBreeds, setSelectedBreeds } = useContext(DogContext);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setInputValue(value);

    if (value) {
      const filteredSuggestions = Object.keys(dogs).filter((breed) =>
        breed.toLowerCase().includes(value)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectBreed = (breed) => {
    if (!selectedBreeds.includes(breed)) {
      setSelectedBreeds([...selectedBreeds, breed]);
    }
    setInputValue("");
    setSuggestions([]);
  };

  const handleRemoveBreed = (breed) => {
    setSelectedBreeds(selectedBreeds.filter((selected) => selected !== breed));
  };

  return (
    <div
      style={{
        marginBottom: "20px",
        width: "300px",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <label htmlFor="dog-breeds">Type dog breed:</label>
      <input
        type="text"
        id="dog-breeds"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type dog breed"
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      />

      {suggestions.length > 0 && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            zIndex: "1",
            listStyleType: "none",
            padding: "0",
            margin: "0",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "100%",
            maxHeight: "150px",
            overflowY: "auto",
            backgroundColor: "white",
          }}
        >
          {suggestions.map((breed) => (
            <li
              key={breed}
              style={{
                padding: "8px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
              onClick={() => handleSelectBreed(breed)}
            >
              {breed}
            </li>
          ))}
        </ul>
      )}
      <div style={{ marginTop: "10px" }}>
        {selectedBreeds.map((breed) => (
          <div
            key={breed}
            style={{
              display: "inline-block",
              padding: "5px 10px",
              backgroundColor: "#d5986b",
              color: "white",
              borderRadius: "15px",
              marginRight: "5px",
              marginBottom: "5px",
            }}
          >
            {breed}{" "}
            <span
              style={{ cursor: "pointer", marginLeft: "5px" }}
              onClick={() => handleRemoveBreed(breed)}
            >
              &times;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
