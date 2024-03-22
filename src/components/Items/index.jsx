import React from "react";
import Item from "./../Item";
import styles from "./Items.module.scss";
import {useAppContext} from "./../../useAppContext";

export default function Items(){  //props-это для передачи данных

    const {currentItems}=useAppContext();  //currenItems-текущие категории

    return(
        <main>
            {currentItems.map(el=>(           //map-это метод
                <Item key={el.id} item={el}/> //onShowItem={onShowItem} onAdd={onAdd}//onShowItem-отображение картинки,onAdd-это отображение кнопки плюс(+)
            ))}
        </main>
    );
}
