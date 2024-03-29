import React from "react";
import { useState, useEffect, createContext, useContext } from "react";
import Header from "./components/Header/index.tsx";
import Items from "./components/Items/index.tsx";
import Footer from "./components/Footer/index.tsx";
import "./index.scss";
import Categories from "./components/Categories/index.tsx";
import ShowFullItem from "./components/ShowFullItem/index.tsx";
import { useAppContext } from "./useAppContext.tsx";

export default function App():JSX.Element {
    const { showFullItem } = useAppContext();
    return (
        <div className="wrapper">
            <Header />
            <Categories />
            <Items />
            {showFullItem && <ShowFullItem />}
            <Footer />
        </div>
    );
}

//Это первоночальный код (без UseAppContext).Выше код с методом UseAppContext

/*import React from "react";
import {useState,useEffect,createContext,useContext} from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Footer from "./components/Footer";
import "./index.scss";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


const AppContext = createContext(); //переменная для useContext


export default function App() {

  const[items,setItems]=useState([

    {
    id:1,
    title:'Iphone 14pro',
    img:'Iphone14pro.jpg',
    desc:'iPhone 14 Pro — смартфон в корпусе цвета Deep Purple, выполненном из нержавеющей стали и противоударного стекла Ceramic Shield, обладает встроенной памятью 512 Гб. Благодаря классу защиты от воды и пыли IP68 устройство не пострадает при погружении на глубину до 6 м. Экран типа Super Retina XDR Pro Motion диагональю 6,7 дюйма сделан по технологии OLED.Эта модель оборудована тремя основными и одной фронтальной камерой. Основной объектив защищен от повреждений сапфировым стеклом.',
    category:'Apple',
    price:'900'
  },
  {
    id:2,
    title:'Iphone 11',
    img:'Iphone11.jpg',
    desc:'Смартфон Apple iPhone 11 128GB White оснащен производительным процессором A13 Bionic, который обеспечивает быструю загрузку системы и приложений. Модель имеет широкоформатный сенсорный экран, который удобен для просмотра видео и работы в приложении. Корпус из металла и стекла с индексом пылевлагостойкости IP68 защищает внутренние детали и механизмы от воздействия внешней среды. Модель поставляется с предустановленной операционной системой iOS.',
    category:'Apple',
    price:'600'
  },
  {
    id:3,
    title:'Samsung Galaxy S20',
    img:'Samsung-Galaxy-S20.jpg',
    desc:'Samsung Galaxy S20+ – версия флагманского смартфона от знаменитого южнокорейского производителя с увеличенным экраном. Диагональ дисплея, созданного по технологии Dynamic AMOLED, составляет 6,7 дюйма, а разрешение – 3200 х 1440 пикселей. Изображение выглядит настолько чётко и реалистично, что кажется, будто бы у вас в руках настоящее окно в другой мир. Благодаря частоте обновления 120 Гц обеспечивается особенно быстрый и плавный скроллинг.',
    category:'Samsung',
    price:'800'
  },
  {
    id:4,
    title:'Samsung Galaxy S23',
    img:'Samsung-Galaxy-S23.jpg',
    desc:'Смартфон Samsung Galaxy S23+ Cream — модель с безрамочным экраном диагональю 6,6 дюйма, выполненным по технологии Dynamic AMOLED 2X. Разрешение — 2340x1080 пикселей, частота обновления — 120 Гц. Отображается 16 млн цветов. Надежную защиту дисплея обеспечивает стекло Corning Gorilla Glass 8.Высокую производительность девайса гарантируют восьмиядерный процессор Qualcomm Snapdragon 8 Gen 2 и 8 Гб оперативной памяти. Для установки приложений, хранения изображений, музыки видео и документов используется хранилище объемом 512 Гб.',
    category:'Samsung',
    price:'800'
  },
  {
    id:5,
    title:'Xiaomi redmi note 9 pro ',
    img:'xiaomi-redmi-note-9pro.jpg',
    desc:'Redmi Note 9 Pro – стильный смартфон с 6,67-дюймовым экраном, разрешение которого составляет 2400 х 1080 пикселей. Он выполнен по технологии IPS, что означает отличную яркость, реалистичность цветов и широкие углы обзора.С помощью квадрокамеры на задней панели и 16-мегапиксельной фронталки вы пополните свой фото- и видеоархив интересными снимками и роликами. Обычные фото и широкоугольные панорамы, селфи и портреты с красиво размытым фоном – выбирайте вариант, который вам нравится, а искусственный интеллект скорректирует результат, чтобы он максимально приблизился к идеалу.',
    category:'Xiaomi',
    price:'600'
  },
  {
    id:6,
    title:'Xiaomi mi-a3',
    img:'xiaomi-mi-a3.jpg',
    desc:'Смартфон Xiaomi Mi A3 создан в соответствии со стандартами Android One. Это значит, что вам обеспечен высокий уровень информационной безопасности, и ваша операционная система будет своевременно обновляться. 6,088-дюймовый дисплей с разрешением 1560х720 пикселей занимает почти всю лицевую поверхность. Он создан по технологии Super AMOLED и воспроизводит яркую, чёткую картинку с живыми, насыщенными цветами. В него встроен датчик отпечатков пальцев, обеспечивающий безошибочное узнавание владельца и мгновенную разблокировку.',
    category:'Xiaomi',
    price:'600'
  },
  {
    id:7,
    title:'Samsung 55 ',
    img:'Samsung 55.jpg',
    desc:'Телевизор Samsung UE55CU8500U основан на процессоре Crystal 4K и ОС Tizen. Модель получила 55-дюймовую панель с частотой обновления 60 Гц. Прибор поддерживает технологию HDR, цифровое шумоподавление и Smart TV. За чистое звучание отвечает акустика Dolby Digital Plus мощностью 20 Вт. Благодаря встроенным модулям Bluetooth и Wi-Fi можно управлять устройством при помощи смартфона.На корпусе телевизора расположились разъемы HDMI в количестве трех штук, два USB-порта, LAN. Аппарат получил настольную подставку и поддержку крепления VESA 200х200 для настенного монтажа.',
    category:'TV',
    price:'950'
  },
  {
    id:8,
    title:'LG 32 ',
    img:'LG32.jpg',
    desc:'Телевизор LG 32LQ630B6LA — модель с 32-дюймовым экраном разрешением 1366х768 пикселей и частотой обновления 60 Гц. Есть поддержка технологии HDR10 Pro, за счет чего картинка становится более реалистичной — устройство отображает более широкий диапазон светлых и темных оттенков. Система цифрового шумоподавления позволяет ощутимо уменьшить количество помех, отображаемых во время просмотра.В качестве операционной системы используется WebOS. Поддержка Smart TV дает возможность пользоваться онлайн-платформами для просмотра фильмов, сериалов и прочего контента.',
    category:'TV',
    price:'750'
  },
  {
    id:9,
    title:'TCL 50 ',
    img:'TCL50.jpg',
    desc:'Телевизор TCL 50P635 диагональю 50 дюймов снабжен матрицей с поддержкой динамического усиления цвета. Модель передает изображение в разрешении 4К при частоте 60 Гц, тип экрана — LCD.Телевизор работает на операционной системе Google TV: установлен контроллер с частотой 1,3 ГГц и графический драйвер с частотой 800 МГц. Управлять работой телевизора можно как с помощью пульта ДУ, так и с помощью голосового ассистента (Alexa или Google Assistant).',
    category:'TV',
    price:'650'
  },
  {
    id:10,
    title:'BBK',
    img:'BBK.jpg',
    desc:'BBK 32LEM-1088/TS2C – современный телевизор с минималистичным дизайном и широким функционалом.Подключайте ноутбуки, игровые приставки, проигрыватели или другие устройства – телевизор BBK 32LEM-1088/TS2C оснащен интерфейсами HDMI. Разъем VGA предназначен для подключения телевизора к ПК. Считывайте информацию со съемных носителей, подключая их к USB-порту.Прием цифровых и аналоговых каналов обеспечивается встроенными тюнерами DVB-T/T2 и DVB-C. Вы можете записать любимую телепередачу или спортивный матч – функция TimeShift позволяет остановить трансляцию на любом моменте.',
    category:'TV',
    price:'650'
  },
  ]);


  //переменные
  const [orders,setOrders]=useState([]); //переменная(orders),и перезапись переменной(setOrders)
  const [currentItems,setCurrenItems]=useState([]); //Аналогично.Это категория
  const [showFullItem,setShowFullItem]=useState(false); //Аналогично.Проверка для открытия карточки
  const [fullItem,setFullItem]=useState({}); //Аналогично. Полный список

  useEffect(()=>{
    setCurrenItems(items);
  },[items]);


  const deleteOrder=(id)=>{ //Передаем один элемент.Поиск по id
    setOrders(orders.filter((el)=>el.id!==id)); //Фильтрация
  }

  const addToOrder=(item)=>{  //Передаем все элементы из item
    if(! orders.some((el)=>el.id===item.id)){
      setOrders([...orders,item]);
    }
    //setOrders([...orders,item]); Чтобы добавлялись в корзину несколько товаров одной модели
  }

  const chooseCategory =(category)=>{
    if(category==="all"){
      setCurrenItems(items); //передаем все товары
    }
    else{
      setCurrenItems(items.filter((el)=>el.category===category)); //Фильтрация всех товаров,чтобы открывались только из одной категории
    }
  }

  const onShowItem=(item) =>{//Отображение увеличенной картинки(при нажатии)
    setFullItem(item);
    setShowFullItem(!showFullItem);
  }

  return (
    <AppContext.Provider
    value ={
      {
        items,
        setItems,
        orders,
        setOrders,
        currentItems,
        setCurrenItems,
        showFullItem,
        setShowFullItem,
        fullItem,
        setFullItem,
        deleteOrder,
        addToOrder,
        chooseCategory,
        onShowItem,
      }
    }
    > 
    <div className="wrapper">
      <Header/>
      <Categories/>
      <Items/>
      {showFullItem && <ShowFullItem />}
      <Footer/>
    </div>
    </AppContext.Provider>
  );
}*/



