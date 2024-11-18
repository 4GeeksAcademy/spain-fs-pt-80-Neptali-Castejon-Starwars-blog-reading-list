import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.jsx";
import "../../styles/home.css";

export const People = () => {
	const { store } = useContext(Context);
    
	return (
		<div className="container text-center ">
            
			{store.people.length > 0 ? <span>People</span> : 'No people yet.'}
			<div className="row">
                {store.people?.map(people => (
                    <Card  
                        key={people.uid}
                        uid={people.uid}
                        name={people.name}
                        type={'people'}
                        img={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`}
                    />
                ))}
			</div>
		</div>
	);
};
