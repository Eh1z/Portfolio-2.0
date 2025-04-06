import React from "react";

const Navbar = () => {
	const navLinks = [
		{ title: "Home", url: "#" },
		{ title: "About", url: "#about" },
		{ title: "Services", url: "#services" },
		{ title: "Portfolio", url: "#portfolio" },
		{ title: "Faqs", url: "#faqs" },
	];
	return (
		<div className="fixed flex items-center justify-center w-full px-5 py-2 border-b border-white bg-white/30 backdrop-blur-md lg:px-8">
			<div className="container flex items-center justify-between ">
				{/* Logo */}
				<span className="text-2xl font-semibold">
					GodsenT
					<span className="text-3xl font-black text-accent">_</span>
				</span>

				{/* Navlinks */}
				<div className="flex items-center justify-center ">
					{navLinks.map((link, index) => (
						<a
							href={link.url}
							className="flex flex-col px-8 font-medium text-gray-500 transition duration-500 group hover:text-accent"
							key={index}
						>
							{link.title}
							<div className="w-0 h-1 transition-all duration-500 ease-in-out rounded-full group-hover:w-full bg-accent" />
						</a>
					))}
				</div>

				{/* CTA */}
				<div className="flex items-center justify-center px-5 py-2 text-white transition duration-500 cursor-pointer bg-accent rounded-3xl hover:bg-dark">
					Let's Chat
				</div>
			</div>
		</div>
	);
};

export default Navbar;
