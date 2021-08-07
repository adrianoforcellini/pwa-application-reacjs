import React from 'react'
import Home from './container/Home'
import Post from './container/Post'
// import Header from './components/Header'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    <main>
      {/* <Header /> */}
      <section>
        <Router>
          <div>
            <Switch>
              <Route path="/:subject/:id">
                <Post />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </section>
    </main>
  )
}

export default App
