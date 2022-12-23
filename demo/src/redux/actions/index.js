export const Add = (product) =>{
    return{
        type: 'ADD',
        payload: product
    }
}
export const Delete = (product) =>{
    return{
        type: 'DELETE',
        payload: product
    }
}