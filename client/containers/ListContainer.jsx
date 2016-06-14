import React from 'react';
import List from '../components/List.jsx';
import { getListings } from '../api/helpers.js';
import tempData from '../data/tempData.js';


export default class ListContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listItems: []
    };
  }

  componentWillMount() {
      var _this = this;
      _this.setState({
        listItems: tempData
      });
  }

  render(){
    return (
      <div>
        <List tasks={ this.state.listItems } />
      </div>
    )
  }
}
