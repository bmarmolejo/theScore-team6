import "./WorkoutPage.scss";
import videoPoster from "../../assets/images/VideoPoster.jpg";
import circleIcon from "../../assets/icons/circle.svg";
import circleCheck from "../../assets/icons/circleCheck.svg";
import { useState } from "react";

function WorkoutPage() {
  const [buttonText, setButtonText] = useState("Mark Complete");
    const [iconImg, setIconImg] = useState(circleIcon);
    const [showElement, setShowElement] = useState(true)

    function handlePlay() {
        setShowElement(false)
    }

  function handleClick() {
    if (buttonText === "Workout Complete" && iconImg === circleCheck) {
      setButtonText("Mark Complete");
      setIconImg(circleIcon);
    } else {
      setButtonText("Workout Complete");
      setIconImg(circleCheck);
    }
  }
  return (
    <section className="workout-page">
      <p className="workout-page__points">
        Points <span className="workout-page__num-points">32</span>
      </p>
      <h1 className="workout-page__title">WORKOUTS</h1>

      <article className="workout-page__videoSection">
        <h2 className="workout-page__video-title">Mitchell's Bicep Workout</h2>

        <div className="workout-page__video-container">
          {showElement && <p className="workout-page__level">EASY</p>}
          <video onPlay={handlePlay}
            controls
            poster={videoPoster}
            className="workout-page__video"
          ></video>
        </div>

        <div className="workout-page__video-info">
          <div class="workout-page__tags">
            <span className="workout-page__tag">Group</span>
            <span className="workout-page__tag">Sport</span>
          </div>

          <button
            className="workout-page__complete"
            type="button"
            onClick={handleClick}
          >
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
