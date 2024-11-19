import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/vehiclesDetails.css";

export const VehiclesDetails = (props) => {

    const { store } = useContext(Context);

    return(
        <div className="container text-center ">
            
            {store.people.length > 0 ? 
                <div className="row pb-5">
                    <div className="card rounded-0 card__custom--people col-sm-12 col-md-12 col-lg-7 col-xl-7">
                        <div className="card__wrapper--custom--vehicles">
                            <div className="card__wrapper--vehicles text-center">             
                                <figure className="card__figure--types">
                                    <img 
                                        className="card__image--types" 
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
                    <div className="p-4 text-start col-sm-12 col-md-12 col-lg-5 col-xl-5">
                        <h1 className="card__title--vehicles">{props.name}</h1>  
                        <p><strong>Cargo_capacity:</strong> {props.cargo_capacity}</p>
                        <p><strong>Consumables:</strong> {props.consumables}</p>
                        <p><strong>Cost_in_credits:</strong> {props.cost_in_credits}</p>
                        <p><strong>Crew:</strong> {props.crew}</p>
                        <p><strong>Length:</strong> {props.length}</p>
                        <p><strong>Manufacturer:</strong> {props.manufacturer}</p>
                        <p><strong>Max_atmosphering_speed:</strong> {props.max_atmosphering_speed}</p>
                        <p><strong>Model:</strong> {props.model}</p>
                        <p><strong>Passengers:</strong> {props.passengers}</p>
                        <p><strong>Vehicle_class:</strong> {props.vehicle_class}</p>
                    </div>
                </div>
                : 
                'No vehicles details yet.'
            }
        </div>
    )
}