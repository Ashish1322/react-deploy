import {useState} from "react"
import Card from "./Card"

function App() {
  const [count,setCount] = useState(11)

  function increaseCount()
  {
    setCount(count + 1)
  }
  var names = [ {name:"A"} , {name: "B"} , {name: "C"} , {name: "D"}]


  return (
    <div>
       {names.map( (item,index) => {
    return <Card name={item.name} />
  })}
   </div>
  )
}

export default App
