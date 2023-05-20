// import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

// const App= ()=> {

  

//   return (
  
//   <div>
  
//   hello am prog
  
//   </div>
  
//   )
  
//   }
  
    
  
//   export default App



import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        {/* <div className='bg-greenish1'> */}

        <About />
        {/* </div> */}

        <div className='bg-greenish1'>

        <Experience />
        </div>

        <div className='bg-greenish1'>

        <Tech />
        </div>
        <div className='relative z-0 '>
        <Works />
        <Feedbacks />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;