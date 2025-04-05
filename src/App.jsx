import { Navbar, Footer } from "./components";
import { About, Faqs, Hero, Services, Testimonials, Works } from "./sections";

function App() {
	return (
		<div className="flex flex-col items-center justify-start w-full">
			<Navbar />
			<Hero />
			<About />
			<Services />
			<Works />
			<Testimonials />
			<Faqs />
			<Footer />
		</div>
	);
}

export default App;
