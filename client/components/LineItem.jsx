import React from 'react';

const LineItem = (props) => {
  return ( 
    <div>
      {props.item.itemTitle} - {props.item.itemDescription}
    </div>
  );
};

export default LineItem;