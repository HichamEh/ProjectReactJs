import React from 'react';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import { Delete } from '../redux/actions';
import { Link } from 'react-router-dom';
const Main = () =>{
    const state = useSelector((state)=>state.addItem)
    const dispatch = useDispatch()
    const handleClose = (item) =>{
        dispatch(Delete(item))
    }
    const cartItems = (cartItem)=>{
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container p-4">
                    <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label='Close'></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.img} alt={cartItem.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className='lead fw-bold'>{cartItem.price} DH</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const emptyCart = () => {
        return(
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container p-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                    </div>
                </div>
        )
    }
    const button = ()=>{
        return(
            <div className="container">
                <div className="row">
                    <Link  to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To Checkout</Link>
                </div>
            </div>
        )
    }
    return(
        <>
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartItems)}
        {state.length !== 0 && button()}
        </>
    )
}
export default Main