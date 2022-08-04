import React, { useState, useEffect } from "react";
import "../styles/superF.css";
import shoesActions from "../redux/actions/shoesActions";
import { useDispatch } from 'react-redux';
import { Link as LinkRouter } from 'react-router-dom';

function SuperF() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState([]);

  const [reload, setReload] = useState(false);
  const [getShoes, setGetShoes] = useState([]);
  const [shoesFinal, setShoesFinal] = useState();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(shoesActions.getShoes())
      .then(res => setGetShoes(res.data.response))
    // eslint-disable-next-line
  }, [reload])
  //const colores = getShoes.map(shoe => shoe.colorway)
  // console.log("🚀 ~ file: superF.JSX ~ line 24 ~ SuperF ~ colores", new Set(colores))

  const shoesIdeal = async (data) => {

    const typeId = data[1].isCorrect.id
    const brandId = data[2].isCorrect.id
    const priceId = data[3].isCorrect.id
    const color = data[4].isCorrect.text

    const shoesType = getShoes.filter(shoe => shoe.type._id === typeId)
    const shoesBrand = shoesType.filter(shoe => shoe.brand._id === brandId)
    const shoesColor = shoesBrand.filter(shoe => shoe.colorway === color)
    if (priceId === 0) {
      shoesBrand.sort((a, b) => b.price - a.price)
    }
    else {
      shoesBrand.sort((a, b) => a.price - b.price)
    }
    //console.log("🚀 ~ file: superF.JSX ~ line 32 ~ shoesIdeal ~ shoesType", shoesBrand)
    if (shoesBrand.length !== 0) {
      setShoesFinal(shoesColor)
      // console.log(shoesColor)
      //console.log("tu zapatilla ideal es: ", shoesFinal)
    }
    else {
      setShoesFinal("")
      // console.log("no encontramos coincidencias")
    }
    setReload(!reload)
  };

  const questions = [
    {
      text: "Your ideal sneaker in DAFTLAB",
      options: [
        { id: 0, text: "GO", class: "btnGo" }

      ]
    },
    {
      text: "WITH WHICH STYLE DO YOU FEEL MOST IDENTIFIED?",
      options: [
        { id: "62d81e84db36588e63203de7", text: "Urban", class: "btn btnUrban" },
        { id: "62d827534fca1cb3de1808b1", text: "Sport", class: "btn btnSport" },
        { id: "62d828964fca1cb3de1808bd", text: "Fancy", class: "btn btnFancy" },
        //{ id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "DO YOU HAVE A PREFERENCE FOR ANY BRAND?",
      options: [
        { id: "62d836532f6e1f16ca3df337", text: "Nike", class: "btn1 Nike" },
        { id: "62d838004fca1cb3de1808cb", text: "Adidas", class: "btn1 Adidas" },
        { id: "62d8392a4fca1cb3de1808cd", text: "Jordan", class: "btn1 Jordan" },
        { id: "62d839d04fca1cb3de1808ce", text: "New", class: "btn1 New" },
        { id: "62d83a704fca1cb3de1808cf", text: "Asics", class: "btn1 Asics" },
        { id: "62d83b334fca1cb3de1808d1", text: "Balenciaga", class:"btn1 Balenciaga" },
        { id: "62d83c814fca1cb3de1808d6", text: "Dior", class: "btn1 Dior" },
        { id: "62d83e2d4fca1cb3de1808da", text: "Louis", class: "btn1 Louis" },
      ],
    },
    {
      text: "HOW MUCH MONEY WOULD YOU SPEND?",
      options: [
        { id: 0, text: "I don't care about the money", class: "btn3" },
        { id: 1, text: "Take care of my pocket", class: "btn3" },

      ],
    },
    {
      text: "What color do you like best?",
      options: [
        { id: 0, text: "white", class: "color white" },
        { id: 1, text: "black", class: "color black-sf" },
        { id: 2, text: "grey", class: "color grey" },
        { id: 3, text: "brown", class: "color brown" },
        { id: 4, text: "green", class: "color gren" },
        { id: 5, text: "orange", class: "color orange" },
        { id: 6, text: "cream", class: "color cream" },
        { id: 7, text: "blue", class: "color blue" },
        { id: 8, text: "red", class: "color red" },
        { id: 9, text: "purple", class: "color purple" },
        { id: 10, text: "multi", class: "color multi" },
      ],
    },
    {
      text: "View results",
      options: [
        { id: 0, text: "Yes", class: "btnYes" }
      ]
    }

  ];

  const optionClicked = (isCorrect) => {
    // console.log("🚀 ~ file: superF.JSX ~ line 97 ~ optionClicked ~ isCorrect", answer)
    setAnswer([...answer, { isCorrect }])
    // console.log("🚀 ~ file: superF.JSX ~ line 99 ~ optionClicked ~ isCorrect", isCorrect)
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      shoesIdeal(answer)

    }
  };

  const restartGame = () => {
    setAnswer([])
    //setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="containerSuperF">

      {showResults ? (
        /* 4. Final Results */

        <div className="final-results">
          <h1 className="mb-8 text-lg question-text resultF">Final Results</h1>
          <div className="containerCarsFinal">
            {shoesFinal.length !== 0 ?

              shoesFinal.map(shoeFinal => {
                return (
                  <div className="wrapper" key={shoeFinal._id}>
                    <div className="card" >

                      <div className="front">
                        {
                          shoesFinal.brand ?
                            <h1>{shoeFinal.brand.name}</h1>
                            : null
                        }
                        {
                          shoesFinal.type ?
                            <h1>{shoeFinal.type.name}</h1>
                            : null
                        }

                        {/* <h1>{shoesFinal?.type.name}</h1> */}
                        <p>{shoeFinal.name}</p>
                        <h2 className="price">U$S {shoeFinal.price}</h2>
                      </div>

                      <div className="right">
                        <h2>{shoeFinal.brand.name}</h2>
                        <p>{shoeFinal.name}</p>
                        <h2 className="price">U$S {shoeFinal.price}</h2>

                        <LinkRouter to={`/details/${shoeFinal._id}`} >
                          <button>Detail</button>
                        </LinkRouter>

                      </div>

                    </div>
                    <div className="img-wrapper">
                      <img className="imgCardsf" src={shoeFinal.image[0]} alt={shoeFinal.name} />
                    </div>
                  </div>)
              })


              : <h1>No matches found</h1>
            }
          </div>
          <button className="btnReset" onClick={() => restartGame()}>Restart</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className={questions[currentQuestion].text}>
          
          <h3 className="question-text text-4xl md:text-6xl">{questions[currentQuestion].text}</h3>
            
          {/* List of possible answers  */}
          <ul className="ulSuperF">
            {questions[currentQuestion].options.map((option) => {
              return (
                  <li
                    key={option.id}
                    className={option.class}
                    onClick={() => optionClicked(option)}
                  >
                    <p>{option.text}</p>
                  </li>
              );
            })}
          </ul>

        </div>
      )}
    </div>
  );
}

export default SuperF;