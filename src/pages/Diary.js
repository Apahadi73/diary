import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DUMMY_DIARIES from '../dummyDiary';

import './Diary.css';

// displays user selected diary in a different page
const Diary = (props) => {
	// receives diary id from the link
	const { diaryId } = useParams();

	const renderDiary = () => {
		const diary = DUMMY_DIARIES.diaryArray.filter((item) => item.id === diaryId)[0];
		return (
			<div className="diary-card">
				<Link to={`/update/${diaryId}`}>
					<button className="edit-button">Edit</button>
				</Link>
				<span>
					<h2>{diary.title}</h2>
				</span>
				<div className="date">{diary.dateTime}</div>
				<div className="description">{diary.description}</div>
			</div>
		);
	};
	return <div>{renderDiary()}</div>;
};

export default Diary;
