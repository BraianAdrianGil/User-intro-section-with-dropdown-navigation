import "./App.css";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

function App() {
  return (
    <div className="App">
      <header>
        <HeaderComponent />
      </header>
      <main>
        <picture className="main__hero__img__container">
          <source
            media="(min-width:1024px)"
            srcSet="/images/image-hero-desktop.png"
          />
          <img src="/images/image-hero-mobile.png" alt="" />
        </picture>

        <div className="main__content__general__container">
          <h1>Make remote work</h1>

          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>

          <div className="main__button__container">
            <button>Learn More</button>
          </div>

          <div className="main__brands__general__container">
            <div className="brand__container">
              <img src="/images/client-databiz.svg" alt="Databiz brand image" />
            </div>
            <div className="brand__container">
              <img
                src="/images/client-audiophile.svg"
                alt="Audiophile brand image"
              />
            </div>
            <div className="brand__container">
              <img src="/images/client-meet.svg" alt="Meet brand image" />
            </div>
            <div className="brand__container">
              <img src="/images/client-maker.svg" alt="Maker brand image" />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer__div__container">
          <p>Challenge by</p>
          <a href="https://www.frontendmentor.io/">Frontend Mentor</a>.
        </div>
        <div className="footer__div__container">
          <p>
            Coded by
            <a href="https://www.linkedin.com/in/braian-adrian-gil-gagliardo-a10042266/">
              Braian Adrian
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
