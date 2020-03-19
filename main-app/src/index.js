import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as singleSpa from 'single-spa';
import {registerReactApp} from "./apps/react-app";
import {registerAngularApp} from "./apps/angular-app";
import {registerAngularApp2} from "./apps/angular-app-2";
import {registerAngular7App} from "./apps/angular-7-app";

ReactDOM.render(<App/>, document.getElementById('root'));


// registerReactApp();
// registerAngularApp();
// registerAngularApp2();
registerAngular7App();

singleSpa.start();
