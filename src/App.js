import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './routes/About'
import Space from './routes/Space'
import Contact from './routes/Contact'
import Home from './routes/Home'

function App() {
  return (
    <div>
        <Router>
            <Navbar />
            <Switch>
                <Route path='/lennon' component={Home} />
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/space">
                    <Space />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
