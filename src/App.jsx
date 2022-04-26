import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Experince from './components/experience/Experince';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testmonials from './components/testmonials/Testmonials';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';



function App() {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experince />
    <Services />
    <Portfolio />
    <Testmonials />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
