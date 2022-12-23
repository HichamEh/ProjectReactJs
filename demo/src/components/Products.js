import React from "react";
import { useParams } from "react-router-dom";
import DATA from "../Data";
import { useState } from "react";
import {useDispatch} from 'react-redux';
import { Add, Delete } from "../redux/actions/index";
const Products = () =>{
    const [Cart, setCart] =useState("Add to Cart")
    const ID = useParams();
    const DETAIL = DATA.filter(a=>a.id == ID.id);
    const B = DETAIL[0];
    console.log(B);
    const dispatch = useDispatch()
    const handleCart =(B)=>{
            if (Cart === "Add to Cart"){
                dispatch(Add(B))
                setCart("Remove from Cart")
            } else{
                dispatch(Delete(B))
                setCart("Add to Cart")
            }
    }
    return(
        <>
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product ">
                        <img src={B.img} alt={B.title} height="400p"x/>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold">{B.title}</h1>
                        <hr />
                        <h2 className="my-4">{B.price} DH</h2>
                        <p className="lead">{B.desc}</p>
                        <button onClick={()=>handleCart(B)} className="btn btn-outline-primary my-5">{Cart}</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Products