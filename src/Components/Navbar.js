import React, { useState } from "react";
import { DarkMode } from "../Components/DarkMode.js";
import { Link } from "react-scroll"

function Navbar() {

	const [, setClick] = useState(false);
	const closeMenu = () => setClick(false);

	return (
			<nav className="relative container mx-auto pl-6 pr-6 pt-6 font-serif text-black">
				<p className="flex item-center justify-between">
					PLACEHOLDER
					{/*Navigation Items*/}
					<span className="hidden md:flex space-x-6">
						<Link 

								to="home"
								spy={true}
								smooth={true}
								offset={0}
								duration={700}								
								className="hover:text-cyan-600 hover:font-bold hover:underline"
								onClick={closeMenu}>
							Home
						</Link>
						<Link 
								to="projects"
								spy={true}
								smooth={true}
								offset={0}
								duration={700}								
								className="hover:text-cyan-600 hover:font-bold hover:underline"
								onClick={closeMenu}>
							Projects
						</Link>
						<Link 
								to="about"
								spy={true}
								smooth={true}
								offset={0}
								duration={700}								
								className="hover:text-cyan-600 hover:font-bold hover:underline"
								onClick={closeMenu}>
							About Me
						</Link>
						<Link 
								to="contact"
								spy={true}
								smooth={true}
								offset={0}
								duration={700}								
								className="hover:text-cyan-600 hover:font-bold hover:underline"
								onClick={closeMenu}>
							Contact
						</Link>
						<span class="ml-6">
							<DarkMode></DarkMode>
						</span>
					</span>
				</p>
			</nav>
	);
}

export default Navbar;
