import PropTypes from 'prop-types';

export const ColumnConfigProtoType = {
  name: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  render: PropTypes.func,
  hide: PropTypes.bool,
  sort: PropTypes.bool
};

export const ActionConfigContainerProtoType = {
  triggerName: PropTypes.string,
  modalTitle: PropTypes.string,
  content: PropTypes.func.isRequired,
  actionName: PropTypes.string
};

export const ActionConfigComponentProtoType = {
  triggerName: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  content: PropTypes.func.isRequired,
  actionName: PropTypes.string.isRequired
};
