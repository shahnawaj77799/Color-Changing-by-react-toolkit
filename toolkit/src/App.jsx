
import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { colorChange } from "./bgcolorSlice";

const App=()=>{
  const [color,setColor]= useState("");
  const bgclr=useSelector((state)=>state.mycolor.bgcolor);
  const dispatch=useDispatch();
  return(
    <>
    <h1>bg change</h1>
    Enter color : <input type="text"value={color} onChange={(e)=>{setColor(e.target.value)}} />
    <button onClick={()=>{dispatch(colorChange(color))}}>submit</button>
<br /><br />
<div style={{width:"400px", height:"400px",border:"1px solid black", backgroundColor: bgclr}}>

</div>

    </>
  )
}

export default App;