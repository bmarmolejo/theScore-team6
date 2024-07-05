import "./Points.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/icons/back-arrow.png";
import teamLogo from "../../assets/images/team-logo.png";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/confetti.json";

const Points = ({ pointsData, responses }) => {
  const correctAnswersCount = responses.filter(
    (response) => response.answer === response.correctAnswer
  ).length;

  console.log("correctAnswersCount", correctAnswersCount);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="points">
      <div className="points__nav">
        <Link to="/">
          <img
            className="points__back-icon"
            src={backArrow}
            alt="returning icon"
          />
        </Link>
        <p className="points__nav-title">The Rank</p>
      </div>
      <div className="points__body">
        <h1 className="points__title">Congratulations</h1>
        <div className="points__point-container">
          <p className="points__total-comment">Your total points</p>
          <p className="points__total">{pointsData.teams[0].points} pts</p>
        </div>
        <div className="points__team-container">
          <Lottie options={defaultOptions} height={600} width={900} />
          <img className="points__logo" src={teamLogo} />
        </div>
        <div className="points__points">
          <p className="points__earned">{pointsData.users[0].points} pts</p>
        </div>
      </div>
      <div className="points__leaderboard">
        <Link className="points__link" to="/leaderboard">
          Show Leaderboard
        </Link>
      </div>
    </div>
  );
};

export default Points;
