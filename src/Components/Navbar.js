import React from "react";
import { DarkMode } from "../Components/DarkMode.js";

function Navbar() {

	return (
		/*Navbar*/
		<nav class="relative container mx-auto p-6 font-serif text-black">
			<div class="flex items-center justify-between">
				Tyran Rice Jr.
				{/*Navigation Items*/}
				<div class="hidden md:flex space-x-6">
					<a href='/home' class="hover:text-gray-500">Home</a>
					<a href='/aboutme' class="hover:text-gray-500">About Me</a>
					<a href='/projects' class="hover:text-gray-500">Projects</a>
					<a href='/contact' class="hover:text-gray-500">Contacts</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
