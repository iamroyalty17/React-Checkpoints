import React from "react";
import Proptypes from 'prop-types';

// import './Item.css';
const Item = ({item, handleVision }) => {
    return (
        <>
        <tr>
            <th scope="row">
            <i class="fa-solid fa-eye fa-2xl" onClick={() => handleVision(item.name)}></i>
            </th>
        <td>
        <img
        className= 'rounded float-left'
        style={{ width: '200px' }}
        src={item.imgSrc}
        alt={item.name}
        />
    </td>
    <td>
        <h4>{item.name}</h4>
    </td>
    <td>{item.price}</td>
    </tr>
    </>
    );
};

Item.propTypes = {
    Item: Proptypes.object,
};

export default Item;

