import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productdata } from './components/Products/data';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Hero />
			<Products heading='Choose your favorite' data={productdata} />
		</Router>
	);
}

export default App;
