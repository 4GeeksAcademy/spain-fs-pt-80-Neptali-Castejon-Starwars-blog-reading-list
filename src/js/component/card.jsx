import React from "react";
import "../../styles/card.css";

export const Card = () => (
    <div className="card-container">
        <div className="card__wrapper d-flex flex-column">
            <div className="card">
                <img 
                    className="card__image" 
                    src="https://i.blogs.es/568b07/star-wars-outlaws-videojuego/375_375.webp" 
                    alt="Character"
                />
            </div>
            <div className="card__info">
                <h2 className="card__title text-start mt-0">Character Name</h2>
                <p className="card__description text-start mt-0">Character Description</p>
            </div>
        </div>
    </div>
);
