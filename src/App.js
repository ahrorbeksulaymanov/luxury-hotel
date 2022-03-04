import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-modal-video/scss/modal-video.scss';
import 'antd/dist/antd.css';
import HomePage from './pages/home/home';
import { Route, Switch } from 'react-router-dom';
import Booking from './pages/booking';
import Contact from './pages/contact';
import AboutPage from './pages/about';
import BlogsPage from './pages/blog';
import RoomsPage from './pages/rooms';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/blogs">
          <BlogsPage />
        </Route>
        <Route path="/rooms">
          <RoomsPage />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
