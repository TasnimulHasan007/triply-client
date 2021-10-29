import Header from './components/Header/Header'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import NotFound from './Pages/NotFound/NotFound'
import Footer from './components/Footer/Footer'
import Join from './Pages/Join/Join'
import AuthProvider from './contexts/AuthProvider'
import Dashboard from './Pages/Dashboard/Dashboard'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import TourDetails from './Pages/TourDetails/TourDetails'
import MyOrders from './Pages/MyOrders/MyOrders'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/join">
            <Join />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/tours/:tourId">
            <TourDetails />
          </PrivateRoute>
          <PrivateRoute path="/myOrders">
            <MyOrders />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  )
}

export default App
