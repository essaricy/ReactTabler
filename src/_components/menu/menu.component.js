import React from "react";

import MenuItem from "./menuitem.component";

export default class Menu extends React.Component {
  render() {
    return (
      <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
        {Object.keys(this.props.data).map(key => (
          <MenuItem
            key={key}
            name={key}
            data={this.props.data[key]}
            onMenuChange={this.props.onMenuChange}
          />
        ))}
      </ul>
    );
  }
}
