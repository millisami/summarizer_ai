import { logo } from "../assets"

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img
          src={logo}
          alt="ai_summizer_logo"
          className="w-28 object-contain"
        />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/millisami/ai_summarizer")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        An open-source article summarizer that summarizes long articles into
        short, clear and concise summary using AI.
      </h2>
    </header>
  )
}

export default Hero
