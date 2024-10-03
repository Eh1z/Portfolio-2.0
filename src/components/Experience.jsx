import {
	ContactShadows,
	Environment,
	OrbitControls,
	Sky,
} from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";

export const Experience = () => {
	const { animation } = useControls({
		animation: {
			value: "Typing",
			options: ["Typing", "Falling", "Standing"],
		},
	});
	return (
		<>
			<OrbitControls />
			<Sky />
			<Environment preset="sunset" />
			<group position-y={-1}>
				<ContactShadows />
				<Avatar animation={animation} />
				{animation === "Typing" && (
					<mesh scale={[0.8, 0.6, 0.8]} position-y={0.25}>
						<boxGeometry />
						<meshStandardMaterial color="white" />
					</mesh>
				)}

				<mesh scale={5} rotation-x={-Math.PI * 0.5}>
					<planeGeometry />
					<meshStandardMaterial color="white" />
				</mesh>
			</group>
		</>
	);
};
