import "./App.css";
import Wcard from "./component/card"
window.addEventListener('click',function(e){
  console.log(e);
})

function App() {
 
  return (
    <div className="App">
      <div className="layout">
        <Wcard  id='111' />
      </div>
    </div>
  );
}

export default App;
