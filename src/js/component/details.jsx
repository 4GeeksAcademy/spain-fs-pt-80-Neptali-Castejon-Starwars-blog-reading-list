import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { PeopleDetails } from "./peopleDetails.jsx";
import { Context } from "../store/appContext.js";
import { PlanetsDetails } from "./planetsDetails.jsx";
import { VehiclesDetails } from "./vehiclesDetails.jsx";

export const Details = () => {

    const {store, actions} = useContext(Context);
    const {type,uid} = useParams();
    
    useEffect(() => {
        actions.getOne(type, uid);
    }, [type, uid]);    

    return(
        <>    
            {type === 'people' && <PeopleDetails
                name={store.single?.properties?.name} 
                height={store.single?.properties?.height} 
                mass={store.single?.properties?.mass} 
                hair_color={store.single?.properties?.hair_color}
                skin_color={store.single?.properties?.skin_color}
                eye_color={store.single?.properties?.eye_color} 
                birth_year={store.single?.properties?.birth_year}
                gender={store.single?.properties?.gender}
                homeworld={store.single?.properties?.homeworld}
                img={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
            /> } 
            {type === 'planets' && <PlanetsDetails
                name={store.single?.properties?.name} 
                climate={store.single?.properties?.climate} 
                diameter={store.single?.properties?.diameter} 
                gravity={store.single?.properties?.gravity}
                orbital_period={store.single?.properties?.orbital_period}
                population={store.single?.properties?.population} 
                rotation_period={store.single?.properties?.rotation_period}
                surface_water={store.single?.properties?.surface_water}
                terrain={store.single?.properties?.terrain}
                img={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
            /> } 
            {type === 'vehicles' && <VehiclesDetails
                name={store.single?.properties?.name} 
                cargo_capacity={store.single?.properties?.cargo_capacity} 
                consumables={store.single?.properties?.consumables} 
                cost_in_credits={store.single?.properties?.cost_in_credits}
                crew={store.single?.properties?.crew} 
                length={store.single?.properties?.length} 
                manufacturer={store.single?.properties?.manufacturer} 
                max_atmosphering_speed={store.single?.properties?.max_atmosphering_speed} 
                model={store.single?.properties?.model} 
                passengers={store.single?.properties?.passengers} 
                vehicle_class={store.single?.properties?.vehicle_class} 
                img={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
            /> } 
            
        </>
    )
}