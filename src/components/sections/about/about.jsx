import React from "react";
import { motion } from "framer-motion";

const About = () => {
	return (
		<motion.section
			initial={{
				opacity: 0,
				y: 50,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
				transition: {
					duration: 1,
					delay: 0.5,
				},
			}}
			className="w-screen h-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center gap-6"
		>
			About
		</motion.section>
	);
};

export default About;
