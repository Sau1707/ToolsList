import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { findHead, createMap } from '../util/snake';
import { deg2rad } from '../util/general';
import Camera from '../components/Camera';
import Box from '../components/Box';

const width = 11;
const height = 10;

export default function App() {
	const [position, setPosition] = useState([[0, 0, 0]]);
	const [camera, setCamera] = useState([0, -width * 2, 20]);
	const border = createMap(width, height);

	useEffect(() => {
		window.addEventListener('keydown', (e) => {
			let clone = [...position];
			console.log(clone);
			let head = findHead(clone);
			if (e.key == 'ArrowUp') {
				head[2] -= 1;
			}
			if (e.key == 'ArrowLeft') {
				head[0] -= 1;
			}
			if (e.key == 'ArrowDown') {
				head[2] += 1;
			}
			if (e.key == 'ArrowRight') {
				head[0] += 1;
			}
			clone.push(head);
			//clone.shift();
			console.log(clone);
			setPosition(clone);
		});
	}, []);

	return (
		<Canvas style={{ width: '100%', height: '100vh' }}>
			<Camera position={camera} />
			<color attach='background' args={['#110']} />
			<ambientLight intensity={0.5} />
			<spotLight position={[0, 10, 20]} angle={deg2rad(45)} penumbra={1} />
			<pointLight position={[-10, -10, -10]} />
			{position.map((e, i) => (
				<Box key={e} position={e} />
			))}
			{border.map((e, i) => (
				<Box color='#ffe53d' key={i} position={e} />
			))}
			<Box
				color='blue'
				size={[width * 2 + 0.9, 0.1, height * 2 + 0.9]}
				position={[0, -0.5, 0]}
			/>
		</Canvas>
	);
}
