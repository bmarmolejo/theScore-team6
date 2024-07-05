import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Dashboard.scss";
import video from "../../assets/images/video.svg";
import hashtag from "../../assets/images/hashtag.svg";
import trivia from "../../assets/images/trivia.svg";
import teamLogo from "../../assets/images/team-logo.png";
import up from "../../assets/images/up.png";
import backArrow from "../../assets/icons/back-arrow.png";

// Sample data
const taskListData = [
  {
    taskName: "WATCH VIDEO",
    points: 10,
    link: "/workout",
  },
  {
    taskName: "COMPLETE TRIVIA",
    points: 10,
    link: "/trivia",
  },
  {
    taskName: "USE HASHTAG",
    points: 10,
    link: "https://www.instagram.com/explore/tags/torontoraptors/",
  },
];

const overviewTasks = [
  {
    taskName: "Videos",
    icon: video,
    count: 5,
    growth: 10,
  },
  {
    taskName: "Trivias",
    icon: trivia,
    count: 8,
    growth: 20,
  },
  {
    taskName: "Hashtags",
    icon: hashtag,
    count: 12,
    growth: 15,
  },
  {
    taskName: "Videos",
    icon: video,
    count: 5,
    growth: 10,
  },
  {
    taskName: "Trivias",
    icon: trivia,
    count: 8,
    growth: 20,
  },
  {
    taskName: "Hashtags",
    icon: hashtag,
    count: 12,
    growth: 15,
  },
];

// TaskCard component
function TaskCard({ taskName, points, link, onClick }) {
  return (
    <article className="cta" onClick={() => onClick(points)}>
      <Link to={link} className="cta-link">
        <p className="cta-title">{taskName}</p>
        <p className="cta-today cta-points">TOTAL POINTS: {points}</p>
      </Link>
    </article>
  );
}

// OverviewCard component
function OverviewCard({ taskName, count, growth, icon }) {
  return (
    <div className="card-small">
      <p className="card-small-title">{taskName}</p>
      <p className="card-small-icon">
        <img src={icon} alt="icon" />
      </p>
      <p className="card-small-number">{count}</p>
      <p className="card-small-percentage">
        <span>
          <img src={up} alt="up" />
          {growth}%
        </span>
      </p>
    </div>
  );
  return (
    <div className="card-small">
      <p className="card-small-title">{taskName}</p>
      <p className="card-small-icon">
        <img src={icon} alt="icon" />
      </p>
      <p className="card-small-number">{count}</p>
      <p className="card-small-percentage">
        <span>
          <img src={up} alt="up" />
          {growth}%
        </span>
      </p>
    </div>
  );
}

// Dashboard component
function Dashboard() {
  const location = useLocation();
  const initialPoints = 10050;
  const [totalPoints, setTotalPoints] = useState(initialPoints);

  const handleTaskCompletion = (points) => {
    setTotalPoints((prevPoints) => prevPoints + points);
  };

  const formattedPoints = new Intl.NumberFormat().format(totalPoints);

  return (
    <div className="dashboard">
      <header className="header">
        <div className="wrapper">
          <div className="header__nav">
          <a
              href="https://www.thescore.com/"
            >
            <img className="header__back-icon" src={backArrow} alt="Back" />
            </a>
            <p className="header__nav-title">The Rank</p>
          </div>
          <nav className="header__nav-bar">
            <Link
              to="/dashboard"
              className={`header__nav-link ${
                location.pathname === "/dashboard" ? "active" : ""
              }`}
            >
              Your Score
            </Link>
            <Link
              to="/ranking"
              className={`header__nav-link ${
                location.pathname === "/ranking" ? "active" : ""
              }`}
            >
              Ranking
            </Link>
          </nav>

          <div className="header__body">
            <h1 className="header__title">Your Score</h1>
            <div className="header__points-container">
              <p className="header__total-comment">Your total points</p>
              <p className="header__total">{formattedPoints} pts</p>
            </div>
            <a
              href="https://www.thescore.com/nba/teams/5"
            >
              <img className="header__logo" src={teamLogo} alt="Team Logo" />
            </a>
          </div>
        </div>
      </header>

      <section className="overview">
        <div className="wrapper">
          <h2>Daily Stats</h2>
          <div className="grid">
            {overviewTasks.map(({ icon, taskName, count, growth }) => (
              <OverviewCard
                key={taskName}
                icon={icon}
                taskName={taskName}
                count={count}
                growth={growth}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="overview">
        <div className="wrapper">
          <h2>Daily Stats</h2>
          <div className="grid">
            {overviewTasks.map(({ icon, taskName, count, growth }) => (
              <OverviewCard
                key={taskName}
                icon={icon}
                taskName={taskName}
                count={count}
                growth={growth}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="top-card">
        <div className="wrapper">
          <h2>Tasks</h2>
          <div className="grid">
            {taskListData.map((taskData, index) => (
              <TaskCard
                key={index}
                {...taskData}
                onClick={handleTaskCompletion}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
      <section className="top-card">
        <div className="wrapper">
          <h2>Tasks</h2>
          <div className="grid">
            {taskListData.map((taskData, index) => (
              <TaskCard
                key={index}
                {...taskData}
                onClick={handleTaskCompletion}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
