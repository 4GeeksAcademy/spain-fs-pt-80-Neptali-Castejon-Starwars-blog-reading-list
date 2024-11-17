import React from "react";

export const PeopleDetails = (props) => {

    return(
        <div className="d-flex pb-5">
            <div className="card m-3 p-2 rounded-0 card__custom--vehicles col-sm-6- col-md-4- col-lg-5">
                <div className="card__wrapper--vehicles text-center">             
                    <figure className="card__figure--vehicles">
                        <img 
                            className="card__image--vehicles" 
                            src={props.img} 
                            alt={props.name}/>
                        <figcaption className="card__figcaption card__figcaption--hidden">name: {props.name}</figcaption>
                    </figure>
                    <div className="card__icon--vehicles">
                        <img className="card__icon--custom--vehicles" src="https://cdn.worldvectorlogo.com/logos/star-wars-4.svg"/>
                    </div>
                </div>
            </div>

            <div className="m-3">
                <p>height: {props.height}</p>
                <p>mass: {props.mass}</p>
                <p>hair color: {props.hair_color}</p>
                <p>skin color: {props.skin_color}</p>
                <p>eye color: {props.eye_color}</p>
                <p>birth year: {props.birth_year}</p>
                <p>gender: {props.gender}</p>
            </div>
        </div>
    )
}