import React, { useContext } from "react";
import "../../styles/card.css";
import { Context } from "../store/appContext";
import "../../styles/styles.css"
import { useNavigate } from "react-router";
import "../../styles/home.css";


export const Card = (props) => {

    const {store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handleLink = () => {
        navigate(`/details/${props.type}/${props.uid}`);
    };
    
    // Cambié la lógica para verificar favoritos usando 'type' y 'uid'
    const isFavorite = store.favorites.some(fav => `${fav.type}-${fav.uid}` === `${props.type}-${props.uid}`);

    return (
        <div className="card card__custom p-2 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div className="card__wrapper--custom">
                <div className="card__wrapper">
                    <figure className="card__figure" onClick={handleLink}>
                        <img className="card__image" src={props.img} alt={props.name} />
                        <figcaption className="card__figcaption card__figcaption--hidden">{props.name}</figcaption>
                    </figure>
                    <div className="card__info">
                        <h2 className="card__title text-center mt-0" title={props.name}>
                            {props.name}
                        </h2>
                    </div>
                </div>
                <div className="card__button">
                    <button className="button--custom custom-btn not-selected" aria-label={`Details about ${props.name}`} onClick={handleLink}>
                        It’s not a trap!
                    </button>
                    <button
                        className={`custom-btn ${isFavorite ? "selected" : "not-selected"}`}
                        aria-label={isFavorite ? `Remove ${props.name} from favorites` : `Add ${props.name} to favorites`}
                        onClick={() => actions.addRemoveFavorite(props)}
                    >
                        {isFavorite ? "The chosen ones" : "No Longer Chosen"}
                    </button>

                </div>
                <img className="card__img--custom" src="https://cdn.worldvectorlogo.com/logos/star-wars-4.svg" />
            </div>
        </div>
    );
};
