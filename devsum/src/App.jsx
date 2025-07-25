import React from 'react'; // Make sure React is imported if not already
import "./App.css";
import Button from "./components/Button";
import Loader from "./components/Loader";
import FormInput from "./components/FormInput";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar"; 

function App() {
  return (
    <>
      <Navbar />


      <div style={{ paddingTop: '80px' }}> 
        <div className="bg-[#132c44] rounded-xl p-6">
          <div className="h-1 w-full bg-border-blue"></div>
        </div>

        <Button
          size="lg"
          variant="primary"
          disabled
          className="flex items-center justify-center"
        >
          <Loader />
          Apply Now more
        </Button>

        <FormInput placeholder="hello" type="name" isSearch={true} label="name" />
        <NotFound />
      </div>
    </>
  );
}

export default App;