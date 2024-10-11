import { Hero, About } from "./sections";

const Interface = () => {
	return (
		<div className="w-screen flex flex-col items-center">
			<Hero />

			<About />
		</div>
	);
};

export default Interface;
