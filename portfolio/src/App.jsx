import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CssBaseline, Grid, ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });
  const handleChange = () => {
    setDarkMode(!darkMode)
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Grid className='d-flex'>
          <Grid item lg={2}>
            <Navbar checked={darkMode} onChange={handleChange}/>
          </Grid>
          <Grid item lg={8}>
            <About />
            <Projects />
            <Skills />
            <Contacts />
          </Grid>
        </Grid>
    </ThemeProvider>
  );
}

export default App;