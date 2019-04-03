import React from 'react';

export default class CardHeaderTools extends React.Component {
  render() {
    const tools = React.Children.map(this.props.children, child => {
      return <span className="input-group-btn ml-2">{child}</span>;
    });
    return <div className="card-options">{tools}</div>;
  }
}
