import React from 'react';
import LineItem from './LineItem.jsx';


const List = (props) => {
  return (
    <div>
      <strong>My Task Titles</strong>
      { 
        props.tasks.map(function(task, key){
          return <LineItem key={ key } task={ task } />;
        })
      }
    </div>
  );
};

export default List;
