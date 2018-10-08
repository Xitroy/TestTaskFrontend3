import React from "react";
import ResponsiveList from "./ResponsiveList/index";
import SearchInput from "./SearchInput/index";
import styles from './style.css';
import PropTypes from "prop-types";

class FilteredList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: this.props.itemList,
      searchBy: {
        label: "",
        value: ""
      },
    }
  }

  // item = {label : "string", value = "string"}
  // searchBy = {label : "", value : ""}
  //TODO Обработать ошибки связанные с невозможными индексами
  filterItemsByProperty(searchBy) {
    return this.state.itemList.filter((item) => {
      let res = true;
      for (let key in searchBy) {
        res = res && item[key].toString().toLowerCase().includes(searchBy[key].toString().toLowerCase());
      }
      return res;
    });
  }

  // current possible target ids = [value, label]
  searchOnchangeHandler(e) {
    let newSearchBy = Object.assign(this.state.searchBy);
    newSearchBy[e.target.id] = e.target.value;
    console.log(newSearchBy);
    this.setState({
      searchBy: newSearchBy
    })
  }

  render() {
    let searchBy = Object.assign(this.state.searchBy);
    return (
      <div className={"FilteredList"} >
        <div className={"searchPanel"}>
          <SearchInput searchBy="value" onChangeHandler={this.searchOnchangeHandler.bind(this)}/>
          <SearchInput searchBy="label" onChangeHandler={this.searchOnchangeHandler.bind(this)}/>
        </div>
        <ResponsiveList itemList={this.filterItemsByProperty(searchBy)} isResponsible={true}/>
      </div>
    )
  }
}

FilteredList.propTypes = {
  itemList: PropTypes.array.isRequired,
};

export default FilteredList;