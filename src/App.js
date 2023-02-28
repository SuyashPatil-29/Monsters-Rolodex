import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './SearchBox';


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters: [],
    }

  }

   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then((users)=> this.setState(()=>{
        return {monsters: users}
       },
       ()=>{
        console.log(this.state);
       })) 
   }

  render(){
  return (
    <div className="App">
        <input className="search-box" type="search" placeholder="Search Monsters" onChange={(event)=>{console.log(event.target.value)
        const filteredMonsters = this.state.monsters.filter((monster)=>{
          const searchString = event.target.value.toLowerCase()
           return monster.name.toLowerCase().includes(searchString)
        })

        this.setState(()=>{
          return {monsters: filteredMonsters}
        })
        }}/>
      {this.state.monsters.map((monster)=>{
        return <h1 key={monster.name}>{monster.name}</h1>
      })}
    </div>
  );
}
}

export default App;
