import React from 'react';
import List from '../components/List.jsx';
import { getListings } from '../api/helpers.js';
import tempData from '../data/tempData.js';
import axios from 'axios';



export default class ListContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listItems: []
    };
  }

  componentDidMount() {
    var _this = this;
    getListings()
    .then(function(res){
      _this.setState({
        listItems: res.data
      });
    })
    .catch(function(err){
      console.log(err);
    });
  }

  render(){
    return (
      <div>
        <List items={ this.state.listItems } />
      </div>
    )
  }
}
