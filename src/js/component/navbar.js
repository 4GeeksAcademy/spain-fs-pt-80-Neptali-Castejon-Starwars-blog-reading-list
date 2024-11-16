import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<header className="navbar-container mb-5">
			{/* Logo centrado */}
			<div className="logo-container">
				<Link to="/">
					<img
						width="185px"
						src="https://cdn.worldvectorlogo.com/logos/star-wars-4.svg"
						alt="Star Wars"
					/>
				</Link>
			</div>
			{/* Navbar debajo */}
			<nav className="navbar navbar-expand-lg navbar-transparent container-fluid-" data-bs-theme="dark">
				<div className="container-fluid">
					{/* Botón para colapsar el menú en pantallas pequeñas */}
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

					{/* Contenido del navbar */}
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
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

