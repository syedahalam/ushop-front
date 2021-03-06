import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen'
import ShippingScreen from './screens/ShippingScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Route path='/' component={HomeScreen} exact/>
					<Route path='/product/:id' component={ProductScreen}/>
					<Route path='/cart/:id?' component={CartScreen}/>
					<Route path='/login' component={LoginScreen}/>
					<Route path='/shipping' component={ShippingScreen}/>
				</Container>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
