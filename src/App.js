import React, { useState } from 'react';
import './App.css';
import './Footer.css';
import './Blog.css';
import './Roulette.css';
import Options from './components/Options';
import Earnings from './components/Earnings';
import Members from './components/Members';
import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Footer from './components/blog/Footer';
import Blog from './components/blog/Blog';
import NavBar from './components/NavBar';
import GirasolPage from './components/GirasolPage';
import ScrollToTop from './ScrollToTop';
import Roulette from './components/Roulette';

function App() {
  const [mode, setMode] = useState('trophies');
  const [trophies, setTrophies] = useState(0);
  const [gems, setGems] = useState(0);
  const [rubies, setRubies] = useState(0);
  const [tasks, setTasks] = useState(0);
  const [membersResults, setMembersResults] = useState({
    1: { trophies: 0, tasks: 0, gems: 0, rubies: 0 },
    2: { trophies: 0, tasks: 0, gems: 0, rubies: 0 },
    3: { trophies: 0, tasks: 0, gems: 0, rubies: 0 },
    4: { trophies: 0, tasks: 0, gems: 0, rubies: 0 },
    5: { trophies: 0, tasks: 0, gems: 0, rubies: 0 },
    6: { trophies: 0, tasks: 0, gems: 0, rubies: 0 },
    7: { trophies: 0, tasks: 0, gems: 0, rubies: 0 },
    8: { trophies: 0, tasks: 0, gems: 0, rubies: 0 },
    9: { trophies: 0, tasks: 0, gems: 0, rubies: 0 },
    10: { trophies: 0, tasks: 0, gems: 0, rubies: 0 },
    11: { trophies: 0, tasks: 0, gems: 0, rubies: 0 },
    12: { trophies: 0, tasks: 0, gems: 0, rubies: 0 },
    13: { trophies: 0, tasks: 0, gems: 0, rubies: 0 },
    14: { trophies: 0, tasks: 0, gems: 0, rubies: 0 },
    15: { trophies: 0, tasks: 0, gems: 0, rubies: 0 },
    16: { trophies: 0, tasks: 0, gems: 0, rubies: 0 },
    17: { trophies: 0, tasks: 0, gems: 0, rubies: 0 },
    18: { trophies: 0, tasks: 0, gems: 0, rubies: 0 },
    19: { trophies: 0, tasks: 0, gems: 0, rubies: 0 },
    20: { trophies: 0, tasks: 0, gems: 0, rubies: 0 },
  });

  const changeMode = (mode) => {
    setMode(mode);
  };

  const changeTasks = (number) => {
    setTasks(number);
    reCalculateTasks(number);
  };

  const changeTrophies = (number) => {
    setTrophies(number);
    reCalculateTrophies(number);
  };
  const changeGems = (number) => {
    setGems(number);
    reCalculateGems(number);
  };
  const changeRubies = (number) => {
    setRubies(number);
    reCalculateRubies(number);
  };

  const handleTrophiesChanges = (trophies, number) => {
    let newMembersResults = membersResults;
    newMembersResults[number]['trophies'] = trophies;
    calculate(newMembersResults);
  };

  const handleTasksChanges = (tasks, number) => {
    let newMembersResults = membersResults;
    newMembersResults[number]['tasks'] = tasks;
    calculate(newMembersResults);
  };

  const calculate = (newMembersResults) => {
    if (gems == 0) return null;
    if (trophies == 0) return null;
    if (mode != 'trophies' && tasks == 0) return null;
    if (mode == 'trophies') {
      for (let i = 0; i < Object.keys(membersResults).length; i++) {
        let percentage = membersResults[i + 1]['trophies'] / trophies;
        let totalGems = Math.round(percentage * gems);
        let totalRubies = Math.round(percentage * rubies);
        newMembersResults[i + 1]['gems'] = totalGems;
        newMembersResults[i + 1]['rubies'] = totalRubies;
      }
    } else if (mode == '75/25') {
      let seventyfiveGems = gems * 0.75;
      let twentyfiveGems = gems * 0.25;
      let seventyfiveRubies = rubies * 0.75;
      let twentyfiveRubies = rubies * 0.25;
      for (let i = 0; i < Object.keys(membersResults).length; i++) {
        let percentage = membersResults[i + 1]['trophies'] / trophies;
        let percentageTasks = membersResults[i + 1]['tasks'] / tasks;
        let gemsPartOne = seventyfiveGems * percentage;
        let gemsPartTwo = twentyfiveGems * percentageTasks;
        let rubiesPartOne = seventyfiveRubies * percentage;
        let rubiesPartTwo = twentyfiveRubies * percentageTasks;
        let totalGems = Math.round(gemsPartOne + gemsPartTwo);
        let totalRubies = Math.round(rubiesPartOne + rubiesPartTwo);
        newMembersResults[i + 1]['gems'] = totalGems;
        newMembersResults[i + 1]['rubies'] = totalRubies;
      }
    } else if (mode == '50/50') {
      let seventyfiveGems = gems * 0.5;
      let twentyfiveGems = gems * 0.5;
      let seventyfiveRubies = rubies * 0.5;
      let twentyfiveRubies = rubies * 0.5;
      for (let i = 0; i < Object.keys(membersResults).length; i++) {
        let percentage = membersResults[i + 1]['trophies'] / trophies;
        let percentageTasks = membersResults[i + 1]['tasks'] / tasks;
        let gemsPartOne = seventyfiveGems * percentage;
        let gemsPartTwo = twentyfiveGems * percentageTasks;
        let rubiesPartOne = seventyfiveRubies * percentage;
        let rubiesPartTwo = twentyfiveRubies * percentageTasks;
        let totalGems = Math.round(gemsPartOne + gemsPartTwo);
        let totalRubies = Math.round(rubiesPartOne + rubiesPartTwo);
        newMembersResults[i + 1]['gems'] = totalGems;
        newMembersResults[i + 1]['rubies'] = totalRubies;
      }
    } else if (mode == 'tasks') {
      for (let i = 0; i < Object.keys(membersResults).length; i++) {
        let percentage = membersResults[i + 1]['tasks'] / tasks;
        let totalGems = Math.round(percentage * gems);
        let totalRubies = Math.round(percentage * rubies);
        newMembersResults[i + 1]['gems'] = totalGems;
        newMembersResults[i + 1]['rubies'] = totalRubies;
      }
    }
    setMembersResults(newMembersResults);
  };

  const reCalculateTrophies = (trophies) => {
    let newMembersResults = membersResults;
    if (gems == 0) return null;
    if (trophies == 0) return null;
    if (mode != 'trophies' && tasks == 0) return null;
    if (mode == 'trophies') {
      for (let i = 0; i < Object.keys(membersResults).length; i++) {
        let percentage = membersResults[i + 1]['trophies'] / trophies;
        let totalGems = Math.round(percentage * gems);
        let totalRubies = Math.round(percentage * rubies);
        newMembersResults[i + 1]['gems'] = totalGems;
        newMembersResults[i + 1]['rubies'] = totalRubies;
      }
    } else if (mode == '75/25') {
      let seventyfiveGems = gems * 0.75;
      let twentyfiveGems = gems * 0.25;
      let seventyfiveRubies = rubies * 0.75;
      let twentyfiveRubies = rubies * 0.25;
      for (let i = 0; i < Object.keys(membersResults).length; i++) {
        let percentage = membersResults[i + 1]['trophies'] / trophies;
        let percentageTasks = membersResults[i + 1]['tasks'] / tasks;
        let gemsPartOne = seventyfiveGems * percentage;
        let gemsPartTwo = twentyfiveGems * percentageTasks;
        let rubiesPartOne = seventyfiveRubies * percentage;
        let rubiesPartTwo = twentyfiveRubies * percentageTasks;
        let totalGems = Math.round(gemsPartOne + gemsPartTwo);
        let totalRubies = Math.round(rubiesPartOne + rubiesPartTwo);
        newMembersResults[i + 1]['gems'] = totalGems;
        newMembersResults[i + 1]['rubies'] = totalRubies;
      }
    } else if (mode == '50/50') {
      let seventyfiveGems = gems * 0.5;
      let twentyfiveGems = gems * 0.5;
      let seventyfiveRubies = rubies * 0.5;
      let twentyfiveRubies = rubies * 0.5;
      for (let i = 0; i < Object.keys(membersResults).length; i++) {
        let percentage = membersResults[i + 1]['trophies'] / trophies;
        let percentageTasks = membersResults[i + 1]['tasks'] / tasks;
        let gemsPartOne = seventyfiveGems * percentage;
        let gemsPartTwo = twentyfiveGems * percentageTasks;
        let rubiesPartOne = seventyfiveRubies * percentage;
        let rubiesPartTwo = twentyfiveRubies * percentageTasks;
        let totalGems = Math.round(gemsPartOne + gemsPartTwo);
        let totalRubies = Math.round(rubiesPartOne + rubiesPartTwo);
        newMembersResults[i + 1]['gems'] = totalGems;
        newMembersResults[i + 1]['rubies'] = totalRubies;
      }
    } else if (mode == 'tasks') {
      for (let i = 0; i < Object.keys(membersResults).length; i++) {
        let percentage = membersResults[i + 1]['tasks'] / tasks;
        let totalGems = Math.round(percentage * gems);
        let totalRubies = Math.round(percentage * rubies);
        newMembersResults[i + 1]['gems'] = totalGems;
        newMembersResults[i + 1]['rubies'] = totalRubies;
      }
    }
    setMembersResults(newMembersResults);
  };

  const reCalculateGems = (gems) => {
    let newMembersResults = membersResults;
    if (gems == 0) return null;
    if (trophies == 0) return null;
    if (mode != 'trophies' && tasks == 0) return null;
    if (mode == 'trophies') {
      for (let i = 0; i < Object.keys(membersResults).length; i++) {
        let percentage = membersResults[i + 1]['trophies'] / trophies;
        let totalGems = Math.round(percentage * gems);
        let totalRubies = Math.round(percentage * rubies);
        newMembersResults[i + 1]['gems'] = totalGems;
        newMembersResults[i + 1]['rubies'] = totalRubies;
      }
    } else if (mode == '75/25') {
      let seventyfiveGems = gems * 0.75;
      let twentyfiveGems = gems * 0.25;
      let seventyfiveRubies = rubies * 0.75;
      let twentyfiveRubies = rubies * 0.25;
      for (let i = 0; i < Object.keys(membersResults).length; i++) {
        let percentage = membersResults[i + 1]['trophies'] / trophies;
        let percentageTasks = membersResults[i + 1]['tasks'] / tasks;
        let gemsPartOne = seventyfiveGems * percentage;
        let gemsPartTwo = twentyfiveGems * percentageTasks;
        let rubiesPartOne = seventyfiveRubies * percentage;
        let rubiesPartTwo = twentyfiveRubies * percentageTasks;
        let totalGems = Math.round(gemsPartOne + gemsPartTwo);
        let totalRubies = Math.round(rubiesPartOne + rubiesPartTwo);
        newMembersResults[i + 1]['gems'] = totalGems;
        newMembersResults[i + 1]['rubies'] = totalRubies;
      }
    } else if (mode == '50/50') {
      let seventyfiveGems = gems * 0.5;
      let twentyfiveGems = gems * 0.5;
      let seventyfiveRubies = rubies * 0.5;
      let twentyfiveRubies = rubies * 0.5;
      for (let i = 0; i < Object.keys(membersResults).length; i++) {
        let percentage = membersResults[i + 1]['trophies'] / trophies;
        let percentageTasks = membersResults[i + 1]['tasks'] / tasks;
        let gemsPartOne = seventyfiveGems * percentage;
        let gemsPartTwo = twentyfiveGems * percentageTasks;
        let rubiesPartOne = seventyfiveRubies * percentage;
        let rubiesPartTwo = twentyfiveRubies * percentageTasks;
        let totalGems = Math.round(gemsPartOne + gemsPartTwo);
        let totalRubies = Math.round(rubiesPartOne + rubiesPartTwo);
        newMembersResults[i + 1]['gems'] = totalGems;
        newMembersResults[i + 1]['rubies'] = totalRubies;
      }
    } else if (mode == 'tasks') {
      for (let i = 0; i < Object.keys(membersResults).length; i++) {
        let percentage = membersResults[i + 1]['tasks'] / tasks;
        let totalGems = Math.round(percentage * gems);
        let totalRubies = Math.round(percentage * rubies);
        newMembersResults[i + 1]['gems'] = totalGems;
        newMembersResults[i + 1]['rubies'] = totalRubies;
      }
    }
    setMembersResults(newMembersResults);
  };

  const reCalculateRubies = (rubies) => {
    let newMembersResults = membersResults;
    if (gems == 0) return null;
    if (trophies == 0) return null;
    if (mode != 'trophies' && tasks == 0) return null;
    if (mode == 'trophies') {
      for (let i = 0; i < Object.keys(membersResults).length; i++) {
        let percentage = membersResults[i + 1]['trophies'] / trophies;
        let totalGems = Math.round(percentage * gems);
        let totalRubies = Math.round(percentage * rubies);
        newMembersResults[i + 1]['gems'] = totalGems;
        newMembersResults[i + 1]['rubies'] = totalRubies;
      }
    } else if (mode == '75/25') {
      let seventyfiveGems = gems * 0.75;
      let twentyfiveGems = gems * 0.25;
      let seventyfiveRubies = rubies * 0.75;
      let twentyfiveRubies = rubies * 0.25;
      for (let i = 0; i < Object.keys(membersResults).length; i++) {
        let percentage = membersResults[i + 1]['trophies'] / trophies;
        let percentageTasks = membersResults[i + 1]['tasks'] / tasks;
        let gemsPartOne = seventyfiveGems * percentage;
        let gemsPartTwo = twentyfiveGems * percentageTasks;
        let rubiesPartOne = seventyfiveRubies * percentage;
        let rubiesPartTwo = twentyfiveRubies * percentageTasks;
        let totalGems = Math.round(gemsPartOne + gemsPartTwo);
        let totalRubies = Math.round(rubiesPartOne + rubiesPartTwo);
        newMembersResults[i + 1]['gems'] = totalGems;
        newMembersResults[i + 1]['rubies'] = totalRubies;
      }
    } else if (mode == '50/50') {
      let seventyfiveGems = gems * 0.5;
      let twentyfiveGems = gems * 0.5;
      let seventyfiveRubies = rubies * 0.5;
      let twentyfiveRubies = rubies * 0.5;
      for (let i = 0; i < Object.keys(membersResults).length; i++) {
        let percentage = membersResults[i + 1]['trophies'] / trophies;
        let percentageTasks = membersResults[i + 1]['tasks'] / tasks;
        let gemsPartOne = seventyfiveGems * percentage;
        let gemsPartTwo = twentyfiveGems * percentageTasks;
        let rubiesPartOne = seventyfiveRubies * percentage;
        let rubiesPartTwo = twentyfiveRubies * percentageTasks;
        let totalGems = Math.round(gemsPartOne + gemsPartTwo);
        let totalRubies = Math.round(rubiesPartOne + rubiesPartTwo);
        newMembersResults[i + 1]['gems'] = totalGems;
        newMembersResults[i + 1]['rubies'] = totalRubies;
      }
    } else if (mode == 'tasks') {
      for (let i = 0; i < Object.keys(membersResults).length; i++) {
        let percentage = membersResults[i + 1]['tasks'] / tasks;
        let totalGems = Math.round(percentage * gems);
        let totalRubies = Math.round(percentage * rubies);
        newMembersResults[i + 1]['gems'] = totalGems;
        newMembersResults[i + 1]['rubies'] = totalRubies;
      }
    }
    setMembersResults(newMembersResults);
  };

  const reCalculateTasks = (tasks) => {
    let newMembersResults = membersResults;
    if (gems == 0) return null;
    if (trophies == 0) return null;
    if (mode != 'trophies' && tasks == 0) return null;
    if (mode == 'trophies') {
      for (let i = 0; i < Object.keys(membersResults).length; i++) {
        let percentage = membersResults[i + 1]['trophies'] / trophies;
        let totalGems = Math.round(percentage * gems);
        let totalRubies = Math.round(percentage * rubies);
        newMembersResults[i + 1]['gems'] = totalGems;
        newMembersResults[i + 1]['rubies'] = totalRubies;
      }
    } else if (mode == '75/25') {
      let seventyfiveGems = gems * 0.75;
      let twentyfiveGems = gems * 0.25;
      let seventyfiveRubies = rubies * 0.75;
      let twentyfiveRubies = rubies * 0.25;
      for (let i = 0; i < Object.keys(membersResults).length; i++) {
        let percentage = membersResults[i + 1]['trophies'] / trophies;
        let percentageTasks = membersResults[i + 1]['tasks'] / tasks;
        let gemsPartOne = seventyfiveGems * percentage;
        let gemsPartTwo = twentyfiveGems * percentageTasks;
        let rubiesPartOne = seventyfiveRubies * percentage;
        let rubiesPartTwo = twentyfiveRubies * percentageTasks;
        let totalGems = Math.round(gemsPartOne + gemsPartTwo);
        let totalRubies = Math.round(rubiesPartOne + rubiesPartTwo);
        newMembersResults[i + 1]['gems'] = totalGems;
        newMembersResults[i + 1]['rubies'] = totalRubies;
      }
    } else if (mode == '50/50') {
      let seventyfiveGems = gems * 0.5;
      let twentyfiveGems = gems * 0.5;
      let seventyfiveRubies = rubies * 0.5;
      let twentyfiveRubies = rubies * 0.5;
      for (let i = 0; i < Object.keys(membersResults).length; i++) {
        let percentage = membersResults[i + 1]['trophies'] / trophies;
        let percentageTasks = membersResults[i + 1]['tasks'] / tasks;
        let gemsPartOne = seventyfiveGems * percentage;
        let gemsPartTwo = twentyfiveGems * percentageTasks;
        let rubiesPartOne = seventyfiveRubies * percentage;
        let rubiesPartTwo = twentyfiveRubies * percentageTasks;
        let totalGems = Math.round(gemsPartOne + gemsPartTwo);
        let totalRubies = Math.round(rubiesPartOne + rubiesPartTwo);
        newMembersResults[i + 1]['gems'] = totalGems;
        newMembersResults[i + 1]['rubies'] = totalRubies;
      }
    } else if (mode == 'tasks') {
      for (let i = 0; i < Object.keys(membersResults).length; i++) {
        let percentage = membersResults[i + 1]['tasks'] / tasks;
        let totalGems = Math.round(percentage * gems);
        let totalRubies = Math.round(percentage * rubies);
        newMembersResults[i + 1]['gems'] = totalGems;
        newMembersResults[i + 1]['rubies'] = totalRubies;
      }
    }
    setMembersResults(newMembersResults);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <div className="App">
        <Link to="/" id="title-link">
          {' '}
          <h1 className="title">My Cafe Calculator</h1>
        </Link>
        <NavBar />
        <div className="separator"></div>

        <Switch>
          <Route
            path="/blog"
            render={({ location }) => {
              return <Blog location={location} />;
            }}
          ></Route>

          <Route path="/girasol">
            <GirasolPage />
          </Route>

          <Route path="/roulette">
            <Roulette />
          </Route>

          <Route path="/">
            <Options changeMode={changeMode} />
            <div className="separator"></div>
            <Earnings
              changeGems={changeGems}
              changeRubies={changeRubies}
              changeTrophies={changeTrophies}
              changeTasks={changeTasks}
              mode={mode}
            />
            <div className="separator"></div>

            <Members
              membersResults={membersResults}
              handleChanges={handleTrophiesChanges}
              handleTasksChanges={handleTasksChanges}
              mode={mode}
            />
          </Route>
        </Switch>

        <div className="separator"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
