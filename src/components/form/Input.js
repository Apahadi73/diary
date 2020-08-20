import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import date from 'date-and-time';
import { v4 as uuidv4 } from 'uuid';

import './Input.css';
import DUMMY_DIARY from '../../dummyDiary';

// our main input form
const Input = (props) => {
	const { register, handleSubmit, errors } = useForm();
	const history = useHistory();

	const onSubmit = (data) => {
		const now = new Date();
		const dateTime = date.format(now, 'ddd, MMM DD YYYY');
		if (props.actionType === 'update') {
			const index = DUMMY_DIARY.diaryArray.findIndex((item) => item.id === props.diaryId);
			DUMMY_DIARY.diaryArray[index] = {
				...DUMMY_DIARY.diaryArray[index],
				...data
			};
		} else {
			data.dateTime = dateTime;
			data.id = uuidv4();
			DUMMY_DIARY.diaryArray.push(data);
		}

		history.push('/');
	};
	return (
		<form className="ui form" onSubmit={handleSubmit(onSubmit)}>
			<div className="field">
				<label>Title</label>
				<input
					name="title"
					type="text"
					defaultValue={props.title}
					placeholder="Enter your title here..."
					ref={register({ required: true, minLength: 3 })}
				/>
				{errors.title &&
				errors.title.type === 'required' && <p className="error-text">You must enter a title</p>}
				{errors.title &&
				errors.title.type === 'minLength' && (
					<p className="error-text">Title must be at least 3 characters long</p>
				)}

				<label>Description</label>
				<textarea
					name="description"
					defaultValue={props.description}
					ref={register({ required: true, minLength: 10 })}
					placeholder="Enter your description here..."
				/>
				{errors.description &&
				errors.description.type === 'required' && <p className="error-text">You must enter a description</p>}
				{errors.description &&
				errors.description.type === 'minLength' && (
					<p className="error-text">Description must be at least 10 characters long</p>
				)}
			</div>
			<button name="save" className="ui primary button" type="submit">
				Save
			</button>
		</form>
	);
};

export default Input;
