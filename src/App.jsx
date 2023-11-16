import './App.css'
import LineChart from './Components/LIneChart/Linechart'
// import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import Phones from './Components/Phones/Phones'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {

  return (
    <>

    <Navbar></Navbar>
{/* <DaisyNav></DaisyNav> */}

      <h1 className='text-center text-4xl'>Hello</h1>

   <PriceOptions></PriceOptions>
   <LineChart></LineChart>
   <Phones></Phones>


    </>
  )
}

export default App
