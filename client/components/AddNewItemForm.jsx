import React from 'react';

const AddForm = (props) => {
  return ( 
    <div>
      <input type="text" name="itemTitle" placeholder="Item title" onChange={ props.handleNewTitle } />
      <br />
      <textarea type="text" name="itemDescription" placeholder="Item description" onChange={ props.handleNewDescription } />
      <br />
      <button type="submit" value="Post" onClick={ props.handleSubmit }>Add Item</button>
    </div> 
  );
};

export default AddForm;