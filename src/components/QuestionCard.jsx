function QuestionCard({ data, handleAnswer }) {
  return (
    <div className="card">
      <h2>{data.question}</h2>

      <div className="options">
        {data.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;