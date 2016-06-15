import React from 'react';

const AddForm = (props) => {
  return ( 
    <form onSubmit={ props.handleSubmit }>
      <input type="text" name="itemTitle" placeholder="Item title" onChange={ props.handleNewTitle } />
      <br />
      <textarea type="text" name="itemDescription" placeholder="Item description" onChange={ props.handleNewDescription } />
      <br />
      <button type="submit" value="Post">Add Item</button>
    </form> 
  );
};

export default AddForm;