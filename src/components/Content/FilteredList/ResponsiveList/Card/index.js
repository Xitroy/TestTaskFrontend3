import React from "react";
import PropTypes from "prop-types";

class Card extends React.Component {
  createHandler = function(label, value){
    let itemToCreate = {label: label, value:value};
    return function () {
      this.props.CRUD.create(itemToCreate);
    }
  };

  editHandler = this.props.CRUD.update;
  deleteHandler = this.props.CRUD.delete;

  render() {
    return (
      <div className={"listItem"}>
        <div className={"listItemValue"}><span className={"titleValue"}>Value: </span><span
          className={"cardValue"}>{this.props.itemData.value}</span>
        </div>
        <div className={"listItemLabel"}><span className={"titleLabel"}>Label: </span><span
          className={"cardLabel"}>{this.props.itemData.label}</span>
        </div>
        <div className="buttonsPanel">
          <button className="customButton deleteButton">Delete</button>
          <button className="customButton editButton"
                  onClick={this.createHandler(this.props.itemData.label, this.props.itemData.value).bind(this)}>Edit</button>
          <button className="customButton saveButton" style={{display:"none"}}>Save</button>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  itemData: PropTypes.object.isRequired,
  CRUD : PropTypes.object.isRequired
  // value: PropTypes.string.isRequired,
  // label: PropTypes.string.isRequired,
};

export default Card;