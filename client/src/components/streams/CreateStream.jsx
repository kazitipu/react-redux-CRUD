import React from "react";
import { reduxForm, Field } from "redux-form";

class CreateStream extends React.Component {
  onSubmit = (formValues) => {
    console.log(formValues);
  };
  renderError = ({ touched, error }) => {
    if (touched && error) {
      return error;
    }
    return null;
  };
  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <input
          placeholder={label}
          {...input}
          autoComplete="off"
          className="form-control"
        />
        <div className="form-text text-muted">{this.renderError(meta)}</div>
      </div>
    );
  };
  render() {
    return (
      <div>
        <h1>CreateStream</h1>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <Field
              name="title"
              component={this.renderInput}
              label="Enter title"
            />
          </div>
          <div className="form-group">
            <Field
              name="description"
              component={this.renderInput}
              label="Enter description"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};
export default reduxForm({ form: "Streams", validate })(CreateStream);
