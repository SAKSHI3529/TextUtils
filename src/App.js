import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar'
import TextForm from './Component/TextForm' 

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
     <div className="container">
     <TextForm title="Enter the text here to analyze"/>
     </div>
    </>
  );
}

export default App;
