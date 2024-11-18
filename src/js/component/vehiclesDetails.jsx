import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/cardVehiclesDetails.css";

export const VehiclesDetails = (props) => {

    const { store } = useContext(Context);

    return(
        <div className="container text-center ">
            
            {store.vehicles.length > 0 ? <span>Vehicles Details</span> : 'No vehicles details yet.'}
            <div className="d-flex pb-5">
                <div className="card m-3 p-2 rounded-0 card__custom--vehicles col-sm-6- col-md-4- col-lg-7">
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
                    <p>cargo_capacity: {props.cargo_capacity}</p>
                    <p>consumables: {props.consumables}</p>
                    <p>cost_in_credits: {props.cost_in_credits}</p>
                    <p>crew: {props.crew}</p>
                    <p>length: {props.length}</p>
                    <p>manufacturer: {props.manufacturer}</p>
                    <p>max_atmosphering_speed: {props.max_atmosphering_speed}</p>
                    <p>model: {props.model}</p>
                    <p>passengers: {props.passengers}</p>
                    <p>vehicle_class: {props.vehicle_class}</p>
                </div>
            </div>
        </div>
    )
}