import React from "react";
import ReactDOM from "react-dom";
import Input from "./Input";
import List from "./List";
import DeletedList from "./DeletedList";

import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      addbtn: "Add",
      input: "",
      removedlist: []
    };
  }

  onChangeInput = e => {
    this.setState({
      input: e.target.value
    });
  };

  addToList = e => {
    if (this.state.input.length == 0) {
      console.log(this.state.input.length)
      const data = [...this.state.data];
      const check = data.filter(e => e.length > 0)
      console.log('check is ', check)
      alert('Please Enter a Value')
      this.setState({
        input: "",
        data: check
      })
    }
    else if (this.state.addbtn === "Add") {
      const data = [...this.state.data];
      data.push(this.state.input);
      this.setState({
        data: data,
        input: ""
      });
    }
    else {
      const data = [...this.state.data];
      const val = this.state.value;
      const inputEdit = this.state.input;
      const loc = data.indexOf(val);
      data[loc] = this.state.input;
      this.setState({
        data: data,
        addbtn: "Add",
        input: ""
      })
    }
  };

  removeFromList = (e) => {
    const data = [...this.state.data];
    const removedlist = [...this.state.removedlist]
    const currentElm = e.target.parentElement.childNodes[0].nodeValue;
    data.splice(data.indexOf(currentElm), 1);
    removedlist.push(currentElm)
    this.setState({
      data: data,
      removedlist: removedlist
    })
  };

  undoItem = (e) => {
    const data = [...this.state.data];
    const removedlist = [...this.state.removedlist];
    const currentElm = e.target.parentElement.childNodes[0].nodeValue;
    removedlist.pop(currentElm);
    data.push(currentElm);
    this.setState({
      data: data,
      removedlist: removedlist
    })
  };

  editItem = (e) => {
    const currentElm = e.target.parentElement.childNodes[0].nodeValue;
    this.setState({
      input: currentElm,
      value: currentElm,
      addbtn: 'Update'
    })
  };

  render() {
    return (
      <div className="App">
        <div className="left-col">
          <h1>To Do List</h1>
          <p>Add items</p>
          <Input
            addbtn={this.state.addbtn}
            addToList={this.addToList}
            onChangeInput={this.onChangeInput}
            text={this.state.input}
          />
          <List list={this.state.data} deletebtn={this.removeFromList} editbtn={this.editItem} />
        </div>
        <div className="right-col">
          <DeletedList removedlist={this.state.removedlist} undo={this.undoItem} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
