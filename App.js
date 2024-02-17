import axios from "axios"
import { useState } from "react"
function App(){
const [deg,setdeg]= useState("0")
const [City,setcity] = useState("France")
const [desc,setdesc] = useState("Ranining")
const [enteredvalue,setenteredvalue] = useState("")

function handleinput(event)
{
    console.log(event.target.value)
    setenteredvalue(event.target.value)
}


function getdata()
{
   var Weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}&appid=cbde0c9b7438c9c0142079eb8e12c844`)
   Weather.then(function(dalta){
    setdeg(dalta.data.main.temp)
    setdesc(dalta.data.weather[0].main)
    setcity(dalta.data.name)
    })
}

    return(<div className="flex flex-row justify-center h-[100vh] items-center">
    <div   style={{backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"}} className="p-2 rounded-md shadow" >
        <h2 className="font-medium">Hey! ⛅</h2>
        <p>Do You want to Know the Weather Report:)</p>
        <input onChange={handleinput} type="text" className="rounded-md h-6 text-sm mt-2 p-1 outline-none" placeholder="City Name?"/>
        <br/>
        <button onClick={getdata} className="bg-black text-white rounded-lg p-1 text-xs mt-2">Get Report ⚡</button>

        <p>Degree: {deg} | City: {City} | Weather: {desc}</p>
    </div>
    </div>)
}

export default App