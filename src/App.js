import 'bootstrap/dist/css/bootstrap.min.css';
// import "./scss/styles";

import './scss/styles.scss';

import Col from 'react-bootstrap/Col';
//CUSTOM COMPONENTS
import Navigation from '../src/components/Navigation';

function App() {
	return (
		<div class='container'>
			<div class='col sm-10'>
				<Navigation />
			</div>
		</div>
	);
}

export default App;
