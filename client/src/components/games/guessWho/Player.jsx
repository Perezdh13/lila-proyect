import React, { useEffect, useState } from 'react'
import Card from './Card'
import secretWoman from '../../../assets/img/secretWoman.jpg'

function Player() {
  const [women, setWomen] = useState('');
  const [womanSelect, setWomanSelect] = useState('');
  const [iAQuestion, setIAQuestion] = useState('');console.log(iAQuestion);
  const [iAQuestionType, setIAQuestionType] = useState('');console.log(iAQuestionType);
  const [iAQuestionValue, setIAQuestionValue] = useState('');console.log(iAQuestionValue);
  const [styleUser, setStyleUser] = useState({ display: "block" });
  const [styleWoman, setStyleWoman] = useState({ display: "none" });
  const [playerAnswer, setPlayerAnswer] = useState('');
  const [isUserTurn,setIsUserTurn] = useState('');
  
  useEffect(() => {  
    if(womanSelect && iAQuestionType && iAQuestionValue){
    (womanSelect[iAQuestionType] === iAQuestionValue) ? 
      setPlayerAnswer('si tiene ' + iAQuestionType + ' ' + iAQuestionValue):
      setPlayerAnswer('No tiene ' + iAQuestionType + ' ' + iAQuestionValue)
    } 
    })


  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * women.length);
    const randomWoman = women[randomIndex];
    setWomanSelect(randomWoman);
  }, [women]);

  useEffect(() => {
    const upDateWomen = event => {
      setWomen(event.detail);
    }
    document.addEventListener("women", upDateWomen)
  }, [women])

  // useEffect(() => {
  //   (iAQuestion === '') ? setIAQuestionType('') :
  //     setIAQuestionType(iAQuestion.type)
  //     setIAQuestionValue(iAQuestion.value)
  // })


   setTimeout(() => (setStyleUser({ display: "none" }),
    setStyleWoman({ display: "block" })), 3000)


  useEffect(() => {
    const playerAnswerEvent = new CustomEvent("playerAnswer",{
      detail: playerAnswer
    });
    document.dispatchEvent(playerAnswerEvent)
    const upDateIAQuestion = event => {
      setIAQuestion(event.detail)
      setIAQuestionType(event.detail.type)
      setIAQuestionValue(event.detail.value)
    }
    const gameTurn = event => {
      setIsUserTurn(event.detail);
    };
    document.addEventListener("iAQuestion", upDateIAQuestion)
    document.addEventListener("gameTurn", gameTurn);
  })

  return (
    <div style={{ width: "7vw", margin:"5vw" }}>
        
      <div style={styleUser}>
        <Card
          imgCartoon={secretWoman}
          />
      </div>
      {womanSelect ? (
        <div style={styleWoman}>
          <Card
            womanSelect={womanSelect}
            id={womanSelect.id}
            name={womanSelect.name}
            imgCartoon={womanSelect.imgCartoon}
            />
        
        </div>
      ) : null}
    </div>
  )
}

export default Player