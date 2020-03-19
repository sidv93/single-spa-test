import * as singleSpa from "single-spa";
import {matchingPathname, runScript} from "./utils";

const loadAngularApp = async () => {
    await runScript('http://localhost:4000/polyfills.bundle.js');
    await runScript('http://localhost:4000/main.bundle.js');
    return window.angularApp2;
};


export const registerAngularApp2 = () => {
    singleSpa.registerApplication('angular-app-2', loadAngularApp, matchingPathname(['/angular2', '/']));
};

