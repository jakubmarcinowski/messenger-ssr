import React from 'react';
import { Field, reduxForm } from 'redux-form';

class ProfileForm extends React.Component {
    renderInput = ({ input }) => {
      return ( < > <input {...input} {...this.props.initialValues} autoComplete="off" /> < /> )
      }

      onSubmit = ({ comment }) => {
        this.props.onSubmit({ comment });
      }

      render() {
        return (
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <Field name="comment" type="text" component={this.renderInput} />
                    </form>
        );
      }
    }

    const validate = (formValues) => {
      const errors = {};

      if (!formValues.comment) {
        // No comment
        errors.comment = 'You must enter comment'
      };

      return errors;
    };

    export default reduxForm({
      form: 'commentForm',
      validate
    })(ProfileForm);
