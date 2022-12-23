const addItem = [];
const addItems = (state = addItem, action) =>{
        switch(action.type){
            case "ADD" : return [
                ...state,
                action.payload
            ]
            break;
            case "DELETE" : 
                return state = state.filter((x)=>{
                    return x.id !== action.payload.id
                })
            break;
            default: return state;
            break;
            
        }
}
export default addItems;