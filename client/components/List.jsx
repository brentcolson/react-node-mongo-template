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
    </div>
  );
};

export default List;
