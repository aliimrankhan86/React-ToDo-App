import React from "react";
import UndoButton from "./UndoButton";


export default class List extends React.Component {
    render() {
        if (this.props.removedlist.length > 0) {
            return (
                <div>
                    <h2>Deleted List</h2>
                    <ul>
                        {
                            this.props.removedlist.map(item => {
                                return (
                                    <li key={item}>
                                        {item}
                                        <UndoButton undo={this.props.undo} />
                                    </li>

                                )
                            })
                        }
                    </ul>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h2>Deleted List</h2>
                    <p>This List is empty</p>
                </div>
            )
        }
    }
}