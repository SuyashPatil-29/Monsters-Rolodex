import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class Poke extends Component {
  constructor() {
    super();
    
    this.state = {
      pokemons: [],
    }

  }

   componentDidMount(){
     fetch('https://pokeapi.co/api/v2/pokemon')
       .then(response => response.json())
       .then((poke)=> this.setState(()=>{
        return {pokemons: poke.results}
       },
       ()=>{
        console.log(this.state);
       })) 
   }

  render(){
  return (
    <div className="App">
      {this.state.pokemons.map((pokemon)=>{
        return <div>
        <h1 key={pokemon.name}>{pokemon.name}</h1>
        </div>
      })}
    </div>
  );
}
}

export default Poke;