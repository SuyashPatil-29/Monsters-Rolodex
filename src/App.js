import React, {Component} from 'react';
import './App.css';
import SearchBox from './components/search-box/searchBox';
import CardList from './components/card-list/cardList';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
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


   onSearchChange = (event)=>{
    const searchField = event.target.value.toLowerCase()
    this.setState(()=>{
      return { searchField }
    })
    }
  render(){
    const {monsters, searchField} = this.state
    const {onSearchChange } = this
    const filteredMonsters =monsters.filter((monster)=>{
       return monster.name.toLowerCase().includes(searchField)
    })


  return (
    <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox className="search-box" type="search" placeholder="Search Monsters" onChange={onSearchChange}/>
        <CardList monsters={filteredMonsters} />
    </div>
  );
}
}

export default App;
