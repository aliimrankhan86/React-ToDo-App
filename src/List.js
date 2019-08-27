import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

export default class List extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.list.map(item => {
              return (
                <li key={item}>
                  {item}
                  <DeleteButton deletebtn={this.props.deletebtn} />
                  <EditButton editbtn={this.props.editbtn} />
                </li>
              )
            })
          }
        </ul>
      </div>

    );
  }
}
