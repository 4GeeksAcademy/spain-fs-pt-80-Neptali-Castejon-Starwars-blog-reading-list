import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";  

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-transparent fixed-top" data-bs-theme="dark">
			<div className="container-fluid">

				{/* Logo con enlace */}
				<Link to="/">
					<img
						width="80px"
						src="https://cdn.worldvectorlogo.com/logos/star-wars-4.svg"
						alt="Star Wars"
					/>
				</Link>

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
					<span className="fa-solid fa-jedi text-light "></span>
					<span className="navbar-toggler-icon"></span>
				</button>

				{/* Contenido colapsable */}
				<div className="collapse navbar-collapse" id="navbarScroll">
					<div className="ms-auto nabvar_link--custom">
						<Link to="/card">
							{/* <button className="btn btn-danger">Join the Dark Side</button> */}
							People
						</Link>
						<Link to="/card">
							Vehicles
						</Link>
						<Link to="/card">
							Planets
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};
