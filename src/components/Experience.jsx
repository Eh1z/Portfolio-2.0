import { OrbitControls } from "@react-three/drei";
import { Room } from "./3d/Room";
import { motion } from "framer-motion-3d";

export const Experience = (props) => {
	const { section } = props;
	return (
		<>
			<ambientLight intensity={2} />
			<motion.group
				position={[0, -1, 6]}
				scale={[0.9, 0.9, 0.9]}
				rotation-y={-Math.PI / 6}
				// animate={{
				// 	y: section === 0 ? 0 : -1,
				// }}
			>
				<Room />
			</motion.group>
		</>
	);
};
