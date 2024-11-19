import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/planetsDetails.css";

export const PlanetsDetails = (props) => {

    const { store } = useContext(Context);

    return(
        <div className="container text-center ">
            
            {store.people.length > 0 ?
                <div className="row pb-5">
                    <div className="card rounded-0 card__custom--people col-sm-12 col-md-12 col-lg-7 col-xl-7">
                        <div className="card__wrapper--custom--planets">
                            <div className="card__wrapper--planets text-center">             
                                <figure className="card__figure--types">
                                    <img 
                                        className="card__image--types" 
                                        src={props.img} 
                                        alt={props.name}/>
                                    <figcaption className="card__figcaption card__figcaption--hidden">name: {props.name}</figcaption>
                                </figure>
                                <div className="card__icon--types">
                                    <img className="card__icon--custom--planets" src="https://cdn.worldvectorlogo.com/logos/star-wars-4.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 text-start col-sm-12 col-md-12 col-lg-5 col-xl-5">
                        <h1 className="card__title--planets">{props.name}</h1>  
                        <p><strong>Climate:</strong> {props.climate}</p>
                        <p><strong>Diameter:</strong> {props.diameter}</p>
                        <p><strong>Gravity:</strong> {props.gravity}</p>
                        <p><strong>Orbital period:</strong> {props.orbital_period}</p>
                        <p><strong>Population:</strong> {props.population}</p>
                        <p><strong>Rotation period:</strong> {props.rotation_period}</p>
                        <p><strong>Surface water:</strong> {props.surface_water}</p>
                        <p><strong>Terrain:</strong> {props.terrain}</p>
                    </div>
                </div>
                : 
                'No planets details yet.'
            }
        </div>
    )
}