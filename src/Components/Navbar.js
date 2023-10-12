import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../Styles/main.css";

function Navbar() {
	const navRef = useRef();
	
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	}

	return (
		<header>
			<h3>Tyran</h3>
			<nav ref={navRef}>
				<a href="/home">Home</a>
				<a href="/about me">About Me</a>
				<a href="/portfolio">Portfolio</a>
				<button className="nav-btn nav-close-btn" onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
