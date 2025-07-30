import { useState } from 'react'
import './App.css'
import{Link} from'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>welcome to frontend class in klu</h1>
      <h2>todays topic is intro to react</h2>
      <h3>todays date is 23.07.25</h3>
      <h4>Sri valli</h4>
      <Link to="/page1">Go to page 1</Link>
      <br></br>
      <Link to="/page2">go to page 2</Link>
      <br></br>
      <Link to="/page3">go to page 3</Link>
      
    </>
  )
}

export default App