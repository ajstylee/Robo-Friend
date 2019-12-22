import React from 'react';
import './App.css';
import Card from './Component/Card/Card.js';
import {CardList} from './Component/CardList/CardList.js';

 class App extends React.Component {
  constructor(props){
    super(props);
    this.state={users:[],
      searchfeild:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>this.setState({users:data},console.log(this.state.users)))
  }
  filteredcard=(e)=>{
    this.setState({searchfeild: e.target.value})
  }

  render(){
    console.log(this.state.users)
    const {users} = this.state
    const filteredRobot=users.filter(searchfeild=>searchfeild.name.toLowerCase().includes(this.state.searchfeild.toLowerCase()))
    
    

    return (
      <div className="App">

        <h1>R0B0 FRIEND</h1> 
        <input type="text" onChange={this.filteredcard} placeholder="Search robots"/>
        
        <CardList users={filteredRobot}/>
        
       </div>
    );
  }
}

export default App;
