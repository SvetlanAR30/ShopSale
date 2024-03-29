import React from "react";
import styles from "./Item.module.scss"
import { useAppContext } from "./../../useAppContext.tsx";

interface Props{ //Интерфейс typescript
    item:any;
}

const Item:React.FC<Props>=({item})=>{ //Вызов интерфейса Props

    const {onShowItem, addToOrder} =useAppContext(); //Вызов функций onShowItem,onAdd

    return(
        <div className={styles.item}>
            <img src={"./images/"+item.img} onClick ={()=>onShowItem(item)} alt="Error" />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <b>{item.price}$</b>
            <div className={styles.addToCart} onClick={()=>addToOrder(item)}>+</div>
        </div>
    );
}
export default Item;