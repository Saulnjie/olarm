import 'bootstrap/dist/css/bootstrap.min.css';
// import "./scss/styles";

import './scss/styles.scss';

//CUSTOM COMPONENTS
import Navigation from '../src/components/Navigation';
import backgroundLanding from './images/landing.jpg';
import Buttons from './components/ButtonsNav.js';
import Information from './components/BannerInfo';
import CardsLanding from './components/CardsLanding';
import olarm_logo_image from './images/olarm_logo.png';

function App() {
	return (
		<section
			class='landing__page'
			style={{ backgroundImage: `url(${backgroundLanding})` }}>
			<div className='container container__Nav'>
				<div className='col-sm-3'>
					<img src={olarm_logo_image} />
				</div>
				<div className='col-sm-6'>
					<Navigation />
				</div>
				<div className='col-sm-3 navBtns'>
					<Buttons />
				</div>
			</div>
			<div className='container landing__info'>
				<div className='col-sm-8'>
					<Information />
				</div>
				<div className='col-sm-2'></div>
				<div className='col-sm-2'></div>
			</div>
			<div className='container'>
				<div className='col-sm-8'>
					<CardsLanding />
				</div>
				<div className='col-sm-2'></div>
				<div className='col-sm-2'></div>
			</div>
		</section>
	);
}

export default App;
