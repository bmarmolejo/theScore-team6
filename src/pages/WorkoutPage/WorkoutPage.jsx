import "./WorkoutPage.scss";
import videoPoster from "../../assets/images/VideoPoster.jpg";
import backArrow from "../../assets/icons/back-arrow.png";
import circleIcon from "../../assets/icons/circle.svg";
import circleCheck from "../../assets/icons/circleCheck.svg";
import { useState } from "react";
import workoutCompleteAnimation from "../../assets/lotties/workout-complete.json";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

function WorkoutPage() {
  const [buttonText, setButtonText] = useState("Mark Complete");
  const [iconImg, setIconImg] = useState(circleIcon);
  const [showElement, setShowElement] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [points, setPoints] = useState(0);
  const [styles, setStyles] = useState({});

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: workoutCompleteAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  function handlePlay() {
    setShowElement(false);
  }

  function handleClick() {
    if (buttonText === "Workout Complete" && iconImg === circleCheck) {
      setButtonText("Mark Complete");
      setIconImg(circleIcon);
      setTimeout(() => setShowConfetti(false), 2500);
      setShowConfetti(false);
      setStyles(null);
      setPoints(0);
    } else {
      setButtonText("Workout Complete");
      setIconImg(circleCheck);
      setShowConfetti(true);
      let styleValues = {
        background:
          "linear-gradient(100deg, hsla(214, 100%, 50%, 1) 0%, hsla(186, 97%, 53%, 1) 100%)",
      };
      setStyles(styleValues);
      setPoints(32);
    }
  }
  return (
    <section className="workout-page">
      <div class="workout-page__header">
        <Link to="/">
          <img
            src={backArrow}
            alt="returning icon"
            className="workout-page__back-icon"
          />
        </Link>

        <p className="workout-page__points">
          Points <span className="workout-page__num-points">{points}</span>
        </p>
      </div>

      <h1 className="workout-page__title">WORKOUTS</h1>

      <article className="workout-page__videoSection">
        <h2 className="workout-page__video-title">Mitchell's Bicep Workout</h2>

        <div className="workout-page__video-container">
          {showElement && <p className="workout-page__level">EASY</p>}
          <video
            onPlay={handlePlay}
            controls
            poster={videoPoster}
            className="workout-page__video"
          ></video>
        </div>

        <div className="workout-page__video-info">
          <div className="workout-page__tags">
            <span className="workout-page__tag">Upper Body</span>
            <span className="workout-page__tag">Basketball</span>
          </div>

          <button
            style={styles}
            className="workout-page__complete"
            type="button"
            onClick={handleClick}
          >
            {showConfetti && (
              <div className="workout-page__confetti">
                <Lottie
                  options={defaultOptions}
                  height={400}
                  width={400}
                  isStopped={!showConfetti}
                  isPaused={false}
                />
              </div>
            )}
            {buttonText}
            <span>
              <img src={iconImg} alt="" className="workout-page__icon" />
            </span>
          </button>
        </div>

        <textarea
          className="workout-page__note"
          placeholder="Write a personal note about today's workout"
        ></textarea>
      </article>
    </section>
  );
}

export default WorkoutPage;
