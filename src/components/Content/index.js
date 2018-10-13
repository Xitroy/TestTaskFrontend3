import React from "react";
import styles from './style.css';
import FilteredList from "./FilteredList";
import ResponsiveList from "./FilteredList/ResponsiveList";
import NewItemForm from "./NewItemForm";
import SortPanel from "./SortPanel";

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
      res.push({uniqId: i, label: createRandomString(3), value: createRandomString(7)})
    }
    return res;
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);
    let dbSize = 8;
    this.state = {
      dbSimulator: DbCreator.makeItems(dbSize),
      lastId: dbSize,
      sortedBy: "", // field name: "label" | "value"
      sortDirection: "", // "empty" | "descending" | "ascending"
      CRUD: {
        create: this.createOne.bind(this),
        update: this.updateOne.bind(this),
        delete: this.deleteOne.bind(this)
      }
    }
  }

  //newItem = {label: string, value: string, uniqId: any}
  createOne(newItem) {
    let newDb = Object.assign(this.state.dbSimulator);
    newItem.uniqId = this.state.lastId;
    newDb.push(newItem);
    console.log(newItem);
    this.setState((prevState) => {
      return {
        lastId: prevState.lastId + 1,
        dbSimulator: newDb
      }
    });
    // console.log(this.state.sortedBy.concat("New item:".concat(JSON.stringify(this.state.dbSimulator[this.state.lastId-1]))));
  };

  // inside item we have uniqId which will help us to update target guy
  // itemToUpdate = {uniqId: id, label: string, value: string}
  updateOne(itemToUpdate) {
    console.log(this.state.sortedBy.concat("Updated".concat(itemToUpdate.uniqId)));

  };

  deleteOne(uniqId) {
    let newDb = Object.assign(this.state.dbSimulator);
    let indexToDelete;
    newDb.find(function (item, index) {
      indexToDelete = index;
      return item.uniqId === uniqId;
    });

    if (indexToDelete !== undefined) {
      newDb.splice(indexToDelete, 1);
    }

    this.setState({
      dbSimulator: newDb
    });
    console.log(this.state.sortedBy.concat("Deleted".concat(uniqId)));
  };

  //field = "label" | "value", direction="ascending" | "descending"
  sortBy(field, direction) {
    let newDb = Object.assign(this.state.dbSimulator);
    newDb.sort(function (a, b) {
      let compared;
      switch (field) {
        case "label":
          compared = a.label.toLowerCase() > b.label.toLowerCase() ? 1:-1;
          return direction === "ascending" ?  compared : -compared;
        case "value":
          compared = a.value.toLowerCase() > b.value.toLowerCase() ? 1:-1;
          return direction === "ascending" ?  compared : -compared;
        default:
          return "";
      }
    });
    console.log(newDb);
    this.setState({
      dbSimulator: newDb
    });
  }

  render() {
    return (
      <div className={"contentMain"}>
        <div className="dbItems">
          <NewItemForm create={this.state.CRUD.create}/>
          <SortPanel sortFunction={this.sortBy.bind(this)}/>
          <ResponsiveList itemList={this.state.dbSimulator} CRUD={this.state.CRUD}/>
        </div>
        <div className="filteredItems">
          <FilteredList itemList={this.state.dbSimulator} CRUD={this.state.CRUD}/>
        </div>
      </div>
    )
  }
}

export default Content;