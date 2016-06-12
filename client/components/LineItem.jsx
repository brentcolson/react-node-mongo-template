import React from 'react';

const LineItem = (props) => {
  return ( 
    <div>
      {props.task.taskTitle}
    </div>
  );
};

export default LineItem;