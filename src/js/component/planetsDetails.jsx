import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/cardPlanetsDetails.css";

export const PlanetsDetails = (props) => {

    const { store } = useContext(Context);

    return(
        <div className="container text-center ">
            
            {store.planets.length > 0 ? <span>Planets Details</span> : 'No planets detail yet.'}
            <div className="d-flex pb-5">
                <div className="card m-3 p-2 rounded-0 card__custom--vehicles col-sm-6- col-md-4- col-lg-6">
                    <div className="card__wrapper--custom p-1">
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
                </div>
                <div className="m-3">
                    <p>climate: {props.climate}</p>
                    <p>diameter: {props.diameter}</p>
                    <p>gravity: {props.gravity}</p>
                    <p>orbital period: {props.orbital_period}</p>
                    <p>population: {props.population}</p>
                    <p>rotation period: {props.rotation_period}</p>
                    <p>surface water: {props.surface_water}</p>
                    <p>terrain: {props.terrain}</p>
                </div>
            </div>
        </div>
    )
}