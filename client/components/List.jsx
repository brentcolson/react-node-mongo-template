import React from 'react';
import LineItem from './LineItem.jsx';
import AddForm from './AddNewItemForm.jsx';

const List = (props) => {
  return (
    <div>
      <strong>My Tasks</strong>
      { 
        props.items.map(function(item, key){
          return <LineItem key={ key } item={ item } />;
        })
      }
      <AddForm handleNewTitle={ props.handleNewTitle } handleNewDescription={ props.handleNewDescription } handleSubmit={ props.handleSubmit } />
    </div>
  );
};

export default List;
