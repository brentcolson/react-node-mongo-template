import React from 'react';
import LineItem from './LineItem.jsx';

const List = (props) => {
  return (
    <div>
      <strong>My Task Titles</strong>
      { 
        props.items.map(function(item, key){
          return <LineItem key={ key } item={ item } />;
        })
      }
      <div>
        <input type="text" name="itemTitle" placeholder="Item title" />
        <br />
        <input type="text" name="itemDescription" placeholder="Item description" />
        <br />
        <button onClick={ props.updateOnAddItem }>Add Item</button>
      </div> 
    </div>
  );
};

export default List;
