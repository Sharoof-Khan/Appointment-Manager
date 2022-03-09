import './App.css';
import { DrList } from './components/DrList';
// import bgImage from '../img/dr.jpg'
// import bgImage from './img/dr.jpg'
// import bgImage2 from './img/dr2.jpg'
// import bgImage2 from './img/dr3.jpg'
import bgImage2 from './img/dr4.jpg'
// import bgImage2 from './img/dr5.jpg'

function App() {
  return (
    <div style={{backgroundImage : `url(${bgImage2})`,backgroundRepeat:'no-repeat',minHeight:"100vh",maxHeight:"100%",maxWidth:"100%",backgroundSize:"100% 100%",opacity:"0.7"}}>
      <h1 style={{fontWeight:"bold",color:"red",textAlign:"center", marginLeft:"100px"}}>Apolo hospital</h1>
      <DrList />
    </div>
  );
}

export default App;
