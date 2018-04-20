/* jshint node: true */
/*jshint esnext: true */
/*global window */
/* jshint browser: true */

require('./demoComponent.scss');
import React from 'react';
import {render} from 'react-dom';

//mobx
import { observer } from "mobx-react";


@observer
export class DemoComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        
        return (
                <div>
                <h1 className="democss">{this.props.store.demo}</h1>
                <h1>Greetings traveler</h1>
                </div>
        ); 
        
        
    }
}


                    