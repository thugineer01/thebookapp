// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login'; // Import the Login component

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Define your other routes here */}
        <Route path="/login" component={Login} />
        {/* Define your other routes here */}
      </Switch>
    </Router>
  );
};

export default App;
