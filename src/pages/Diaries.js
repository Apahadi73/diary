import React, { useState, useEffect } from 'react';

import DUMMY_DIARIES from '../dummyDiary';
import { Link } from 'react-router-dom';

import './Diaries.css';

// displays the cards of diary in the home page
const Diaries = (props) => {
	const [ loadedDiaries, setLoadedDiaries ] = useState([]);

	// used to load diaries once the component renders
	useEffect(() => {
		setLoadedDiaries(DUMMY_DIARIES.diaryArray);
	}, []);
	// deletes user selected diary from the diary list
	const deleteHandler = (id) => {
		const updatedDiaryList = loadedDiaries.filter((diary) => diary.id !== id);
		setLoadedDiaries(updatedDiaryList);
		console.log(updatedDiaryList);
	};
	const onRenderList = () => {
		if (loadedDiaries && loadedDiaries.length !== 0) {
			return loadedDiaries.map((item) => {
				return (
					<div className="diary-card" key={item.id}>
						<div className="title-button-container">
							<h2 className="title">{item.title}</h2>
							<i
								className="red trash icon"
								onClick={() => {
									deleteHandler(item.id);
								}}
							/>
						</div>

						<p className="date">{item.dateTime}</p>
						<div>
							<p>
								{item.description.substring(0, 400)}
								{item.description.length > 400 && <Link to={`/diary/${item.id}`}>Read More</Link>}
							</p>
						</div>
					</div>
				);
			});
		}
		return <div>Empty Diary! Please add one.</div>;
	};

	return <div>{onRenderList()}</div>;
};

export default Diaries;
