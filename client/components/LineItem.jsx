import React from 'react';

const LineItem = (props) => {
  return ( 
    <div>
      {props.item.itemTitle}
    </div>
  );
};

export default LineItem;