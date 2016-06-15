import React from 'react';
import List from '../components/List.jsx';
import { getItems, addItem } from '../api/helpers.js';
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
    getItems('items')
    .then(function(res){
      _this.setState({
        listItems: res.data
      });
    })
    .catch(function(err){
      console.log(err);
    });
  }

  updateOnAddItem(event) {
    var _this = this;
    getItems('items')
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
        <List items={ this.state.listItems } updateOnAddItem={ this.updateOnAddItem.bind(this) }/>
      </div>
    )
  }
}
