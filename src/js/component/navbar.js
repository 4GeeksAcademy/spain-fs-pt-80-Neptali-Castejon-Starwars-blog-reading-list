import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<header className="navbar-container mb-5">
			<div className="logo-container">
				<Link to="/">
					<img
						width="185px"
						src="https://cdn.worldvectorlogo.com/logos/star-wars-4.svg"
						alt="Star Wars"
					/>
				</Link>
			</div>
			<nav className="navbar navbar-expand-lg navbar-transparent" data-bs-theme="dark">
				<div className="container-fluid justify-content-center text-center">
					<button
						className="navbar-toggler collapsed nabvar--custom"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarScroll"
						aria-controls="navbarScroll"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-center" id="navbarScroll">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link text-uppercase" to="/people">
									People
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-uppercase" to="/vehicles">
									Vehicles
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-uppercase" to="/planets">
									Planets
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-uppercase" to="/favorites">
									Favorites
								</Link>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle text-uppercase"
									href="#"
									id="favoritesDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Favorites List
								</a>
								<ul className="dropdown-menu" aria-labelledby="favoritesDropdown">
									{store.favorites.length > 0 ? (
										store.favorites.map((fav, index) => (
											<li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
												<Link className="dropdown-menu__link" to={`/details/${fav.type}/${fav.uid}`}>
													{fav.name}
												</Link>
												<button
													className="icon-btn ms-3"
													onClick={() => actions.addRemoveFavorite(fav)}
												>
													<span class="fa-solid fa-x"></span>
												</button>
											</li>
										))
									) : (
										<li className="dropdown-item">No favorites yet</li>
									)}
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};
