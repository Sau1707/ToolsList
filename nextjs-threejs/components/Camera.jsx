import * as THREE from 'three';
import { useThree, extend, useFrame } from '@react-three/fiber';
import { deg2rad } from '../util/general';
import { useRef } from 'react';
import CameraControls from 'camera-controls';

CameraControls.install({ THREE });
extend({ CameraControls });

// https://github.com/yomotsu/camera-controls#readme
const settings = {
	distance: 20,
	minDistance: 20,
	maxDistance: 50,
	polarAngle: deg2rad(50),
	minPolarAngle: deg2rad(0),
	maxPolarAngle: deg2rad(80),
};

export default function Camera(props) {
	const ref = useRef();
	const { camera, gl } = useThree();
	useFrame((state, delta) => ref.current.update(delta));
	return <cameraControls ref={ref} args={[camera, gl.domElement]} {...settings} />;
}
