import { useState } from 'react';
import './App.css';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const lyric = [
	'Re...',
	'Re...',
	'Reina',
	'Mi amor',
	'Yo te extraño',
	'bebe',
	'Que',
	'Hpta',
	'Chimba',
	'Seria',
	'Vernos',
	'Otra vez',
];

function App() {
	const [currentLyricText, setCurrentLyricText] = useState(0);
	return (
		<div className="App">
			{currentLyricText < lyric.length ? (
				<>
					<Typography variant="h6" gutterBottom>
						{lyric[currentLyricText]}
					</Typography>
					<Button onClick={() => setCurrentLyricText(currentLyricText + 1)}>
						Siguiente
					</Button>
				</>
			) : (
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/B8sO-Xu0g5M?start=120"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			)}
		</div>
	);
}

export default App;
