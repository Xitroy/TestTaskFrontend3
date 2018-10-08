import React from "react";
import styles from './style.css';
import FilteredList from "./FilteredList";
import ResponsiveList from "./FilteredList/ResponsiveList";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function createRandomString(len) {
  let res = "";
  for (let i = 0; i < len; i++) {
    res = res.concat(String.fromCharCode(getRandomInt('А'.charCodeAt(0), 'я'.charCodeAt(0))).toString());
  }
  return res;
}

class DbCreator {
  static makeItems(N) {
    let res = [];
    for (let i = 0; i < N; i++) {
      res.push({label: i, value: createRandomString(7)})
    }
    return res;
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dbSimulator: DbCreator.makeItems(10)
    }
  }

  render() {
    return (
      <div className={"contentMain"}>
        <div className="dbItems">
          <ResponsiveList itemList={this.state.dbSimulator}/>
        </div>
        <div className="filteredItems">
          <FilteredList itemList={this.state.dbSimulator}/>
        </div>
      </div>
    )
  }
}

export default Content;