declare module 'papaparse';
declare module 'leaflet';
declare module 'leaflet' {
	export class Map {
		[key: string]: any;
	}
	export class Marker {
		[key: string]: any;
	}
	export function featureGroup(markers: any[]): any;
}
declare module 'react-dom/client';
