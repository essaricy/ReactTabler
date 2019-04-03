import React from 'react';

export default class FeIconLink extends React.Component {
  render() {
    let style;
    if (this.props.color) {
      style = { color: this.props.color };
    }
    return (
      <a href={this.props.url} className="icon" onClick={this.props.onClick}>
        <i className={'fe fe-' + this.props.name} style={style} />
      </a>
    );
  }
}
