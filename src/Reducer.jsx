import {createAction,createReducer} from "@reduxjs/toolkit";

const increment = createAction('increment')
const decrement = createAction('decrement')
const incrementBy5 = createAction('incrementBy5')

const initialState = {
  count:0
}

const customReducer = createReducer(initialState,(builder)=>{
  builder.addCase(increment,(state,action)=>{
    state.count += 1;
  }),
  builder.addCase(decrement,(state,action)=>{
      state.count -= 1;
  }),
  builder.addCase(incrementBy5,(state,action)=>{
    state.count += action.payload
  })
  
});

export default customReducer;
