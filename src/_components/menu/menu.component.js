import React from "react";

import MenuItemComponent from "./menuitem.component";

export default class MenuComponent extends React.Component {
  render() {
    return (
      <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
        {Object.keys(this.props.data).map(key => (
          <MenuItemComponent
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
