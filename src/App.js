import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar'
import TextForm from './Component/TextForm' 
import TextToSpeech from './Component/TextToSpeech';

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
     <div className="container">
     <TextForm title="Enter the text here to analyze"/>
     {/* <TextToSpeech /> */}
     
     </div>
    </>
  );
}

export default App;
