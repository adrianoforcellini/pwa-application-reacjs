import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './container/Home';

function App() {
  return (
    <main>
      <section>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </BrowserRouter>
      </section>
    </main>

  );
}

export default App;
