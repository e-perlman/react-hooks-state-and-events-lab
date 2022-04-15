import React,{useState} from "react";

function Item({ name, category }) {
  const [itemStatus,setItemStatus]=useState(false)
  const cart=itemStatus? "in-cart":''
  const text=itemStatus? "Remove From Cart":'Add to Cart'
  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={()=>setItemStatus(!itemStatus)} className="add">{text}</button>
    </li>
  );
}

export default Item;
