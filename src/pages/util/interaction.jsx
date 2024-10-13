import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function Interaction() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(likes + (liked ? -1 : 1));
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <FaHeart
        onClick={handleLike}
        style={{
          cursor: "pointer",
          color: liked ? "red" : "grey",
          margin: "10px",
          fontSize: "40px",
          transition: "color 0.3s",
        }}
      />
      <p style={{ marginTop: "10px", fontSize: "18px" }}>Likes: {likes}</p>
    </div>
  );
}
