import React,{useContext} from "react";
import styles from "./Categories.module.scss";
import {useAppContext} from "../../useAppContext";

export default function Categories(){

    const {chooseCategory}=useAppContext();

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
                <div key={el.key} onClick={()=>chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    );
}