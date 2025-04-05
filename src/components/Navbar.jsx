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
		<div className="fixed flex items-center justify-center w-full px-5 py-3 lg:px-8">
			<div className="container flex items-center justify-between ">
				{/* Logo */}
				<span className="text-3xl font-semibold">
					GodsenT
					<span className="text-4xl font-black text-accent">_</span>
				</span>

				{/* Navlinks */}
				<div>
					{navLinks.map((link, index) => (
						<a
							href={link.url}
							className="px-8 font-medium transition duration-500 hover:text-accent hover:underline"
							key={index}
						>
							{link.title}
						</a>
					))}
				</div>

				{/* CTA */}
				<div className="flex items-center justify-center px-8 py-3 text-white transition duration-500 cursor-pointer bg-accent rounded-xl hover:bg-dark">
					Let's Chat
				</div>
			</div>
		</div>
	);
};

export default Navbar;
