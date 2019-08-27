import React from "react";

export default class Input extends React.Component {
  render() {
    return <button onClick={this.props.addToList}>{this.props.addbtn}</button>;
  }
}
