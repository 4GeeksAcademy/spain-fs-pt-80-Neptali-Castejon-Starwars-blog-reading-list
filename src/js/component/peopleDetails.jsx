import React from "react";

export const PeopleDetails = (props) => {

    return(
        <div className="container">
            <div className="d-flex"> 
                <figure>
                    <img src={props.img} alt={props.name}/>
                    <figcaption>name: {props.name}</figcaption>
                </figure>
                <div>
                    <p>height: {props.height}</p>
                    <p>mass: {props.mass}</p>
                    <p>hair color: {props.hair_color}</p>
                    <p>skin color: {props.skin_color}</p>
                    <p>eye color: {props.eye_color}</p>
                    <p>birth year: {props.birth_year}</p>
                </div>
            </div>
        </div>
    )
}