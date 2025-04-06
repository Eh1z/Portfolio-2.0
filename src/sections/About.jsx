import React from "react";

const About = () => {
	return (
		<div className="container flex flex-col items-center gap-64 px-5 py-32">
			{/* Text Paragraphs */}
			<p className="pt-64 text-6xl leading-tight max-w-[1200px]">
				Great design means good business, so I work with founders,
				designers, and teams to create impactful new brands and elevate
				existing ones.
			</p>

			<p className="pt-64 text-6xl leading-tight max-w-[1200px]">
				With over half a decade of experience in web design &
				development, I help clients stand out through clear positioning,
				engaging brand messaging, and designs that resonate.
			</p>

			{/* Designs */}
			<div className="w-full pt-32">
				{/* Image div */}
				<div className="w-full bg-dark h-[350px] rounded-2xl mb-8" />
				{/* Text Div */}
				<span className="text-4xl font-semibold leading-snug max-w-[900px]">
					I help you elevate your business with captivating designs
					and stunning animations that move your brand forward.
				</span>

				<div className="flex w-full gap-3 py-8">
					<div className="grid grid-cols-10 gap-8">
						<div className="col-span-3 h-[300px] w-full bg-dark rounded-2xl" />
						<div className="col-span-3 h-[300px] w-full bg-dark rounded-2xl" />
						<p className="col-span-4">
							Great design reflects your business goals and
							communicates them to your target audience in the
							most impactful way.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
