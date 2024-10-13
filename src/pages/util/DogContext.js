import React, { createContext, useState, useEffect } from "react";

export const DogContext = createContext();

export const DogProvider = ({ children }) => {
  const [dogs, setDogs] = useState([]);
  const [selectedBreeds, setSelectedBreeds] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => setDogs(data.message));
  }, []);

  return (
    <DogContext.Provider value={{ dogs, selectedBreeds, setSelectedBreeds }}>
      {children}
    </DogContext.Provider>
  );
};
