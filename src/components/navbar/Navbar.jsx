import './Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export const Navbar = () => {
	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<a href="#" id="navbar-brand">
						<span id="logo-1">Pet</span><span id="logo-2">Chef</span>
						</a>
					<button id="navbar-btn">
						<span id="navbar-span"></span>
						<span id="navbar-span"></span>
						<span id="navbar-span"></span>
					</button>

					<ul className="navbar-menu">
						<li id="navbar-li"><Link to='/'>Inicio</Link></li>
						<li id="navbar-li"><Link to='/contacto'>Contacto</Link></li>
						<li id="navbar-li"><Link to='/preguntas-frecuentes'>Preguntas Frecuentes</Link></li>
					</ul>
				</div>
			</nav>
		</>
	);
};

