import PropTypes from "prop-types";

export let ColumnConfigProtoType = {
  name: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  render: PropTypes.func,
  hide: PropTypes.bool,
  sort: PropTypes.bool
};

export let ActionConfigContainerProtoType = {
  triggerName: PropTypes.string,
  modalTitle: PropTypes.string,
  content: PropTypes.func.isRequired,
  actionName: PropTypes.string
};

export let ActionConfigComponentProtoType = {
  triggerName: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  content: PropTypes.func.isRequired,
  actionName: PropTypes.string.isRequired
};
