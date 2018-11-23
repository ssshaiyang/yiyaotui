import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, HashRouter} from 'react-router-dom';

import IndexBody from './IndexBody/IndexBody'
import Cooperation from './Cooperation/Cooperation'
import CasePage from './CasePage/CasePage'
import AboutUs from './AboutUs/AboutUs'
import FunctionPage from './FunctionPage/FunctionPage'
import Regist from './Regist/Regist.js'
import Login from './Login/Login.js'
import IndexCustomized from './IndexCustomized/IndexCustomized.js'
import IndexLogin from './Login/Login.js'


export default class Root extends React.Component  {
render(){
	return(
	    <div>
	    	<HashRouter >
	    		<div>
	    		<Route exact path="/" component={IndexBody}></Route>
	    		<Route path="/AboutUs" component={AboutUs}></Route>
	    		<Route path="/CasePage" component={CasePage}></Route>
	    		<Route path="/Cooperation" component={Cooperation}></Route>
	    		<Route path="/FunctionPage" component={FunctionPage}></Route>
	    		<Route path="/Regist" component={Regist}></Route>
	    		<Route path="/IndexCustomized" component={IndexCustomized}></Route>
	    		<Route path="/IndexLogin" component={IndexLogin}></Route>
	    		<Route path="/Login" component={Login}></Route>

	    		</div>
		    </HashRouter>
	    </div>

		)
	}
}


ReactDOM.render(
	<Root/>, document.getElementById('app'));