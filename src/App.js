import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

  const [currentQuestion,setCurrentQuestion]=useState(0);

  const [showScore,setShowScore]=useState(false);
  
  const [score,setScore]=useState(0);

  const [counter,setCounter]=useState(1);

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setCounter(1);
  };
  
  const handleAnswerButtonClick= (isCorrect) => {
	if(isCorrect===true){
		setScore(score+1);
	}

    const nextQuestion = currentQuestion + 1;
	setCounter(counter+1);
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		}
		
		else {
			setShowScore(true);
		}
	};

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {counter}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions)=>(
              <button onClick={()=> handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button> 
            ))}
						
					</div>
					
				</>
			
			)}
			{showScore && (
				<button onClick={resetQuiz} className='reset-button'>
				<span>Reset Button</span>
				</button>
			)}
		</div>
	);
}