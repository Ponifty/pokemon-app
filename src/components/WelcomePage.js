import PokeballVideo from "../assets/videos/pokemon-4800.mp4";
import PokeballImg from "../assets/images/pokemon-1920.jpg";
import useMediaQuery from "../hooks/useMediaQuery";
import useTypedText from "../hooks/useTypedText";

const title = "Welcome to the pokemon world !";

export default function WelcomePage() {
  const isMobile = useMediaQuery("(min-width:480px)");
  const welcomeTitle = useTypedText(title, 150);

  return (
    <article className="welcome-page">
      <div className="welcome-page__overlay"></div>
      <h1 className="welcome-page__title">{welcomeTitle}</h1>
      {isMobile ? (
        <video
          className="welcome-page__media"
          src={PokeballVideo}
          type="video/mp4"
          poster={PokeballImg}
          autoPlay
          muted
          loop
        />
      ) : null}
      <div className="welcome-page__btn-box">
        <button>Go</button>
      </div>
    </article>
  );
}
