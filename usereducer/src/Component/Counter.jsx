import { useReducer } from "react"


const reducerFn=(state,action)=>{
  if(action.type==="inc"){
    return{
      ...state,
      count:state.count+action.countValue
    }
  }else if(action.type==="dec"){
    return{
      ...state,
      count:state.count-action.countValue
    }
  }else if(action.type==="reset"){
    return{
      ...state,
      count:action.payLoad
    }
  }
  return state;

}


export default function Counter() {
  const[state,dispatch]=useReducer(reducerFn,{count:0});
  return (
  <div>
    <h2>Count value is {state.count}</h2>
    <button onClick={()=>{dispatch({
      type:"inc",
      countValue:1
    })}}>Increase</button>
    <button onClick={()=>{dispatch({
      type:"dec",
      countValue:1
    })}}>Decrease</button>
    <button onClick={()=>{dispatch({
      type:"reset",
      payLoad:0
    })}}>Reset</button>
  </div>
  )
}

