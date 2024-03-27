import React, {useState} from "react"
import { BsBasket2Fill } from "react-icons/bs";
import styles from "./Header.module.scss"
import Orders from "../Orders/index.tsx"
import { useAppContext } from "./../../useAppContext.tsx";



const Header:React.FC=()=>{
    const {orders} =useAppContext();//Вызов функций orders,deleteOrder

    let [cartOpen,setCartOpen]=useState<boolean>(false);

    const showOrders=()=>{
        let summa=0;
        orders.forEach(el=>summa+=Number.parseFloat(el.price));
        return(
            <div>
                {orders.map(el=>(
                            <Orders key ={el.id}item={el}/>
                        ))}
                        <p className={styles.summa}>Итого:{new Intl.NumberFormat().format(summa)} $</p>
            </div>
        );
    }
    
    const showNothing=()=>{
        return(
            <div className={styles.empty}>
                <h2>Товары отсутствуют</h2>
            </div>
        );
    }

    return(
        <header>
        <div>
            <span className={styles.logo}>ShopSale</span>
            <ul className={styles.nav}>
                <li>О нас</li>
                <li>Контакты</li>
                <li>Личный кабинет</li>
            </ul>
            <BsBasket2Fill onClick={()=>setCartOpen((prevCartOpen)=>!prevCartOpen)} className={`${styles.shopCartButton} ${cartOpen ? styles.active : ''}`}/>

            {cartOpen &&(

                <div className={styles.shopCart}>

                    {orders.length>0?
                    showOrders():showNothing()
                    }
                    
                </div>
            )}

        </div>
        <div className={styles.presentation}></div>
        </header>
    );
}
export default Header;