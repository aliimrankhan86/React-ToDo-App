import React from "react";
import AddButton from "./AddButon";

export default class Input extends React.Component {
  render() {
    return (
      <div>
        <input type="text" onChange={this.props.onChangeInput} value={this.props.text} />
        <AddButton
          addbtn={this.props.addbtn}
          addToList={this.props.addToList}
        />
      </div>
    );
  }
}
