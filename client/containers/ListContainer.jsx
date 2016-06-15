import React from 'react';
import List from '../components/List.jsx';
import { getItems, addItem } from '../api/helpers.js';
import axios from 'axios';



export default class ListContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listItems: [],
      newItemTitle: '',
      newItemDescription: ''
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

  handleNewTitle(e){
    this.setState({newItemTitle: e.target.value});
  }

  handleNewDescription(e){
    this.setState({newItemDescription: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var _this = this;

    var item = {
      itemTitle: _this.state.newItemTitle.trim(),
      itemDescription:  _this.state.newItemDescription.trim()
    };
    if (!item.itemTitle || !item.itemDescription) {
      return;
    }
    addItem('items', item)
    .then(function(){
      getItems('items')
        .then(function(res){
          _this.setState({
            listItems: res.data
          });
        })
        .catch(function(err){
          console.log(err);
      });
    });
  }

  render(){
    return (
      <div>
        <List items={ this.state.listItems } handleNewTitle={ this.handleNewTitle.bind(this) } handleNewDescription={ this.handleNewDescription.bind(this) } handleSubmit={ this.handleSubmit.bind(this) }  />
      </div>
    )
  }
}
