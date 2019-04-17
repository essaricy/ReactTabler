import React from 'react';
import PropTypes from 'prop-types';

import { Form } from 'tabler-react';

export default class FormInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form.Group>
        <Form.Label>{this.props.label}</Form.Label>
        <input
          {...this.props}
          // id={this.props.id}
          className="form-control"
          // defaultValue={this.props.defaultValue}
          // onChange={this.props.onChange}
        />
      </Form.Group>
    );
  }
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
