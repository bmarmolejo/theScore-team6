import "./Leaderboard.scss";
import backArrow from "../../assets/icons/back-arrow.png";
import teamLogo from "../../assets/images/team-logo.png";
import star from "../../assets/images/star.png";

const Leaderboard = () => {
    return (
        <>
            <div className="page-container">
                <div className="nav-bar">
                    <img src={backArrow} className="nav-bar__arrow-icon" />
                    <h1 className="nav-bar__title">Ranking</h1>
                    <div></div>
                </div>
                <div className="overview-card">
                    <div>
                        <div className="overview-card__title">
                            <h2>Leaderboard</h2>
                        </div>

                        <div className="overview-card--flex">
                            <div className="overview-card__runners-up-wrapper">
                                <img className="overview-card--runners-up" src={teamLogo} />
                                <p>Toronto Raptors</p>
                                <p>2nd place</p>
                            </div>
                            <div className="overview-card__winner-wrapper">
                                <img src={teamLogo} className="overview-card--winner" />
                                <p>Toronto Raptors</p>
                                <p>1st place</p>
                            </div>
                            <div className="overview-card__runners-up-wrapper">
                                <img className="overview-card--runners-up" src={teamLogo} />
                                <p>Toronto Raptors</p>
                                <p>3rd place</p>
                            </div>
                        </div>


                    </div>



                </div>
<div>
    <h2>Top Scores</h2>
    <div className="top-scores-card--flex">
    <div>
        <img className="top-scores-card__icon" src= {star}/>
        <p>All Time</p>
    </div>
    <div>
        <img className="top-scores-card__icon" src= {star}/>
        <p>Weekly</p>
    </div>
    <div>
        <img className="top-scores-card__icon" src= {star}/>
        <p>Category</p>
    </div>
    </div>
</div>


            </div>

        </>
    )
}

export default Leaderboard;