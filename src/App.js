import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Diaries from './pages/Diaries';
import CreateDiary from './pages/CreateDiary';
import UpdateDiary from './pages/UpdateDiary';
import Diary from './pages/Diary';
import MainNavigation from './components/Navigation/MainNavigation';

import './App.css';

const App = () => {
	return (
		<div className="app-body">
			<div className="ui container">
				<Router>
					<MainNavigation />
					<main className="background-color">
						<Switch>
							<Route path="/" exact>
								<Diaries />
							</Route>
							<Route path="/create" exact>
								<CreateDiary />
							</Route>
							<Route path="/update/:diaryId">
								<UpdateDiary />
							</Route>
							<Route path="/diary/:diaryId">
								<Diary />
							</Route>
							<Redirect to="/" />
						</Switch>
					</main>
				</Router>
			</div>
		</div>
	);
};

export default App;
