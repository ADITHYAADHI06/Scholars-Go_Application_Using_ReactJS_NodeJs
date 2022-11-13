export const initialState=null;
// we have assiged null to initialState but will chnage the value 
export const reducer=(state,action)=>{
   if (action.type==="USER") {
       return action.payload;
   }
   return state;
}


// reducer method takes 2 arguments one is state, and another one is action

 
// trigger the action and acording to action state value get changed 