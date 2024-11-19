import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/peopleDetails.css";

export const PeopleDetails = (props) => {

    const { store } = useContext(Context);

    return(
        <div className="container text-center ">
            
            {store.people.length > 0 ? 
                <div className="row pb-5">
                    <div className="card rounded-0 card__custom--people col-sm-12 col-md-12 col-lg-6">
                        <div className="card__wrapper--custom--people">
                            <div className="card__wrapper--people text-center">             
                                <figure className="card__figure--types">
                                    <img 
                                        className="card__image--types" 
                                        src={props.img} 
                                        alt={props.name}/>
                                    <figcaption className="card__figcaption card__figcaption--hidden">name: {props.name}</figcaption>
                                </figure>
                                <div className="card__icon--people">
                                    <img className="card__icon--custom--people" src="https://cdn.worldvectorlogo.com/logos/star-wars-4.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 text-start col-sm-12 col-md-12 col-lg-6">
                        <h1 className="card__title--people">{props.name}</h1>   
                        <p><strong>Height:</strong> {props.height}</p>
                        <p><strong>Mass:</strong> {props.mass}</p>
                        <p><strong>Hair color:</strong> {props.hair_color}</p>
                        <p><strong>Skin color:</strong> {props.skin_color}</p>
                        <p><strong>Eye color:</strong> {props.eye_color}</p>
                        <p><strong>Birth year:</strong> {props.birth_year}</p>
                        <p><strong>Gender:</strong> {props.gender}</p>
                    </div>
                </div>
                : 
                'No people details yet.'
            }
        </div>
    )
}