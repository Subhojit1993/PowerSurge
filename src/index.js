import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './Externals/Home';
import About from './Externals/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
 <Provider store={configureStore()}>
 	<MuiThemeProvider>
		<Router>
			<div>
				<Route exact path="/" component={App}/>
				<Route path="/home" component={Home}/>
				<Route path="/about" component={About}/>
			</div>
		</Router>
	</MuiThemeProvider>
 </Provider>,
 document.getElementById('root')
);
serviceWorker.unregister();