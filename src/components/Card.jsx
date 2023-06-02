import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
function Card({ item }) {
  const id = item.show.id;
  return (
    <div className="card-container">
      <Link to={`/movie-info/${id}`}>
        <div className="card-img">
          <img src={item.show.image.medium} alt="cover" />
        </div>
      </Link>
    </div>
  );
}

export default Card;
