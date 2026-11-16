function Home({ startQuiz }) {
  return (
    <div className="home">
      <h1>🚀 Quiz Master DSA 2026</h1>

      <p>
        Teste seus conhecimentos sobre JavaScript,
        ReactJS e Desenvolvimento de Sistemas.
      </p>

      <button onClick={startQuiz}>
        Começar Quiz
      </button>
    </div>
  );
}

export default Home;