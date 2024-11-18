import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card.jsx";

export const Home = () => {

    const {store, actions } = useContext(Context);

    useEffect(()=>{
        actions.clearSingle();
    },[])

    return(
        <div className="container-fluid p-0">
            <div className="d-flex flex-column align-items-center p-sm-3 p-md-0 container">
            
                {store.people.length > 0 ? <span>People</span> : ''}
                <div className="row container">
                    <div className="scrolling-wrapper p-0 pb-3">
                        {store.people?.map(person => (
                            <Card  
                                key={person.uid}
                                uid={person.uid}
                                name={person.name}
                                type={'people'}
                                img={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
                            />
                        ))}
                    </div>
                </div>

                {store.vehicles.length > 0 ? <span>Vehicles</span> : ''}
                <div className="row container">
                    <div className="scrolling-wrapper p-0 pb-3">
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

                {store.planets.length > 0 ? <span>Planets</span> : ''}
                <div className="row container mb-5">
                    <div className="scrolling-wrapper p-0 pb-3">
                    {store.planets
                        ?.filter(planet => planet.uid !== "1") // Filtra el elemento con uid '1'
                        .map(planet => (
                            <Card  
                                key={planet.uid}
                                uid={planet.uid}
                                name={planet.name}
                                type={'planets'}
                                img={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};
