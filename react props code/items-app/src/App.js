import React from 'react';
import ListItem from './List items/listitem';     

const App = () => {
  const itemArray = [
    {
      imgSrc: require("./assets/surface pro.jpg"),
      name: 'Surface-Pro',
      price: `1 349 $`,
    },
    {
      imgSrc: require("./assets/galaxy-s21.webp"),
      name: 'Samsung Galaxy -21',
      price: `1 200 $`,
    },
    {
      imgSrc: require("./assets/mercedes benz amg coupe.jpg"),
      name: 'Mercedes Benz amg coupe',
      price: `216 245 $`,
    },   
  ];
  return (
    <div className='container'>
      <ListItem itemArray={itemArray} />
    </div>
  );
};

export default App;