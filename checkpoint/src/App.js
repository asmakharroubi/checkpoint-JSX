import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import FullName from './components/Profile/FullName';
import ProfilePhoto from './components/Profile/ProfilePhoto';
import Navigation from './components/Profile/Navigation';
import Address from './components/Profile/Address';
import { Carousel } from "react-bootstrap";


function App() {
  return (
    <div className="App">
      <Navigation />
      
      <ProfilePhoto />
      
      <Carousel variant="dark">
        <Carousel.Item>
          <FullName />
        </Carousel.Item>
        <Carousel.Item>
          <Address />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
