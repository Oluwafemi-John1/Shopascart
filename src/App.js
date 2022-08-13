import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Container from './components/Container';
import Stores from './components/Stores';
import Contain from './components/Contain';
import Shopping from './components/Shopping';

const App = () => {
  return (
    <>
      <Header/>
      <NavBar/>
      <Container/>
      <Stores/>
      <Contain/>
      <Shopping/>
    </>
  );
}

export default App;
