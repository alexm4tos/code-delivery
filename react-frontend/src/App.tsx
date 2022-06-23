import { CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';

import theme from './theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<SnackbarProvider maxSnack={3}>
				<CssBaseline />
				<h2>Code Delivery</h2>
			</SnackbarProvider>
		</ThemeProvider>
	);
}

export default App;
