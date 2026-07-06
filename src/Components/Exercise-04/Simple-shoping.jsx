 import { useState } from "react";

function SimpleShoping(){
  const [productName, setProductName]=useState("")
  const[itemPrice, setItemPrice]= useState("")
  const[ cart, setCart]=useState([])

 const HandleIncrease = (id) => {
  const updatedCart = cart.map((item) => {
    if (item.id === id) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
  
  setCart(updatedCart);
};
  const HandleDecrease=(id)=>{
    const UpdateedCaer= cart.map((item) =>{
        if( item.id===id){
            if( item.quantity>1){
                return{...item, quantity: item.quantity -1};
            }
        }
        return item;
    })
 setCart(UpdateedCaer);
};
const HandleRemove = (id) => {
  const updatedCart = cart.filter((item) => item.id !== id);
  setCart(updatedCart);
};

 const handleAdd=()=>{
    if(productName, itemPrice .trim()==="")return;
     const newProduct={
         id: crypto.randomUUID(),
         name:productName,
         price:itemPrice,
         quantity:1

     }
     setCart([ ...cart, newProduct])
     setItemPrice("")
     setProductName("")
     console.log(newProduct)

  }

  let totalPrice=0;
  cart.forEach((item)=>{
    totalPrice += Number(item.price)* item.quantity;
  });


    return(
        <>
        <h2>Simple Shoping</h2>
        <h5>Add a Product</h5>

        <input 
        type="text"
         placeholder="Product Name"
          onChange={(e)=>setProductName(e.target.value)}
          value={productName} />
        <input type="text" placeholder="Price" 
         onChange={(e)=>setItemPrice(e.target.value)}
         value={itemPrice}/>
        <button onClick={handleAdd}>Add to Cart</button>
       
 {cart .length >0 ?(<>
  <h3> Product in Cart</h3>
      
        <ul>
          {cart.map(carts =>(
            
            <li>
         {carts.name} - ${carts.price}
             <div>
                Quantity:
    <button onClick={()=>HandleDecrease(carts.id)}>-</button>
    <span>{carts.quantity} </span>
     <button onClick={()=>HandleIncrease(carts.id)}>+</button>
     <button onClick={()=> HandleRemove(carts.id)}>Remove</button>
             </div>
             
             </li>
           
          ) )}
        </ul>
        <h3>total price =${ totalPrice.toFixed(2)} </h3>
  </> ): (<p>the cart si emty</p> )}
       
        </>
    )
  
}

export default SimpleShoping;   