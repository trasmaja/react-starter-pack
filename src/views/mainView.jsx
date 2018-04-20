/* jshint node: true */
/*jshint esnext: true */
/*global window */
/* jshint browser: true */
import React from 'react';
import {render} from 'react-dom';
import { DemoComponent } from '../components/demoComponent.jsx'
//mobx
import store from '../store.js';

export class MainView extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log(store.test)
    }
    render () {
        return (
            <div>
                <DemoComponent store={store}/>
            </div>
            
            ); 
        }
    }