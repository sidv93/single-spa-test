import * as singleSpa from "single-spa";
import {matchingPathname, runScript} from "./utils";

const loadAngularApp = async () => {
    // await runScript('http://localhost:5000/polyfills.bundle.js');
    await runScript('http://localhost:5000/main.js');
    return window.angular7App;
};


export const registerAngular7App = () => {
    singleSpa.registerApplication('angular-app-3', loadAngularApp, matchingPathname(['/angular7', '/']));
};

