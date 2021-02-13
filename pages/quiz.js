/* eslint-disable react/prop-types */
import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import AlternativesForm from '../src/components/AlternativesForm';
import Button from '../src/components/Button';

function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>
        <h1>Resultados</h1>
      </Widget.Header>

      <Widget.Content>
        <p>
          Voce acertou &nbsp;
          {/* {results.reduce((somatoriaAtual, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return somatoriaAtual + 1;
            }
            return somatoriaAtual;
          }, 0)} */}
          {results.filter((x) => x).length}
          &nbsp; perguntas
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              #0
              {index + 1}
              &nbsp;Resultado:
              {result === true ? 'Acertou' : 'Errou'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        <h1>Carregando</h1>
      </Widget.Header>

      <Widget.Content>
        <img
          alt="Descrição"
          style={{
            width: '100%',
            objectFit: 'cover',
            margin: 'auto',
          }}
          src={db.loopBg}
        />
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;
  const alternativeFeedback = question.feedback;

  return (
    <Widget>
      <Widget.Header>
        {/* Primeiro par de chaves: react || Segundo par de chaves: JS */}
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />

      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        {/*   ALTERNATIVAS   */}
        <AlternativesForm
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 2 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelecet = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                // tag <a> com uma tag <label>
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelecet}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                {/* A L T E R N A T I V E S */}
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {/* <pre>
            {JSON.stringify(question, null, 2)}
          </pre> */}
          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
          {isQuestionSubmited && isCorrect && <p>{alternativeFeedback}</p>}
          {isQuestionSubmited && !isCorrect && <p>{alternativeFeedback}</p>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}
// ESTADOS DA TELA
const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',

};
// PÁGINA QUIZ
export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 4 * 1000);
  }, []);

  // React chama de: Efeitos || Effects]
  // nasce === didMount
  // atualizado === willUpdate
  // morre === willUnmount

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }
  // retorno que vai ser renderizado
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        {screenState === screenStates.QUIZ && (
        <QuestionWidget
          question={question}
          questionIndex={questionIndex}
          totalQuestions={totalQuestions}
          onSubmit={handleSubmitQuiz}
          addResult={addResult}
        />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultWidget results={results} />}

      </QuizContainer>
    </QuizBackground>
  );
}
