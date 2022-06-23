import {
	useState,
	useEffect,
	FormEvent,
	useCallback,
	useRef,
	FunctionComponent,
} from 'react';
import {
	Button,
	Grid,
	MenuItem,
	FormControl,
	InputLabel,
	Select,
} from '@mui/material';
import { sample, shuffle } from 'lodash';
import { useSnackbar } from 'notistack';
import { Loader } from 'google-maps';
import { createUseStyles } from 'react-jss';
import { io, Socket } from 'socket.io-client';

import { RouteExistsError } from '../errors/route-exists.error';

import { makeCarIcon, makeMarkerIcon, Map } from '../utils/map';
import { getCurrentPosition } from '../utils/geolocation';
import {
	ClientToServerEvents,
	Route,
	ServerToClientEvents,
} from '../utils/models';

import { Navbar } from './Navbar';

const API_URL = process.env.REACT_APP_API_URL as string;

const googleMapsLoader = new Loader(process.env.REACT_APP_GOOGLE_API_KEY);

const colors = [
	'#b71c1c',
	'#4a148c',
	'#2e7d32',
	'#e65100',
	'#2962ff',
	'#c2185b',
	'#FFCD00',
	'#3e2723',
	'#03a9f4',
	'#827717',
];

const useStyles = createUseStyles({
	root: {
		width: '100%',
		height: '100%',
	},
	form: {
		margin: '16px',
	},
	btnSubmitWrapper: {
		textAlign: 'center',
		marginTop: '8px',
	},
	map: {
		width: '100%',
		height: '100%',
	},
});

export const Mapping: FunctionComponent = () => {
	const classes = useStyles();

	const [routes, setRoutes] = useState<Route[]>([]);
	const [routeIdSelected, setRouteIdSelected] = useState<string>('');

	const mapRef = useRef<Map>();
	const socketIORef =
		useRef<Socket<ServerToClientEvents, ClientToServerEvents>>();
	const { enqueueSnackbar } = useSnackbar();

	const finishRoute = useCallback(
		(route: Route) => {
			enqueueSnackbar(`${route.title} finalizou o serviço.`, {
				variant: 'success',
			});

			mapRef.current?.removeRoute(route._id);
		},
		[enqueueSnackbar],
	);

	useEffect(() => {
		fetch(`${API_URL}/routes`)
			.then((data) => data.json())
			.then((data) => setRoutes(data));
	}, []);

	useEffect(() => {
		(async () => {
			const [, position] = await Promise.all([
				googleMapsLoader.load(),
				getCurrentPosition(),
			]);

			const divMap = document.getElementById('map') as HTMLElement;

			mapRef.current = new Map(divMap, {
				zoom: 15,
				center: position,
			});
		})();
	}, []);

	useEffect(() => {
		if (!socketIORef.current?.connected) {
			socketIORef.current = io(API_URL);
			socketIORef.current.on('connect', () =>
				console.log('Conectado ao websocket'),
			);
		}

		const handler = (data: {
			routeId: string;
			position: [number, number];
			finished: boolean;
		}) => {
			mapRef.current?.moveCurrentMarker(data.routeId, {
				lat: data.position[0],
				lng: data.position[1],
			});

			const route = routes.find((route) => route._id === data.routeId) as Route;

			if (data.finished) {
				finishRoute(route);
			}
		};

		socketIORef.current?.on('new-position', handler);

		return () => {
			socketIORef.current?.off('new-position', handler);
		};
	}, [finishRoute, routes]);

	const handleStartRoute = useCallback(
		(event: FormEvent) => {
			event.preventDefault();

			const route = routes.find((route) => route._id === routeIdSelected);

			const color = sample(shuffle(colors)) as string;

			try {
				mapRef.current?.addRoute(routeIdSelected, {
					currentMarkerOptions: {
						position: route?.startPosition,
						icon: makeCarIcon(color),
					},
					endMarkerOptions: {
						position: route?.endPosition,
						icon: makeMarkerIcon(color),
					},
				});

				socketIORef.current?.emit('new-direction', {
					routeId: routeIdSelected,
				});
			} catch (error) {
				if (error instanceof RouteExistsError) {
					enqueueSnackbar(
						`${route?.title} está em serviço no momento. Aguarde a finalização.`,
						{
							variant: 'error',
						},
					);
					return;
				}

				throw error;
			}
		},
		[routeIdSelected, routes, enqueueSnackbar],
	);

	return (
		<Grid container className={classes.root}>
			<Grid item xs={12} sm={3}>
				<Navbar />

				<form onSubmit={handleStartRoute} className={classes.form}>
					<FormControl fullWidth>
						<InputLabel id='select-label'>Selecione uma corrida</InputLabel>
						<Select
							fullWidth
							displayEmpty
							value={routeIdSelected}
							onChange={(e) => setRouteIdSelected(e.target.value + '')}
							labelId='select-label'
							label='Selecione uma corrida'
						>
							{routes.map((item, key) => (
								<MenuItem key={key} value={item._id}>
									{item.title}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<div className={classes.btnSubmitWrapper}>
						<Button type='submit' color='primary' variant='contained'>
							Iniciar corrida
						</Button>
					</div>
				</form>
			</Grid>

			<Grid item xs={12} sm={9}>
				<div id='map' className={classes.map} />
			</Grid>
		</Grid>
	);
};
