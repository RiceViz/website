import React, { useState } from "react";
import { Link } from "react-scroll"

function Navbar() {

	const [, setClick] = useState(false);
	const closeMenu = () => setClick(false);

	return (
			<nav className="relative container mx-auto p-6 font-serif text-black h-12 text-sm md:text-lg">
				<p className="flex item-center justify-between">
					<img src={require('../images/RICE (1).png')} alt='Logo' width="100" height="100" className="flex flex-initial -translate-y-9"></img>
					{/*Navigation Items*/}
					<span className="flex space-x-2 md:space-x-6">
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
					</span>
					{/*
					<span className="lg:hidden">
						<button type="button">
							<img src={require('../images/icons/588a6507d06f6719692a2d15.png')} alt='Dropdown Arrow' width="30" height="30" className="hover:scale-110"></img>
							<div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								<Link
									to="home"
									spy={true}
									smooth={true}
									offset={0}
									duration={700}								
									className="hover:bg-gray-400"
									onClick={closeMenu}
								></Link>
							</div>
						</button>
					</span>*/}
				</p>
			</nav>
	);
}

export default Navbar;
