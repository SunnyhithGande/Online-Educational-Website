import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { Container, Row, Col, Button } from 'reactstrap';
import './brainbreak.css';

const BrainBreak = (props) => {
=======
import { Container, Row, Col } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import './brainbreak.css';

const BrainBreak = () => {
    const navigate = useNavigate();
>>>>>>> origin/main
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [userAnswer, setUserAnswer] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);
    const [score, setScore] = useState(0);
    const [questionType, setQuestionType] = useState('riddle'); // 'riddle' or 'quiz'
    const [totalQuestionsAttempted, setTotalQuestionsAttempted] = useState(0);
    const [breakTimeOver, setBreakTimeOver] = useState(false);
<<<<<<< HEAD
    const [quizStarted, setQuizStarted] = useState(false);
=======
    const [isStarted, setIsStarted] = useState(false);
>>>>>>> origin/main
    
    // Constants for limits
    const MAX_QUESTIONS = 5; // Maximum questions allowed
    const BREAK_TIME_LIMIT = 3 * 60; // 3 minutes total break time
    const [totalTimeLeft, setTotalTimeLeft] = useState(BREAK_TIME_LIMIT);

<<<<<<< HEAD
=======
    // Check authentication on component mount
    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        
        if (!token || !user) {
            navigate('/login');
            return;
        }
    }, [navigate]);

    // Timer effect for total break time
    useEffect(() => {
        let totalTimer;
        if (isStarted && totalTimeLeft > 0 && !breakTimeOver) {
            totalTimer = setInterval(() => {
                setTotalTimeLeft(prev => {
                    if (prev <= 1) {
                        setBreakTimeOver(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => clearInterval(totalTimer);
    }, [totalTimeLeft, breakTimeOver, isStarted]);

    const handleStart = () => {
        setIsStarted(true);
        setCurrentQuestion(getRandomQuestion());
    };

>>>>>>> origin/main
    const questions = {
        riddles: [
            {
                question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
                answer: "echo"
            },
            {
                question: "What has keys, but no locks; space, but no room; and you can enter, but not go in?",
                answer: "keyboard"
            },
            {
                question: "The more you take, the more you leave behind. What am I?",
                answer: "footsteps"
            }
        ],
        quiz: [
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                answer: "Mars"
            },
            {
                question: "What is the capital of Japan?",
                options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
                answer: "Tokyo"
            },
            {
                question: "How many continents are there?",
                options: ["5", "6", "7", "8"],
                answer: "7"
            }
        ]
    };

<<<<<<< HEAD
    // Timer effect for total break time
    useEffect(() => {
        let totalTimer;
        if (totalTimeLeft > 0 && !breakTimeOver && quizStarted) {
            totalTimer = setInterval(() => {
                setTotalTimeLeft(prev => {
                    if (prev <= 1) {
                        setBreakTimeOver(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => clearInterval(totalTimer);
    }, [totalTimeLeft, breakTimeOver, quizStarted]);

=======
>>>>>>> origin/main
    const checkAndUpdateAttempts = () => {
        const newTotal = totalQuestionsAttempted + 1;
        setTotalQuestionsAttempted(newTotal);
        if (newTotal >= MAX_QUESTIONS) {
            setBreakTimeOver(true);
        }
    };

    const getRandomQuestion = () => {
        const questionSet = questionType === 'riddle' ? questions.riddles : questions.quiz;
        const randomIndex = Math.floor(Math.random() * questionSet.length);
        return questionSet[randomIndex];
    };

    const handleTypeChange = (type) => {
        if (breakTimeOver) return;
        setQuestionType(type);
        setShowAnswer(false);
        setUserAnswer('');
        setCurrentQuestion(getRandomQuestion());
    };

    const handleSubmit = () => {
        if (breakTimeOver) return;
        if (userAnswer.toLowerCase() === currentQuestion?.answer.toLowerCase()) {
            setScore(score + 1);
        }
        setShowAnswer(true);
        checkAndUpdateAttempts();
    };

    const handleNext = () => {
        if (breakTimeOver) return;
        setCurrentQuestion(getRandomQuestion());
        setUserAnswer('');
        setShowAnswer(false);
    };

<<<<<<< HEAD
    useEffect(() => {
        if (quizStarted) {
            setCurrentQuestion(getRandomQuestion());
        }
    }, [questionType, quizStarted]); // eslint-disable-line react-hooks/exhaustive-deps

    if (!quizStarted) {
        return (
            <section className="brain-break" id={props.id}>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="8">
                            <div className="brain-break__wrapper">
                                <h2>Brain Break! 🧠</h2>
                                <p>Take a quick break with a fun quiz!</p>
                                <Button color="primary" size="lg" onClick={() => setQuizStarted(true)}>
                                    Take a Quiz
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }

    if (breakTimeOver) {
        return (
            <section className="brain-break" id={props.id}>
=======
    if (breakTimeOver) {
        return (
            <section className="brain-break">
>>>>>>> origin/main
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="8">
                            <div className="brain-break__wrapper">
                                <h2>Break Time Over! 🎯</h2>
                                <p>You've completed your brain break session.</p>
                                <div className="final-score">
                                    <h3>Final Score: {score}</h3>
                                    <p>Questions Attempted: {totalQuestionsAttempted}</p>
                                </div>
                                <p className="break-message">
                                    Time to get back to your studies! You can take another break later.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }

<<<<<<< HEAD
=======
    if (!isStarted) {
        return (
            <section className="brain-break">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="8">
                            <div className="brain-break__wrapper">
                                <h2>Ready for a Brain Break? 🧠</h2>
                                <p>Take a quick break with fun riddles and quizzes!</p>
                                <div className="start-section">
                                    <p>You'll have {Math.floor(BREAK_TIME_LIMIT / 60)} minutes to answer up to {MAX_QUESTIONS} questions.</p>
                                    <button className="btn start-btn" onClick={handleStart}>
                                        Start Brain Break
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }

>>>>>>> origin/main
    if (!currentQuestion) {
        return <div>Loading...</div>;
    }

    return (
<<<<<<< HEAD
        <section className="brain-break" id={props.id}>
=======
        <section className="brain-break">
>>>>>>> origin/main
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8">
                        <div className="brain-break__wrapper">
                            <h2>Brain Break! 🧠</h2>
                            <p>Take a quick break with a fun {questionType}!</p>
                            
                            <div className="type-selector">
                                <button 
                                    className={`btn ${questionType === 'riddle' ? 'active' : ''}`}
                                    onClick={() => handleTypeChange('riddle')}
                                >
                                    Riddles
                                </button>
                                <button 
                                    className={`btn ${questionType === 'quiz' ? 'active' : ''}`}
                                    onClick={() => handleTypeChange('quiz')}
                                >
                                    Quiz
                                </button>
                            </div>

                            <div className="score-timer">
                                <div className="score">
                                    Score: {score}
                                </div>
                                <div className="break-info">
                                    <div className={`total-timer ${totalTimeLeft <= 30 ? 'warning' : ''}`}>
                                        Break Time Left: {Math.floor(totalTimeLeft / 60)}:{(totalTimeLeft % 60).toString().padStart(2, '0')}
                                    </div>
                                    <div className="attempts">
                                        Questions Left: {MAX_QUESTIONS - totalQuestionsAttempted}
                                    </div>
                                </div>
                            </div>

                            <div className="question-box">
                                <h3>{currentQuestion.question}</h3>
                                
                                {questionType === 'quiz' && currentQuestion.options && (
                                    <div className="options">
                                        {currentQuestion.options.map((option, index) => (
                                            <button
                                                key={index}
                                                className={`option-btn ${userAnswer === option ? 'selected' : ''}`}
                                                onClick={() => setUserAnswer(option)}
                                                disabled={showAnswer}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {questionType === 'riddle' && (
                                    <input
                                        type="text"
                                        value={userAnswer}
                                        onChange={(e) => setUserAnswer(e.target.value)}
<<<<<<< HEAD
                                        placeholder="Enter your answer"
=======
                                        placeholder="Your answer..."
>>>>>>> origin/main
                                        disabled={showAnswer}
                                    />
                                )}

<<<<<<< HEAD
                                <button onClick={handleSubmit} disabled={showAnswer}>
                                    Submit
                                </button>
                                {showAnswer && (
                                    <button onClick={handleNext}>
                                        Next Question
                                    </button>
=======
                                {!showAnswer ? (
                                    <button className="btn submit-btn" onClick={handleSubmit}>
                                        Submit Answer
                                    </button>
                                ) : (
                                    <div className="answer-section">
                                        <p className="answer">
                                            {userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase() 
                                                ? "🎉 Correct!" 
                                                : `Wrong! The answer is: ${currentQuestion.answer}`}
                                        </p>
                                        <button className="btn next-btn" onClick={handleNext}>
                                            Next Question
                                        </button>
                                    </div>
>>>>>>> origin/main
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default BrainBreak; 