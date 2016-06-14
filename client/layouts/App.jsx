import React from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props); 
  } 

  render(){
      const { tasks } = this.props;
      return (
        <main>
          {this.props.children}
        </main>
      )
    }
}