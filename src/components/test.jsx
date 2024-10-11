import {
	ContactShadows,
	Environment,
	OrbitControls,
	Sky,
} from "@react-three/drei";
import { Avatar } from "./Avatar.jsx";
import { useControls } from "leva";

export const Test = () => {
	const { animation } = useControls({
		animation: {
			value: "Standing",
			options: ["Typing", "Falling", "Standing"],
		},
	});
	return (
		<>
			<OrbitControls />
			<Sky />
			<Environment preset="sunset" />
			<Avatar animation={animation} />
			{animation === "Typing" && (
				<mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
					<boxGeometry />
					<meshStandardMaterial color="white" />
				</mesh>
			)}
		</>
	);
};
