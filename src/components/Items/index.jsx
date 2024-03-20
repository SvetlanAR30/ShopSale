import React from "react";
import Item from "./../Item";
import styles from "./Items.module.scss";

export default function Items(props){//props-это для передачи данных
    return(
        <main>
            {props.allItems.map(el=>(  //map-это метод
                <Item key={el.id} item={el} onShowItem={props.onShowItem} onAdd={props.onAdd}/>//onShowItem-отображение картинки,onAdd-это отображение кнопки плюс(+)
            ))}
        </main>
    );
}
