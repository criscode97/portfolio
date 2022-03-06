import './app.scss';
import MainPage from './components/MainPage/MainPage';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import NavBar from './components/NavBar/NavBar';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className='main'>
      <NavBar />
      <Contact />
      <div className='sections'>
        <MainPage />
        <AboutMe />
        <Projects />
        <Resume />
      </div>
    </div>
  );
}

export default App;
