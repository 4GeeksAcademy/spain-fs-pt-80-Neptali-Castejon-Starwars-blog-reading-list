import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.jsx";
import "../../styles/home.css";

export const Favorites = () => {
	const { store } = useContext(Context);

	return (
		<div className="container text-center ">
			
			{store.favorites.length > 0 ? <span>Favorites</span> : 'No favorites yet.'}
			<div className="row mt-3">
				{store.favorites.length > 0 ? (
					store.favorites.map((fav) => (
						<Card
                            key={fav.uid}
                            uid={fav.uid}
                            name={fav.name}
                            type={fav.type}
							img={
								fav.type === "people"
									? `https://starwars-visualguide.com/assets/img/characters/${fav.uid}.jpg`
									: fav.type === "planets"
									? `https://starwars-visualguide.com/assets/img/planets/${fav.uid}.jpg`
									: fav.type === "vehicles"
									? `https://starwars-visualguide.com/assets/img/vehicles/${fav.uid}.jpg`
									: `https://starwars-visualguide.com/assets/img/placeholder.jpg`
							}
                        />
					))
				) : (
					''
				)}
			</div>
		</div>
	);
};
