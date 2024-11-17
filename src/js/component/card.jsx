import React, { useContext } from "react";
import "../../styles/card.css";
import { Context } from "../store/appContext";
import "../../styles/styles.css"
import { useNavigate } from "react-router";


export const Card = (props) => {

    const {store, actions } = useContext(Context)
    const navigate = useNavigate();

    const handleLink = () => {
        navigate(`/details/${props.type}/${props.uid}`);
    };
    
    const isFavorite = store.favorites.some(fav => fav.uid === props.uid);

    return (
        <div className="card card__custom p-1 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div className="card__wrapper--custom p-1">
                <div className="card__wrapper">
                    <figure className="card__figure" onClick={handleLink}>
                        <img className="card__image" src={props.img} alt={props.name} />
                        <figcaption className="card__figcaption card__figcaption--hidden">{props.name}</figcaption>
                    </figure>
                    <div className="card__info">
                        <h2 className="card__title text-start mt-0" title={props.name}>
                            {props.name}
                        </h2>
                    </div>
                </div>
                <div className="card__button d-flex">
                    <button aria-label={`Details about ${props.name}`} onClick={handleLink}>
                        More
                    </button>
                    <button
                        aria-label={isFavorite ? `Remove ${props.name} from favorites` : `Add ${props.name} to favorites`}
                        onClick={() => actions.addRemoveFavorite(props)}
                    >
                        {isFavorite ? "Unfav" : "Fav"}
                    </button>
                </div>
                <img className="card__img--custom" src="https://cdn.worldvectorlogo.com/logos/star-wars-4.svg" />
            </div>
        </div>
    );
};




