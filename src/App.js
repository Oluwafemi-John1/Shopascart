import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Container from './components/Container';
import Stores from './components/Stores';
import Contain from './components/Contain';
import Shopping from './components/Shopping';
import Social from './components/Social';
import Shopascartplus from './components/Shopascartplus';
import Faq from './components/Faq';

const App = () => {
  return (
    <>
      <Header/>
      <NavBar/>
      <Container/>
      <Stores/>
      <Contain/>
      <Shopping/>
      <Social/>
      <Shopascartplus/>
      <Faq/>
    </>
  );
}

export default App;