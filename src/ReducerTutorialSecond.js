import React, { useReducer } from "react";

const ReducerTutorialSecond = () => {
  // Initializing state variables using the useState hook
  const reducer=(state, action) => {
    switch(action.type){
        case"INCREMENT":
        return{count: state.count+1, showText:state.showText}
        case"toogleShowText":
        return{count: state.count, showText:!state.showText}
        default:
            return state
    }

  };
  const [state,dispatch] = useReducer(reducer, {count:0, showText:true});
 

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          // Updating count and toggling showText on button click
          dispatch({type:"INCREMENT"})
          dispatch({type:"toogleShowText"})
        }}
      >
        Click here
      </button>

      {/* Conditional rendering based on the value of showText */}
      {state.showText && <p>This is a text</p>}
    </div>
  );
};

// Exporting the ReducerTutorial component as the default export
export default ReducerTutorialSecond;
