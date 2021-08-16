import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Quizz.css";


export default function Quizz() {

  const questions = [
    {
      questionText: "1) A cette intersection, je laisse la priorité à droite :",
      imag: "images/img1.png",
      Propositions: [
        { reponse: "Oui", valide: false },
        { reponse: "Non", valide: true },
      ],
    },

    {
      questionText:
        "2) Le panneau de danger indique de virages dont le 1er est:",
      imag: "images/img2.png",
      Propositions: [
        { reponse: "A droite", valide: true },
        { reponse: "A gauche", valide: false },
      ],
    },

    {
      questionText: "3) Je peux dépasser le camion",
      imag: "images/img3.png",
      Propositions: [
        { reponse: "Oui", valide: false },
        { reponse: "Non", valide: true },
      ],
    },
    {
      questionText:
        "4) Avant de partir, je laisse tourner mon moteur pour qu'il monte en température",
      imag: "images/img4.png",
      Propositions: [
        { reponse: "Oui", valide: false },
        { reponse: "Non", valide: true },
      ],
    },
    {
      questionText: "5) Il neige, je peux rouler avec les feux de:",
      imag: "images/img5.png",
      Propositions: [
        {
          reponse: "Croisement et antibroullard avant et arrière",
          valide: true,
        },
        {
          reponse: "Position et antibroulliard avant et arrière",
          valide: false,
        },
      ],
    },
    {
      questionText:
        "6) En conduisant, je peux utuliser mon portable pour écrire un texto ou composer un numéro:",
      imag: "images/img6.png",
      Propositions: [
        { reponse: "Oui", valide: false },
        { reponse: "Non", valide: true },
      ],
    },
    {
      questionText:
        "7) je viens de dépasser l'emplacement d'arrêt d'urgence lorsque mon véhicule tombe en panne:",
      imag: "images/img7.png",
      Propositions: [
        { reponse: "Je tente de reculer", valide: false },
        { reponse: "J'allume mes feux de détresse", valide: true },
        { reponse: "Je me serre le plus à droite possible", valide: true },
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
        },
        {
          reponse: "Accélérer jusqu'à 110km/h avant de m'engager",
          valide: false,
        },
        {
          reponse:
            "Ralentir et m'arrêter si l'interction m'est refusé par les autres usagers",
          valide: false,
        },
      ],
    },
    {
      questionText: "9) A cette intersection",
      imag: "images/img9.png",
      Propositions: [
        { reponse: "Je maintiens mon allure", valide: false },
        { reponse: "Je ralentis", valide: true },
        { reponse: "Je freine fortement", valide: false },
      ],
    },
    {
      questionText:
        "10) Ce panneau m'autorise à m'arrêter pour faire descendre mes passagers",
      imag: "images/img10.png",
      Propositions: [
        { reponse: "Oui", valide: true },
        { reponse: "Non", valide: false },
      ],
    },
    {
      questionText: "11) Le marquage au sol m'indique que le dépassement est",
      imag: "images/img11.png",
      Propositions: [
        { reponse: "Autorisé", valide: true },
        { reponse: "Interdit", valide: false },
      ],
    },
    {
      questionText: "12)Si ce voyant de tempétature s'allume, je dois",
      imag: "images/img12.png",
      Propositions: [
        { reponse: "Marrêter immédiatement", valide: true },
        {
          reponse: "Me rendre chez le garagiste le plus proche",
          valide: false,
        },
      ],
    },
    {
      questionText: "13) apres ce panneau, je pourrai rouler à",
      imag: "images/img13.png",
      Propositions: [
        { reponse: "60 km/h", valide: true },
        { reponse: "70 km/h", valide: true },
        { reponse: "80 km/h", valide: true },
        { reponse: "100 km/h", valide: false },
      ],
    },
    {
      questionText: "14) Je sors de l'autoroute pour aller sur l'aire",
      imag: "images/img14.png",
      Propositions: [
        { reponse: "Je commence à ralentir", valide: false },
        {
          reponse: "Je ralentirai dans la voie de ralentissement",
          valide: true,
        },
      ],
    },
    {
      questionText:
        "15) Dans cette situation, le stationnement en marche arrière est",
      imag: "images/img15.png",
      Propositions: [
        { reponse: "Obligatoire", valide: false },
        { reponse: "Interdit", valide: false },
        { reponse: "Conseillé", valide: true },
      ],
    },
    {
      questionText: "16) Le véhicule venant de droite entame son insertion",
      imag: "images/img16.png",
      Propositions: [
        { reponse: "Trop tôt", valide: true },
        { reponse: "Au bon moment", valide: false },
        { reponse: "Trop tard", valide: false },
      ],
    },
    {
      questionText: "17) Je dois vérifier la pression des pneus tous les",
      imag: "images/img17.png",
      Propositions: [
        { reponse: "1 mois", valide: true },
        { reponse: "3 mois", valide: false },
        { reponse: "6 mois", valide: false },
        { reponse: "1 ans", valide: false },
      ],
    },
    {
      questionText: "18) Les feux de position avant sont visibles à",
      imag: "images/img18.png",
      Propositions: [
        { reponse: "50 mètres", valide: true },
        { reponse: "100 mètres", valide: true },
        { reponse: "150 mètres ", valide: true },
        { reponse: "200 mètres", valide: false },
      ],
    },
    {
      questionText:
        "19) Je suis contôlé avec taux d'alcoolémie de 0.25 mg/l d'air expiré",
      imag: "images/img19.png",
      Propositions: [
        { reponse: "Je perds 6 points", valide: true },
        { reponse: "Je perds 8 points", valide: false },
        { reponse: "Mon véhicule est immobilisé", valide: true },
        { reponse: "Je perds 4 points", valide: false },
      ],
    },
    {
      questionText: "20 )je peux croiser des véhicules en sens inverse",
      imag: "images/img20.png",
      Propositions: [
        { reponse: "Oui", valide: true },
        { reponse: "Non", valide: false },
      ],
    },
    {
      questionText: "21) IL pleut. A la sortie de ce tunnel, j'éteins mes feux",
      imag: "images/img21.png",
      Propositions: [
        { reponse: "j'éteins mes feux", valide: false },
        { reponse: "je n'éteins pas mes feux", valide: true },
        { reponse: "je n'éteins pas mes feux mais je ralentis", valide: false },
        {
          reponse: "je n'éteins pas mes feuxsans et je ne ralentis pas",
          valide: false,
        },
      ],
    },
    {
      questionText:
        "22) Si je tombe en panne sur l'autoroute, je peux trouver des bornes d'appel tous les",
      imag: "images/img22.png",
      Propositions: [
        { reponse: "500 m", valide: false },
        { reponse: "2 km", valide: true },
        { reponse: "4 km", valide: false },
        { reponse: "5 km", valide: false },
      ],
    },
    {
      questionText: "23) La situation la plus dangereuese est ",
      imag: "images/img23.png",
      Propositions: [
        { reponse: "La situation 1", valide: false },
        { reponse: "La situation 2", valide: true },
        { reponse: "Aucune situation n'est dangereuse", valide: false },
      ],
    },
    {
      questionText: "24) Il y a un risque d'aquaplanage si je ne ralentis pas",
      imag: "images/img24.png",
      Propositions: [
        { reponse: "Oui", valide: true },
        { reponse: "Non", valide: false },
      ],
    },
    {
      questionText: "25) La signalisation indique une pente dangereuese",
      imag: "images/img25.png",
      Propositions: [
        { reponse: "Oui", valide: true },
        { reponse: "Non ", valide: false },
      ],
    },
    {
      questionText: "26) La voiture derrière moi:",
      imag: "images/img26.png",
      Propositions: [
        { reponse: "Respecte la distance de sécurité", valide: false },
        { reponse: "Ne respecte pas la distance de sécurité", valide: true },
      ],
    },
    {
      questionText: "27) Ce panneau indique une route prioritaire",
      imag: "images/img27.png",
      Propositions: [
        { reponse: "Oui", valide: true },
        { reponse: "Non", valide: false },
      ],
    },
    {
      questionText: "28) Pour dépasser le cycliste",
      imag: "images/img28.png",
      Propositions: [
        { reponse: "Je reste dans cette voie", valide: true },
        { reponse: "Je maintiens l'allure", valide: false },
        { reponse: "Je me déporte vers la gauche", valide: false },
      ],
    },
    {
      questionText: "29) Le marquage au sol interdit le dépassement dans",
      imag: "images/img29.png",
      Propositions: [
        { reponse: "Les deux sens de circulation", valide: false },
        { reponse: "Un seul sens de circulation", valide: true },
      ],
    },
    {
      questionText:
        "30) Le temps nécessaire pour parcourir une distance de 1km en marchant est d'environ",
      imag: "images/img30.png",
      Propositions: [
        { reponse: "12 minutes", valide: true },
        { reponse: "24 minutes", valide: false },
        { reponse: "36 minutes", valide: false },
      ],
    },
  ];

  const [questionCourante, setQuestionCourante] = useState(0);
  const [afficheScore, setAfficheScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (valide) => {
    if (valide) {
      setScore(score + 1);
    }

    const questionSuivante = questionCourante + 1;
    if (questionSuivante < questions.length) {
      setQuestionCourante(questionSuivante);
    } else {
      setAfficheScore(true);
    }
  };
  return (
    <div className="quizz">
      {afficheScore ? (
        <div className="score-section">
          Vous avez obtenu {score} sur {questions.length}
          <div>
            <nav>
              <Link to="/oumaima">
                <button size="lg" className="boutonretour">
                  Retour Menu Principal
                </button>
              </Link>
            </nav>
          </div>
          <div>
            <Link to="/Solution">
              <button size="lg" className="boutonretour">
                Consulter la correction
              </button>
            </Link>
          </div>
        </div>
      ) : (
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
              <Link to="/oumaima">
                <button size="lg" className="boutonretour">
                  Retour Menu Principal
                </button>
              </Link>
            </div>
          </div>
          <div className="answer-section">
            {questions[questionCourante].Propositions.map((answerOption) => (
              <button
                onClick={() => {
                  handleAnswerOptionClick(answerOption.valide);
                }}
              >
                {answerOption.reponse}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
