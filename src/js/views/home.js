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
        <div className="text-center">
            <div className="row">
                <div className="row gap-3 justify-content-center">
                    {store.people?.map(person => <Card  
                        key={person.uid}
                        uid={person.uid}
                        name={person.name}
                        type={'people'}
                        img={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
                    />)}

                    {store.planets?.map(planets => <Card  
                        key={planets.uid}
                        uid={planets.uid}
                        name={planets.name}
                        type={'planets'}
                        img={`https://starwars-visualguide.com/assets/img/planets/${planets.uid}.jpg`}
                    />)}

                    {store.vehicles?.map(vehicles => <Card  
                        key={vehicles.uid}
                        uid={vehicles.uid}
                        name={vehicles.name}
                        type={'vehicles'}
                        img={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`}
                    />)}
                </div>
            </div>
        </div>
    )
};
