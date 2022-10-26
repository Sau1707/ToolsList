/* Return tead of the snake*/
export function findHead(array) {
	return [...array][array.length - 1];
}

/* Create map from width and height*/
export function createMap(width, height) {
	let map = [];
	for (let w = 0; w <= width; w++) {
		map.push([w, 0, height]);
		map.push([-w, 0, height]);
		map.push([w, 0, -height]);
		map.push([-w, 0, -height]);
	}
	for (let h = 0; h < height; h++) {
		map.push([width, 0, h]);
		map.push([width, 0, -h]);
		map.push([-width, 0, h]);
		map.push([-width, 0, -h]);
	}
	return map;
}
