import React from "react";
import PropTypes from "prop-types";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: false
    }
  }

  saveHandler(){
    // let itemToUpdate = {uniqId: uniqId, label: label, value: value};
    // return function () {
    //   this.props.updateElement(itemToUpdate);
    // }
    const currentId = this.props.itemData.uniqId;
    const currentValue = document.getElementById("cardValue".concat(currentId));
    const currentLabel = document.getElementById("cardValue".concat(currentId));
    currentValue.contentEditable = "false";
    currentLabel.contentEditable = "false";

    let itemToUpdate = {uniqId: currentId, value: currentValue.value, label: currentLabel.value};
    this.props.updateElement(itemToUpdate);
    this.setState({
        isEditable: false
      }
    )
  };

  editHandler() {
    document.getElementById("cardValue".concat(this.props.itemData.uniqId)).contentEditable = "true";
    document.getElementById("cardLabel".concat(this.props.itemData.uniqId)).contentEditable = "true";
    this.setState({
        isEditable: true
      }
    )
  }

  deleteHandler() {
    this.props.deleteElement(this.props.itemData.uniqId);
  };

  render() {
    return (
      <div className={"listItem"}>
        <div className={"listItemValue"}><span className={"titleValue"}>Value: </span>
          <span
            className={"cardValue"}
            id={"cardValue".concat(this.props.itemData.uniqId)}>{this.props.itemData.value}</span>
        </div>
        <div className={"listItemLabel"}><span className={"titleLabel"}>Label: </span>
          <span
            className={"cardLabel"}
            id={"cardLabel".concat(this.props.itemData.uniqId)}>{this.props.itemData.label}</span>
        </div>
        <div className="buttonsPanel">
          <button className="customButton deleteButton"
                  onClick={this.deleteHandler.bind(this)}>Delete</button>
          {
            this.state.isEditable
              ? <button className="customButton saveButton"
                        onClick={this.saveHandler.bind(this)}>Save</button>
              : <button className="customButton editButton"
                        onClick={this.editHandler.bind(this)}>Edit</button>
          }
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  itemData: PropTypes.object.isRequired,
  updateElement: PropTypes.func.isRequired,
  deleteElement: PropTypes.func.isRequired,
  // value: PropTypes.string.isRequired,
  // label: PropTypes.string.isRequired,
};

export default Card;