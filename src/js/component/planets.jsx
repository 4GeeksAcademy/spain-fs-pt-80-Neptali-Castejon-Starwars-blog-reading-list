import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.jsx";
import "../../styles/home.css";

export const Planets = () => {
	const { store } = useContext(Context);
    
	return (
		<div className="container text-center ">
            
            {store.planets.length > 0 ? <span>Planets</span> : 'No planets yet.'}
			<div className="row mt-3 pb-5">
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
	);
};
