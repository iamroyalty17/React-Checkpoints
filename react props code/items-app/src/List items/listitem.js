import React from "react";
import PropTypes from 'prop-types';
import Item from "../Items/items";

const ListItem = ({ itemArray }) => {
    const handleVision = (name) => alert(`The product name is ${name}`);
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope='col'>Photo</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemArray.map((item, key) => (
                                <Item item={item} key={key} handleVision={handleVision} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

ListItem.propTypes = {
    itemArray: PropTypes.object,
};

export default ListItem