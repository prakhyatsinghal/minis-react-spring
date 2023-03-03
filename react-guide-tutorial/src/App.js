import React, { useState } from 'react';
import './App.css';
import Card from './Card';
// import faker from 'faker'
function App() {
  const [name, setName] = useState('Alan Smith')
  const [showCard, setShowCard] = useState(true)
  const buttonsMarkup = (
    <div>
      <button className="button button2">YES</button>
      <button className="button button3">NO</button>
    </div>
  )
  const changeNameHandler = (name) => setName(name)

  const changeInputHandler = event => setName(event.target.value)

  const toggleShowCard = () => setShowCard(!showCard)

  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}>Toggle Hide/Show</button>
      {showCard ? <Card
        avatar='https://s3.amazonaws.com/uifaces/faces/twitter/skkirilov/128.jpg'
        name={name}
        title='International Creative Administrator'
        onChangeName={() => changeNameHandler('Michael Chan')}
        onChangeInput = {changeInputHandler}
      >{buttonsMarkup}
      </Card> : null }
      



    </div>
  );
}

export default App;
