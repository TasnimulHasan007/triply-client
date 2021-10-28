import Header from './components/Header/Header'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import NotFound from './Pages/NotFound/NotFound'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
