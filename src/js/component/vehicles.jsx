import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.jsx";
import "../../styles/home.css";

export const Vehicles = () => {
	const { store } = useContext(Context);
    
	return (
		<div className="container text-center ">

            {store.vehicles.length > 0 ? <span>Vehicles</span> : 'No vehicles yet.'}
			<div className="row">
                {store.vehicles?.map(vehicle => (
                    <Card  
                        key={vehicle.uid}
                        uid={vehicle.uid}
                        name={vehicle.name}
                        type={'vehicles'}
                        img={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                    />
                ))}
			</div>
		</div>
	);
};
