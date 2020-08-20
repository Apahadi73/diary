import React from 'react';
import { useParams } from 'react-router-dom';
import DUMMY_DIARIES from '../dummyDiary';
import Input from '../components/form/Input';

// updates diary
const UpdateDiary = () => {
	const { diaryId } = useParams();
	const renderInput = () => {
		const diaryList = DUMMY_DIARIES.diaryArray;
		const diary = diaryList.filter((item) => item.id === diaryId)[0];
		console.log(diary);
		return (
			<div>
				<Input title={diary.title} description={diary.description} actionType="update" diaryId={diaryId} />
			</div>
		);
	};
	return <div className="ui container">{renderInput()}</div>;
};

export default UpdateDiary;
