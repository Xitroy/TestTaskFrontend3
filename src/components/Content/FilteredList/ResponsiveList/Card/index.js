import React from "react";
import PropTypes from "prop-types";

class Card extends React.Component {
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
          <button className="customButton removeButton">Remove</button>
          <button className="customButton editButton">Edit</button>
          <button className="customButton saveButton" style={{display:"none"}}>Save</button>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  itemData: PropTypes.object.isRequired
  // value: PropTypes.string.isRequired,
  // label: PropTypes.string.isRequired,
  // onEditHandler:PropTypes.func.isRequired,
  // onDeleteHandler:PropTypes.func.isRequired,
};

export default Card;