import React from "react";
import PropTypes from "prop-types";
import styles from './style.css'

class NewItemForm extends React.Component {
  onClickHandler(){
    let itemToCreate = {
      value : document.getElementById("newValue").value,
      label : document.getElementById("newLabel").value,
    };
    this.props.create(itemToCreate);
  }
  render() {
    return (
      <div>
        <input id={"newLabel"} placeholder={"Label"} className={"addInput"}/>
        <input id={"newValue"} placeholder={"Value"} className={"addInput"}/>
        <button onClick={this.onClickHandler.bind(this)} className={"addButton"}> &#8592; Add new one</button>
      </div>

    )
  }
}

NewItemForm.propTypes = {
  create: PropTypes.func,
};

export default NewItemForm;