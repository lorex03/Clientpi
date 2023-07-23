import './App.css';
import {Detail,Form,Home,Landing} from "./views"
import { Route } from 'react-router-dom/cjs/react-router-dom';

function App() {
  return (
    <div className="App">
   <Route exact path="/" component={Landing}        />  
    <Route exact path="/detail" component={Detail} /> 
    <Route exact path="/create" component={Form} />   
    <Route exact path="/home"render ={() => <Home/>} /> 
    </div>
  );
}

export default App;

//function App() {
  //return (
     //<div className="App">
     //  <h1>MESSIIIII</h1>
    // </div>
  // );
 //}

 //export default App;
