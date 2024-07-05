import "./Leaderboard.scss";
import backArrow from "../../assets/icons/back-arrow.png";
import { Link } from "react-router-dom";
import teamLogo from "../../assets/images/team-logo.png";
import star from "../../assets/images/star.png";
import chicagoBulls from "../../assets/images/chicago-bulls.png";
import miamiHeat from "../../assets/images/miami-heat.png";
import atlantaHawks from "../../assets/images/atlanta-hawks.png";
import portlandBlazers from "../../assets/images/portland-blazers.png";
import detroitPistons from "../../assets/images/detroit-pistons.png";
import washingtonWizards from "../../assets/images/washington-wizards.png";


const Leaderboard = () => {
    return (
        <>
            <div className="page-container">
                <div className="nav-bar">
                    <Link to="/">
                    <img src={backArrow} className="nav-bar__arrow-icon" />
                    </Link>
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
                                <img className="overview-card--runners-up" src={miamiHeat} />
                                <p>Miami Heat</p>
                                <p>2nd place</p>
                            </div>
                            <div className="overview-card__winner-wrapper">
                                <img src={detroitPistons} className="overview-card--winner" />
                                <p>Detroit Pistons</p>
                                <p>1st place</p>
                            </div>
                            <div className="overview-card__runners-up-wrapper">
                                <img className="overview-card--runners-up" src={chicagoBulls} />
                                <p>Chicago Bulls</p>
                                <p>3rd place</p>
                            </div>
                        </div>


                    </div>



                </div>
                <section>
                    <h2>Top Scores</h2>
                    <div className="top-scores-card--flex">
                        <div>
                            <img className="top-scores-card__icon" src={star} />
                            <p>All Time</p>
                        </div>
                        <div>
                            <img className="top-scores-card__icon" src={star} />
                            <p>Weekly</p>
                        </div>
                        <div>
                            <img className="top-scores-card__icon" src={star} />
                            <p>Category</p>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>Top Scores</h2>
                    <div className="ranking__card-wrapper--selected">
                        <div>
                            <p>4.</p>
                        </div>
                        <div>
                            <p>Current rank</p>
                            <h2>1,034,344 Points</h2>
                            <p>You contributed 200pts </p>
                        </div>
                        <div>
                            <img src={teamLogo} className="ranking--logo-resize"/>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="ranking__card-wrapper">
                        <div>
                            <p>5.</p>
                        </div>
                        <div className="ranking__card-right-div">
                            <div>
                                <p>Atlanta Hawks</p>
                                <h2>34,344 Points</h2>
                            </div>

                            <div>
                                <img src={atlantaHawks} className="ranking--logo-resize" />
                            </div>
                        </div>
                    </div>
                    <div className="ranking__card-wrapper">
                        <div>
                            <p>6.</p>
                        </div>
                        <div className="ranking__card-right-div">

                            <div>
                                <p>Portland Blazers</p>
                                <h2>4,344 Points</h2>
                            </div>


                            <div>
                                <img src={portlandBlazers} className="ranking--logo-resize"/>
                            </div>
                        </div>

                    </div>
                    <div className="ranking__card-wrapper">
                        <div>
                            <p>7.</p>
                        </div>


                        <div className="ranking__card-right-div">
                            <div>
                                <p>Washington Wizards</p>
                                <h2>344 Points</h2>
                            </div>
                            <div>
                                <img src={washingtonWizards} className="ranking--logo-resize"/>
                            </div>
                        </div>
                    </div>
                </section>


            </div>

        </>
    )
}

export default Leaderboard;