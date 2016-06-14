import React from 'react';

const LineItem = (props) => {
  return ( 
    <div>
      {props.item.taskTitle}
    </div>
  );
};

export default LineItem;