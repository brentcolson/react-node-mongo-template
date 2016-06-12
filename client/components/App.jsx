class App extends React.Component {
  constructor(props){
    super(props); 
  } 

  render(){
      const { tasks } = this.props;
      return (
        <div>
          <List tasks={ tasks }/>
        </div>
      )
    }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
