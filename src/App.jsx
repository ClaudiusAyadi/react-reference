import React from 'react';
import Lundu from './lundu.mdx';

const components = { p: props => <p className='content' {...props} /> };

const App = () => {
	return (
		<div className='app'>
			<header>
				<figure>
					<picture>
						<img src='/brand.png' alt='Surreal Beauty Enterprise Brand Logo' />
					</picture>
				</figure>
				<div className='contact'>
					<div>
						<h2>Contact:</h2>
						<p>
							<a href='tel:00260966902466'>00260966902466</a>
						</p>
						<p>
							<a href='mailto:cmchihili@yahoo.com'>cmchihili@yahoo.com</a>
						</p>
					</div>
					<div>
						<h2>Address:</h2>
						<p>Shop 4, General Dealers Complex, </p>
						<p>Nkana East, 23rd Street, Kitwe, Zambia.</p>
					</div>
				</div>
			</header>
			<main>
				<div className='to'>
					<h3>To Whom It May Concern</h3>
					<time dateTime='28/12/2024'>28/12/2024</time>
				</div>

				<Lundu components={components} name='Ucizi Lundu' />
			</main>
			<footer>
				<h3>Mrs Claire Chihili</h3>
				<p>General Manager</p>
			</footer>
		</div>
	);
};

export default App;
