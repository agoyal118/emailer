import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

//onclick={submitSurvey(formValues)}
//will be called instantly when
//everything is rendered bc it looks
//like a function call
//so to delay its execution
//pass it in as an arrow function


const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {
	const reviewFields = _.map(formFields, ({name, label}) => {
		return (
			<div key={name}>
				<label>
					{label}
				</label>
				<div>
					{formValues[name]}
				</div>
			</div>
		);
	});

	return (
		<div>
			<h5>Please confirm your entries</h5>
			{reviewFields}
			<button className="yellow darken-2 white-text btn-flat"
				type="submit" onClick={onCancel}
			>
				Back
			</button>
			<button
				onClick={() => submitSurvey(formValues, history)}
				className="blue btn-flat right white-text"
			>
				Send Survey
				<i className="material-icons right">email</i>
			</button>
		</div>
	);
}

//state being passed to mapStateToProps is
//state that is used by the store

function mapStateToProps(state) {
	return {
		formValues: state.form.surveyForm.values
	};
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));