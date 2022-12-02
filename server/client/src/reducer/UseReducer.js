

let loginState =()=>{
    let state=JSON.parse(localStorage.getItem("login"));
    return state;
}

export let initialState=loginState();
// we have assiged null to initialState but will chnage the value 


export const reducer=(state,action)=>{
    switch(action.type)
    {
     case "USER": return state = action.payload;

     default: return state;
    }

}


// reducer method takes 2 arguments one is state, and another one is action

 
// trigger the action and acording to action state value get changed 