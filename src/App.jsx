import { useState } from "react";
import { Navbar, Footer } from "./components";
import {
	About,
	CTA,
	Experience,
	Faqs,
	Hero,
	Services,
	Testimonials,
	Works,
} from "./sections";

function App() {
	return (
		<div className="flex flex-col items-center justify-start w-full">
			<Navbar />
			<Hero />
			<Services />
			<About />
			<Works />
			<Experience />
			<CTA />
			<Testimonials />
			<Faqs />
			<Footer />
		</div>
	);
}

export default App;
