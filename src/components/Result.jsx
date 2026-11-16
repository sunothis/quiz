function Result({ score, restart }) {
  return (
    <div className="card">
      <h1>🏆 Resultado Final</h1>

      <h2>{score} pontos</h2>

      {score >= 60 ? (
        <p>🎉 Excelente trabalho!</p>
      ) : (
        <p>📚 Continue estudando e tente novamente.</p>
      )}

      <button onClick={restart}>
        Jogar Novamente
      </button>
    </div>
  );
}

export default Result;