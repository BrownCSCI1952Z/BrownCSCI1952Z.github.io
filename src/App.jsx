import { BrowserRouter } from "react-router-dom";
import { About, Staff, Hours, Lectures, Hero, Navbar, Labs, StarsCanvas, Resources } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Lectures />
        <Labs />
        <Hours />
        <Resources />
        <div className='relative z-0'>
          <Staff />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
