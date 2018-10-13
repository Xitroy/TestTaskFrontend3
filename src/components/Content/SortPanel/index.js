import React from "react";
import styles from './style.css'
import PropTypes from "prop-types";

class SortPanel extends React.Component {
  onSelectHandler(){
    let sortBy = document.getElementById("sortBySelect").value;
    let orderBy = document.getElementById("orderBySelect").value;
    this.props.sortFunction(sortBy, orderBy)
  }

  render() {
    return (
      <div>
        <span className={"sortTitle"}>Sort by: </span>
        <select name="sortBy" id="sortBySelect" defaultValue={"value"} onChange={this.onSelectHandler.bind(this)}>
          <option value="value">ByValue</option>
          <option value="label">ByLabel</option>
        </select>
        <span className={"sortTitle"}>Order: </span>
        <select name="orderBy" id="orderBySelect" defaultValue={"descending"} onChange={this.onSelectHandler.bind(this)}>
          <option value="ascending">ascending</option>
          <option value="descending">descending</option>
        </select>
      </div>

    )
  }
}

SortPanel.propTypes = {
  sortFunction: PropTypes.func,
};


export default SortPanel;