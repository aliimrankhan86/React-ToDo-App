import React from "react";

export default class List extends React.Component {
    render() {
        return (
            <button onClick={this.props.editbtn}>Edit</button>
        )
    }
}