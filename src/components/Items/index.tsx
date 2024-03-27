import React from "react";
import Item from "../Item/index.tsx";
import styles from "./Items.module.scss";
import { useAppContext } from "./../../useAppContext.tsx";

const Items:React.FC=()=>{  //props-это для передачи данных

    const {currentItems}=useAppContext();  //currenItems-текущие категории

    return(
        <main className={styles.main}>
            {currentItems.map((el:any)=>(           //map-это метод
                <Item key={el.id} item={el}/> //onShowItem={onShowItem} onAdd={onAdd}//onShowItem-отображение картинки,onAdd-это отображение кнопки плюс(+)
            ))}
        </main>
    );
}
export default Items;
