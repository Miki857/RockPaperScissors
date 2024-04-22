import { useState } from 'react'
import Main from './components/Main'
import "./components/css/attributes.css"
import "./components/css/normalize.css"
import "./components/css/app.css"
import Rules from './components/Rules'
import Result from './components/Result'

function App() {
  const [userMoved, setUserMoved] = useState(false);
  const [userChoice, setUserChoice] = useState("");
  const [pcChoice, setPcChoice] = useState("");
  const [gameResult, setGameResult] = useState("");

  return (
    <>
    {/* TITLE IMAGE */}
      <div className='title__img'></div>

      {
        userMoved ?
          <Result
            userChoice={userChoice}
            pcChoice={pcChoice}
            gameResult={gameResult}

            setUserMoved={setUserMoved}
          />
        :
          <Main
            setUserMoved={setUserMoved}
            setUserChoice={setUserChoice}
            setPcChoice={setPcChoice}
            setGameResult={setGameResult}
          />
      }

      <Rules/>
    </>
  )
}

export default App
