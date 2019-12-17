import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: ''
    }
  }
  //lifecycle method
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
      // here response is a promise 
      // can consume promise only once;
      return response.json();
    }).then(users => {
      this.setState({ monsters: users });
    }).catch(reason => {
      console.log(reason);
    })
  }

  render() {
    const { monsters, search } = this.state;
    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(search.toLowerCase());
    })
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
          {/*
        anonymous function : 
        () => {
          return something
        }
        or 
        (ab) => (cd) //kind of IIFE cd is invoked automatically without return statement.
         */}
          {/*
            set state will not reflect immediately,
            this can be overcome by using the call back function in the setState
          */}
          {/*<input type='search' placeholder='Search Monsters' onChange={(e)=>{
            this.setState({search: e.target.value},()=>{
              console.log(this.state.search);
            });
            
          }}></input>*/}
          <SearchBox placeholder='Search Monsters' handleChange={(e) => {
            this.setState({ search: e.target.value }, () => {
              console.log(this.state.search);
            });

          }}></SearchBox>
          <CardList monsters={filteredMonster}>
            {/*
              sending as props intead of child 
              children props are values that are passed within html tags like below
              <CardList prop = {}>children</CardList>
              */
            }
            {/*this.state.monsters.map((monster) => {
              return <h1 key={monster.id} name = {monster.name}></h1>
            })*/}
          </CardList>
      </div>
    );
  }
}

export default App;
