import React from 'react';
import './Dashboard.scss';
import video from '../../assets/images/video.svg';
import hashtag from '../../assets/images/hashtag.svg';
import trivia from '../../assets/images/trivia.svg';
import up from '../../assets/images/up.png';

// Sample data
const taskListData = [
    {
        taskName: 'WATCH VIDEO',
        points: 10,
    },
    {
        taskName: 'COMPLETE TRIVIA',
        points: 10,
    },
    {
        taskName: 'USE HASHTAG',
        points: 10,
    },
];

const overviewTasks = [
    {
        taskName: 'Videos',
        icon: video,
        count: 5,
        growth: 10,
    },
    {
        taskName: 'Trivias',
        icon: trivia,
        count: 8,
        growth: 20,
    },
    {
        taskName: 'Hashtags',
        icon: hashtag,
        count: 12,
        growth: 15,
    },
];

// TaskCard component
function TaskCard({ taskName, points }) {
    return (
        <article className="cta">
            <p className="cta-title">
                {taskName}
            </p>
            <p className="cta-today cta-points">
                Total Points: {points}
            </p>
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
}

// Dashboard component
function Dashboard() {
    const userName = 'Brenda'; 
    const teamName = 'Toronto Raptors'; 
    const currentPlace = '4th place'; 
    const totalPoints = taskListData.reduce((sum, { points }) => sum + points, 0);

    return (
        <div>
            <header className="header">
                <div className="wrapper">
                    <div className="header-grid">
                        <div>
                            <h1>Your Score</h1>
                            <p className="header-place">{currentPlace}</p>
                            <p className="header-team">{teamName}</p>
                            <p className="header-points">Total Points: {totalPoints}</p> {/* Blue background applied here */}
                        </div>
                    </div>
                </div>
            </header>

            <section className="overview">
                <div className="wrapper">
                    <h2>Daily Stats</h2>
                    <div className="grid">
                        {overviewTasks.map(({ icon, taskName, count, growth }) => (
                            <OverviewCard key={taskName} icon={icon} taskName={taskName} count={count} growth={growth} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="top-card">
                <div className="wrapper">
                    <h2>Tasks</h2> {/* Added Tasks title */}
                    <div className="grid">
                        {taskListData.map((taskData, index) => <TaskCard key={index} {...taskData} />)}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
