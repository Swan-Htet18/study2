import data from './data.js'
import Navbar from "./Navbar";
import Section from './Section';
function App() {
  const sections = data.map(item => {
    return <Section
    key={item.title}
    {...item}/>
  })

  
  return (
    <div>
      <Navbar></Navbar>
      {sections}
    </div>
  );
}

export default App;
