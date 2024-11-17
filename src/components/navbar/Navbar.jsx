import './Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen((prev) => !prev);
	};

	const closeMenu = () => {
		if (menuOpen) {
			setMenuOpen(false);
		}
	};
	return (
		<>
			<header className="header-area">
				<div className="navbar-area">
					<div className="navbar-container">
						<nav className="site-navbar">
							<Link to='/' onClick={closeMenu} id="navbar-brand">
								<span id="logo-1">PET</span>
								<span id="logo-2">CHEF</span>
							</Link>

							{/* Menú principal */}
							<ul c0lassName={`menu ${menuOpen ? "open" : ""}`}>
								<li id="navbar-li"><Link to='/' onClick={closeMenu}>Inicio</Link></li>
								<li id="navbar-li"><Link to='/contacto' onClick={closeMenu}>Subir Mi Receta</Link></li>
								<li id="navbar-li"><Link to='/preguntas-frecuentes' onClick={closeMenu}>Preguntas Frecuentes</Link></li>
								<li id="navbar-li"><Link to='/login' onClick={closeMenu}>Iniciar Sesión</Link></li>
							</ul>

							{/* Botón toggler para pantallas pequeñas */}
							<button
								className={`nav-toggler ${menuOpen ? "toggler-open" : ""}`}
								onClick={toggleMenu}
							>
								<span></span>
								<span></span>
								<span></span>
							</button>
						</nav>
					</div>
				</div>
			</header>
		</>
	);
};

