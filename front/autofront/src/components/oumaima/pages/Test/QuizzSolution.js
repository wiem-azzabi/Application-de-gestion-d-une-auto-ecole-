import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Quizz.css";



export default function QuizzSolution() {
  const questions = [
    {
      questionText: "1) A cette intersection, je laisse la priorité à droite :",
      imag: "images/img1.png",
      Propositions: [
        { reponse: "Oui", valide: false, colorclass: "incorrect" },
        { reponse: "Non", valide: true, colorclass: "correct" },
      ],
    },

    {
      questionText:
        "2) Le panneau de danger indique de virages dont le 1er est:",
      imag: "images/img2.png",
      Propositions: [
        { reponse: "A droite", valide: true, colorclass: "correct" },
        { reponse: "A gauche", valide: false, colorclass: "incorrect" },
      ],
    },

    {
      questionText: "3) Je peux dépasser le camion",
      imag: "images/img3.png",
      Propositions: [
        { reponse: "Oui", valide: false, colorclass: "incorrect" },
        { reponse: "Non", valide: true, colorclass: "correct" },
      ],
    },
    {
      questionText:
        "4) Avant de partir, je laisse tourner mon moteur pour qu'il monte en température",
      imag: "images/img4.png",
      Propositions: [
        { reponse: "Oui", valide: false, colorclass: "incorrect" },
        { reponse: "Non", valide: true, colorclass: "correct" },
      ],
    },
    {
      questionText: "5) Il neige, je peux rouler avec les feux de:",
      imag: "images/img5.png",
      Propositions: [
        {
          reponse: "Croisement et antibroullard avant et arrière",
          valide: true,
          colorclass: "correct",
        },
        {
          reponse: "Position et antibroulliard avant et arrière",
          valide: false,
          colorclass: "incorrect",
        },
      ],
    },
    {
      questionText:
        "6) En conduisant, je peux utuliser mon portable pour écrire un texto ou composer un numéro:",
      imag: "images/img6.png",
      Propositions: [
        { reponse: "Oui", valide: false, colorclass: "incorrect" },
        { reponse: "Non", valide: true, colorclass: "correct" },
      ],
    },
    {
      questionText:
        "7) je viens de dépasser l'emplacement d'arrêt d'urgence lorsque mon véhicule tombe en panne:",
      imag: "images/img7.png",
      Propositions: [
        {
          reponse: "Je tente de reculer",
          valide: false,
          colorclass: "incorrect",
        },
        {
          reponse: "J'allume mes feux de détresse",
          valide: true,
          colorclass: "correct",
        },
        {
          reponse: "Je me serre le plus à droite possible",
          valide: true,
          colorclass: "correct",
        },
      ],
    },
    {
      questionText:
        "8) Sur la voie d'accélération, pour entrer sur l'autoroute, je dois",
      imag: "images/img8.png",
      Propositions: [
        {
          reponse: "Céder le passage aux usagers qui sont déjà engagés",
          valide: true,
          colorclass: "correct",
        },
        {
          reponse: "Accélérer jusqu'à 110km/h avant de m'engager",
          valide: false,
          colorclass: "incorrect",
        },
        {
          reponse:
            "Ralentir et m'arrêter si l'interction m'est refusé par les autres usagers",
          valide: false,
          colorclass: "incorrect",
        },
      ],
    },
    {
      questionText: "9) A cette intersection",
      imag: "images/img9.png",
      Propositions: [
        {
          reponse: "Je maintiens mon allure",
          valide: false,
          colorclass: "incorrect",
        },
        { reponse: "Je ralentis", valide: true, colorclass: "correct" },
        {
          reponse: "Je freine fortement",
          valide: false,
          colorclass: "incorrect",
        },
      ],
    },
    {
      questionText:
        "10) Ce panneau m'autorise à m'arrêter pour faire descendre mes passagers",
      imag: "images/img10.png",
      Propositions: [
        { reponse: "Oui", valide: true, colorclass: "correct" },
        { reponse: "Non", valide: false, colorclass: "incorrect" },
      ],
    },
    {
      questionText: "11) Le marquage au sol m'indique que le dépassement est",
      imag: "images/img11.png",
      Propositions: [
        { reponse: "Autorisé", valide: true, colorclass: "correct" },
        { reponse: "Interdit", valide: false, colorclass: "incorrect" },
      ],
    },
    {
      questionText: "12)Si ce voyant de tempétature s'allume, je dois",
      imag: "images/img12.png",
      Propositions: [
        {
          reponse: "Marrêter immédiatement",
          valide: true,
          colorclass: "correct",
        },
        {
          reponse: "Me rendre chez le garagiste le plus proche",
          valide: false,
          colorclass: "incorrect",
        },
      ],
    },
    {
      questionText: "13) apres ce panneau, je pourrai rouler à",
      imag: "images/img13.png",
      Propositions: [
        { reponse: "60 km/h", valide: true, colorclass: "correct" },
        { reponse: "70 km/h", valide: true, colorclass: "correct" },
        { reponse: "80 km/h", valide: true, colorclass: "correct" },
        { reponse: "100 km/h", valide: false, colorclass: "incorrect" },
      ],
    },
    {
      questionText: "14) Je sors de l'autoroute pour aller sur l'aire",
      imag: "images/img14.png",
      Propositions: [
        {
          reponse: "Je commence à ralentir",
          valide: false,
          colorclass: "incorrect",
        },
        {
          reponse: "Je ralentirai dans la voie de ralentissement",
          valide: true,
          colorclass: "correct",
        },
      ],
    },
    {
      questionText:
        "15) Dans cette situation, le stationnement en marche arrière est",
      imag: "images/img15.png",
      Propositions: [
        { reponse: "Obligatoire", valide: false, colorclass: "incorrect" },
        { reponse: "Interdit", valide: false, colorclass: "incorrect" },
        { reponse: "Conseillé", valide: true, colorclass: "correct" },
      ],
    },
    {
      questionText: "16) Le véhicule venant de droite entame son insertion",
      imag: "images/img16.png",
      Propositions: [
        { reponse: "Trop tôt", valide: true, colorclass: "correct" },
        { reponse: "Au bon moment", valide: false, colorclass: "incorrect" },
        { reponse: "Trop tard", valide: false, colorclass: "incorrect" },
      ],
    },
    {
      questionText: "17) Je dois vérifier la pression des pneus tous les",
      imag: "images/img17.png",
      Propositions: [
        { reponse: "1 mois", valide: true, colorclass: "correct" },
        { reponse: "3 mois", valide: false, colorclass: "incorrect" },
        { reponse: "6 mois", valide: false, colorclass: "incorrect" },
        { reponse: "1 ans", valide: false, colorclass: "incorrect" },
      ],
    },
    {
      questionText: "18) Les feux de position avant sont visibles à",
      imag: "images/img18.png",
      Propositions: [
        { reponse: "50 mètres", valide: true, colorclass: "correct" },
        { reponse: "100 mètres", valide: true, colorclass: "correct" },
        { reponse: "150 mètres ", valide: true, colorclass: "correct" },
        { reponse: "200 mètres", valide: false, colorclass: "incorrect" },
      ],
    },
    {
      questionText:
        "19) Je suis contôlé avec taux d'alcoolémie de 0.25 mg/l d'air expiré",
      imag: "images/img19.png",
      Propositions: [
        { reponse: "Je perds 6 points", valide: true, colorclass: "correct" },
        {
          reponse: "Je perds 8 points",
          valide: false,
          colorclass: "incorrect",
        },
        {
          reponse: "Mon véhicule est immobilisé",
          valide: true,
          colorclass: "correct",
        },
        {
          reponse: "Je perds 4 points",
          valide: false,
          colorclass: "incorrect",
        },
      ],
    },
    {
      questionText: "20 )je peux croiser des véhicules en sens inverse",
      imag: "images/img20.png",
      Propositions: [
        { reponse: "Oui", valide: true, colorclass: "correct" },
        { reponse: "Non", valide: false, colorclass: "incorrect" },
      ],
    },
    {
      questionText: "21) IL pleut. A la sortie de ce tunnel, j'éteins mes feux",
      imag: "images/img21.png",
      Propositions: [
        {
          reponse: "j'éteins mes feux",
          valide: false,
          colorclass: "incorrect",
        },
        {
          reponse: "je n'éteins pas mes feux",
          valide: true,
          colorclass: "correct",
        },
        {
          reponse: "je n'éteins pas mes feux mais je ralentis",
          valide: false,
          colorclass: "incorrect",
        },
        {
          reponse: "je n'éteins pas mes feuxsans et je ne ralentis pas",
          valide: false,
          colorclass: "incorrect",
        },
      ],
    },
    {
      questionText:
        "22) Si je tombe en panne sur l'autoroute, je peux trouver des bornes d'appel tous les",
      imag: "images/img22.png",
      Propositions: [
        { reponse: "500 m", valide: false, colorclass: "incorrect" },
        { reponse: "2 km", valide: true, colorclass: "correct" },
        { reponse: "4 km", valide: false, colorclass: "incorrect" },
        { reponse: "5 km", valide: false, colorclass: "incorrect" },
      ],
    },
    {
      questionText: "23) La situation la plus dangereuese est ",
      imag: "images/img23.png",
      Propositions: [
        { reponse: "La situation 1", valide: false, colorclass: "incorrect" },
        { reponse: "La situation 2", valide: true, colorclass: "correct" },
        {
          reponse: "Aucune situation n'est dangereuse",
          valide: false,
          colorclass: "incorrect",
        },
      ],
    },
    {
      questionText: "24) Il y a un risque d'aquaplanage si je ne ralentis pas",
      imag: "images/img24.png",
      Propositions: [
        { reponse: "Oui", valide: true, colorclass: "correct" },
        { reponse: "Non", valide: false, colorclass: "incorrect" },
      ],
    },
    {
      questionText: "25) La signalisation indique une pente dangereuese",
      imag: "images/img25.png",
      Propositions: [
        { reponse: "Oui", valide: true, colorclass: "correct" },
        { reponse: "Non ", valide: false, colorclass: "incorrect" },
      ],
    },
    {
      questionText: "26) La voiture derrière moi:",
      imag: "images/img26.png",
      Propositions: [
        {
          reponse: "Respecte la distance de sécurité",
          valide: false,
          colorclass: "incorrect",
        },
        {
          reponse: "Ne respecte pas la distance de sécurité",
          valide: true,
          colorclass: "correct",
        },
      ],
    },
    {
      questionText: "27) Ce panneau indique une route prioritaire",
      imag: "images/img27.png",
      Propositions: [
        { reponse: "Oui", valide: true, colorclass: "correct" },
        { reponse: "Non", valide: false, colorclass: "incorrect" },
      ],
    },
    {
      questionText: "28) Pour dépasser le cycliste",
      imag: "images/img28.png",
      Propositions: [
        {
          reponse: "Je reste dans cette voie",
          valide: true,
          colorclass: "correct",
        },
        {
          reponse: "Je maintiens l'allure",
          valide: false,
          colorclass: "incorrect",
        },
        {
          reponse: "Je me déporte vers la gauche",
          valide: false,
          colorclass: "incorrect",
        },
      ],
    },
    {
      questionText: "29) Le marquage au sol interdit le dépassement dans",
      imag: "images/img29.png",
      Propositions: [
        {
          reponse: "Les deux sens de circulation",
          valide: false,
          colorclass: "incorrect",
        },
        {
          reponse: "Un seul sens de circulation",
          valide: true,
          colorclass: "correct",
        },
      ],
    },
    {
      questionText:
        "30) Le temps nécessaire pour parcourir une distance de 1km en marchant est d'environ",
      imag: "images/img30.png",
      Propositions: [
        { reponse: "12 minutes", valide: true, colorclass: "correct" },
        { reponse: "24 minutes", valide: false, colorclass: "incorrect" },
        { reponse: "36 minutes", valide: false, colorclass: "incorrect" },
      ],
    },
  ];

  const [questionCourante, setQuestionCourante] = useState(0);

  const handleAnswerOptionClick = (valide) => {
      
    const questionSuivante = questionCourante + 1;
  
    if (questionSuivante < questions.length) {
      setQuestionCourante(questionSuivante);
    }
  };
  return (
    <div className="quizz">
      <>
        <div className="question-section">
          <div className="question-count">
            <span>Question {questionCourante + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[questionCourante].questionText}
          </div>
          <img
            alt=""
            src={questions[questionCourante].imag}
            width="300"
            height="150"
          />
          <div>
            <Link to="/client">
              <button size="lg" className="boutonretour">
                Retour Menu Principal
              </button>
            </Link>
          </div>
          <div>
            <Link to="/TestGratuit">
              <button size="lg" className="boutonretour">
                Repasser le test
              </button>
            </Link>
          </div>
        </div>

        <div className="answer-section">
          {questions[questionCourante].Propositions.map((answerOption) => (
            <button
              class={answerOption.colorclass}
              onClick={() => {
                handleAnswerOptionClick(answerOption.valide);
              }}
            >
              {answerOption.reponse}
            </button>
          ))}
        </div>
      </>
    </div>
  );
 
}
