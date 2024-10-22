import "./PrizePage.scss";
import backArrow from "../../assets/icons/back-arrow.png";
import teamLogo from "../../assets/images/team-logo.png";
import ticketIcon from "../../assets/icons/ticket.png";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/confetti.json";
import { Link, useNavigate } from "react-router-dom";

export default function PrizePage() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="prize">
        <div className="prize__nav">
          <div>
            <img
              className="prize__nav--icon"
              src={backArrow}
              alt="returning icon"
              onClick={handleHome}
            />
          </div>
          <h3 className="prize__nav--title">The Rank</h3>
        </div>
        <div className="prize__body">
          <h1 className="prize__title">Congratulations</h1>
          <div className="prize__team-container">
            <Lottie options={defaultOptions} height={600} width={900} />
            <img className="prize__logo" src={teamLogo} />
          </div>
          <div className="prize__result">
            <p className="prize__result--text">YOU WON</p>
          </div>
        </div>
        <div>
          <div className="prize__rank">
            <p className="prize__rank--place">Your team was 4th place</p>
            <h2 className="prize__rank--entries">You got 200 entries</h2>
          </div>
          <div className="prize__ticket">
            <p className="prize__ticket--title">Ticket to a game</p>
            <img
              src={ticketIcon}
              alt="icon for ticket"
              className="prize__ticket--icon"
            />
            <p>Go to your account to claim</p>
          </div>
        </div>
        <button className="prize__footer" onClick={handleHome}>
          {" "}
          GO BACK
        </button>
      </div>
    </>
  );
}
