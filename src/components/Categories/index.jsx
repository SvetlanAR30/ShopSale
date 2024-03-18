import React from "react";
import styles from "./Categories.module.scss";

export default function Categories(props){

    const categories =[
        {
            key:"all",
            name:"Все"
        },

        {
            key:"Apple",
            name:"Apple"
        },

        {
            key:"Samsung",
            name:"Samsung"
        },

        {
            key:"Xiaomi",
            name:"Xiaomi"
        },

        {
            key:"TV",
            name:"TV"
        },

    ];

    return(
        <div className={styles.categories}>
            {categories.map(el=>(
                <div key={el.key} onClick={()=>props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    );
}