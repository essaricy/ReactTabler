import React from 'react';
import PropTypes from 'prop-types';
import {
  ActionConfigContainerProtoType,
  ColumnConfigProtoType
} from '../_prototypes/actiontable.prototype';
import ActionTable from '../_components/table/actiontable.component';

export default class ActionTableContainer extends React.Component {
  constructor(props) {
    super(props);

    if (props.columns.length === 0) {
      throw Error('At least one column must be configured');
    }
    this.setActionDefault = this.setActionDefault.bind(this);

    // Populate action defaults
    this.setActionDefault('add', 'Add', 'ADD NEW RECORD', 'Submit');
    this.setActionDefault('update', 'Update', 'UPDATE RECORD', 'Save');
  }

  setActionDefault(key, triggerName, modalTitle, actionName) {
    let actions = this.props.actions;
    let hasActions = actions != null && (actions.update || actions.delete);
    if (hasActions) {
      let action = this.props.actions[key];
      if (action != null) {
        if (!action.triggerName) {
          action.triggerName = triggerName;
        }
        if (!action.modalTitle) {
          action.modalTitle = modalTitle;
        }
        if (!action.actionName) {
          action.actionName = actionName;
        }
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">{this.props.title}</h1>
        </div>
        <div className="row">
          <div className="col-12">
            <ActionTable
              title={this.props.title}
              url={this.props.url}
              columns={this.props.columns}
              actions={this.props.actions}
            />
          </div>
        </div>
      </div>
    );
  }
}

ActionTableContainer.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.exact(ColumnConfigProtoType)).isRequired,
  actions: PropTypes.exact({
    add: PropTypes.exact(ActionConfigContainerProtoType),
    update: PropTypes.exact(ActionConfigContainerProtoType),
    delete: PropTypes.any
  })
};

ActionTableContainer.defaultProps = {
  title: 'Action Table Title'
};