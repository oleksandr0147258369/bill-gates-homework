import logo from './logo.svg';
import './App.css';
//Main function for component called App
function App() {
	// Creating lists of data for site
	const Quotes = [
		'Patience is a key element of success',
		'If you think your teacher is tough, wait till you get boss',
		'Life is not fair — get used to it!',
		'Success is a lousy teacher. Це seduces smart people in thinking they can not lose',
		'Be nice to nerds..'
	]
	const Links = [
		'https://en.wikipedia.org/wiki/Bill_Gates',
		'https://www.gatesfoundation.org/',
		'https://www.gatesnotes.com/',
		'https://twitter.com/billgates'
	]
	// Creating App component
	return (
		<div className="App">
			{/*Creating card bootstrap to display data*/}
			<div className={'card bg-light m-3'}>
				<h1 className={'card-title'}>Quotes of Bill Gates</h1>
				<div className={'card-body'}>
					<div>
						{/*Using botstrap grid*/}
						<div className={'row'}>
							<div className={'col-5'}>
								<img className={'card-img'}
									 src={'https://upload.wikimedia.org/wikipedia/commons/8/88/Bill_Gates_at_the_European_Commission_-_2025_-_P067383-987995_%28cropped%29.jpg'}/>
							</div>
							<div className={'col-7'}>
								<p>William Henry Gates III (born October 28, 1955) is an American businessman and
									philanthropist. A pioneer of the microcomputer revolution of the 1970s and 1980s, he
									co-founded the software company Microsoft in 1975 with his childhood friend Paul
									Allen.</p>
								{/*Mapping through list of quotes to make code shorter*/}
								{Quotes.map(q =>
									<div className={'card m-2 mt-0'}>
										<h4 className={'h5'}>{q}</h4>
										<span className={'card-subtitle'}>Bill Gates</span>
									</div>
								)}</div>
						</div>
					</div>
					<div>
						<h2>Useful Links</h2>
						<div className={'row'}>
							{/*Mapping through list of links to shorten the code*/}
							{Links.map(l => <a href={l}>{l}</a>)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
