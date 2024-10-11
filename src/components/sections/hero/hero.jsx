import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
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
				},
			}}
			className="w-screen h-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center gap-6"
		>
			<span className="text-6xl  font-bold">
				Hi, my <br /> name is Godsent.
			</span>
			<motion.p
				initial={{
					opacity: 0,
					y: 50,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: {
						duration: 1,
						delay: 0.2,
					},
				}}
				className="text-xl max-w-[500px]"
			>
				A Software Engineer who's in love with creating functional & beautiful
				UIs
			</motion.p>
			<motion.button
				initial={{
					opacity: 0,
					y: 50,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: {
						duration: 1,
						delay: 0.4,
					},
				}}
				className="py-3 px-8 rounded-2xl bg-[--accent] text-white font-semibold"
			>
				Get In Touch
			</motion.button>
		</motion.section>
	);
};

export default Hero;
