import React from "react";
import { DarkMode } from "../Components/DarkMode.js";

function Navbar() {

	return (
			<nav class="relative container mx-auto pl-6 pr-6 pt-6 font-serif text-black">
				<p class="flex items-center justify-between">
					LOGO
					{/*Navigation Items*/}
					<span class="hidden md:flex space-x-6">
						<a href='/home' class="hover:text-cyan-600">Home</a>
						<a href='/aboutme' class="hover:text-cyan-600">About Me</a>
						<a href='/projects' class="hover:text-cyan-600">Projects</a>
						<a href='/contact' class="hover:text-cyan-600">Contacts</a>
						<span class="ml-6">
							<DarkMode></DarkMode>
						</span>
					</span>
				</p>
			</nav>
	);
}

export default Navbar;
