export interface Position {
	lat: number;
	lng: number;
}

export interface Route {
	_id: string;
	title: string;
	startPosition: Position;
	endPosition: Position;
}

export interface ServerToClientEvents {
	noArg: () => void;
	'new-position': (data: {
		routeId: string;
		position: [number, number];
		finished: boolean;
	}) => void;
}

export interface ClientToServerEvents {
	noArg: () => void;
	'new-direction': ({ routeId: string }: any) => void;
}
