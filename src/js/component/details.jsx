import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { PeopleDetails } from "./peopleDetails.jsx";
import { Context } from "../store/appContext.js";
import { PlanetsDetails } from "./planetsDetails.jsx";
import { VehiclesDetails } from "./vehiclesDetails.jsx";

export const Details = () => {

    const {store, actions} = useContext(Context);
    const {type,uid} = useParams();

    useEffect(()=>{
        actions.getOne(type, uid)
    },[]);

    return(
        <>    
            {type === 'people' && <PeopleDetails
                name={store.single?.properties?.name} 
                img={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                height={store.single?.properties?.height} 
                mass={store.single?.properties?.mass} 
                hair_color={store.single?.properties?.hair_color}
                skin_color={store.single?.properties?.skin_color}
                eye_color={store.single?.properties?.eye_color} 
                birth_year={store.single?.properties?.birth_year}
            /> } 
            {type === 'planets' && <PlanetsDetails
                name={store.single?.properties?.name} 
                img={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
                height={store.single?.properties?.height} 
                mass={store.single?.properties?.mass} 
                hair_color={store.single?.properties?.hair_color}
                skin_color={store.single?.properties?.skin_color}
                eye_color={store.single?.properties?.eye_color} 
                birth_year={store.single?.properties?.birth_year}
            /> } 
            {type === 'vehicles' && <VehiclesDetails
                name={store.single?.properties?.name} 
                img={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
                height={store.single?.properties?.height} 
                mass={store.single?.properties?.mass} 
                hair_color={store.single?.properties?.hair_color}
                skin_color={store.single?.properties?.skin_color}
                eye_color={store.single?.properties?.eye_color} 
                birth_year={store.single?.properties?.birth_year}
            /> } 
        </>
    )
}