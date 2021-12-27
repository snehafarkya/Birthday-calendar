import Name from './Name';
import React, {useState} from 'react';
import './App.css';
import List from './List';

export default function App() {
  const [people,setPeople] = useState(Name);
  return (
    <>
  <div className="cont">
    <h2>Group of {people.length} Idiots 💙</h2>
    <List people={people}/>
  </div>
 

    </>
  );
}


 

