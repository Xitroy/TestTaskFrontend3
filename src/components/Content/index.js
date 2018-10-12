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
      res.push({uniqId: i, label: i+(createRandomString(3)), value: createRandomString(7)})
    }
    return res;
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);
    let dbSize = 10;
    this.state = {
      dbSimulator: DbCreator.makeItems(dbSize),
      lastId : dbSize,
      sortedBy : "", // field name: "label" | "value"
      sortDirection: "", // "empty" | "descending" | "ascending"
      CRUD : {
        create : this.createOne.bind(this),
        update : this.updateOne.bind(this),
        delete : this.deleteOne.bind(this)
      }
    }
  }

  //newItem = {label: string, value: string}
  createOne(newItem){
    let newDb = Object.assign(this.state.dbSimulator);
    newItem.uniqId = this.state.lastId;
    newDb.push(newItem);
    this.setState((prevState)=>{
      return {
        lastId : prevState.lastId + 1,
        dbSimulator: newDb
      }
    });
    console.log(this.state.sortedBy.concat("Created"));
    console.log(this.state.sortedBy.concat("New item:".concat(JSON.stringify(this.state.dbSimulator[this.state.lastId-1]))));
  };

  updateOne(){
    console.log(this.state.sortedBy.concat("Updated"))

  };

  deleteOne(){
    console.log(this.state.sortedBy.concat("Deleted"))
  };

  render() {
    return (
      <div className={"contentMain"}>
        <div className="dbItems">
          <ResponsiveList itemList={this.state.dbSimulator} CRUD = {this.state.CRUD}/>
        </div>
        <div className="filteredItems">
          <FilteredList itemList={this.state.dbSimulator} CRUD = {this.state.CRUD}/>
        </div>
      </div>
    )
  }
}

export default Content;