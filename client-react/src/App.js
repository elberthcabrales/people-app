import React from 'react';
import './App.css';
import Header from './components/Header'
import Person from './components/Person'
import usePeople from './hooks/People'
import axios from 'axios';
import frequencyChar from './lib/frequencyChar'
import similarityRank from './lib/similarityRank'
import swal from '@sweetalert/with-react'

function App() {
  const { people, changePeople } = usePeople([]);
  React.useEffect(() => {
    axios.get(`http://localhost:3002/people`)
    .then(res => {
        changePeople(res.data)
    })
  }, []);

  const countCharacters = (p) =>{
    const char = frequencyChar(p.email)
    swal(JSON.stringify(char));
  }

  const findSimilarity = (p) =>{
    const similarly = similarityRank(p.email, people.filter(e=> e.id!== p.id))
    if(similarly.length>0){
      swal(JSON.stringify(similarly))
    }else{
      swal(<h4>Not found similarity</h4>)
    }
  }

  return (
    <div className="App">
      <Header title="SalesLoft Challenge"/>
      {people.map(person =>(
        <Person
          key={person.id} 
          person={person}
          countCharacters={countCharacters}
          findSimilarity={findSimilarity}
          />
      ))}
    </div>
  );
}

export default App;
