import { useRef, useState } from 'react';

/* A cube in the map */
export default function Box(props) {
	const ref = useRef();

	const [hovered, hover] = useState(false);
	const [clicked, click] = useState(false);

	//useFrame((state,delta) => (ref.current.rotation.y += delta))

	return (
		<mesh
			{...props}
			ref={ref}
			scale={clicked ? 1.5 : 1}
			//onClick={(event) => click(!clicked)}
			//onPointerOver={(event) => hover(true)}
			//onPointerOut={(event) => hover(false)}
		>
			<boxGeometry args={props.size ? props.size : [0.9, 0.9, 0.9]} />
			<meshStandardMaterial
				color={props.color ? props.color : '#AA4A44'}
			/>
		</mesh>
	);
}
