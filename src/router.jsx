import React from 'react';
import {render} from 'react-dom';

import {MainView} from './views/mainView.jsx';
import { Link } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
    componentDidMount () {
      window.scrollTo(0, 0)
    }
  render () {
    return (
        <h1>hey</h1>
    )
  }
}

render((
     <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <Switch>
            <Route exact path="/" component={MainView} ignoreScrollBehavior/>
        </Switch>
     </BrowserRouter>
     ),
     document.getElementById('container')
);