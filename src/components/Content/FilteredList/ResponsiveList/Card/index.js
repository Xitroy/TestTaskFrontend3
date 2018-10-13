import React from "react";
import PropTypes from "prop-types";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: false
    }
  }

  saveHandler() {
    const currentId = this.props.itemData.uniqId;
    let cardFields = document.getElementsByClassName("".concat(this.props.itemData.uniqId).concat(this.props.uniqKey));

    //just believe me that order is the following
    let currentValue = cardFields[0].innerHTML;
    let currentLabel = cardFields[1].innerHTML;

    Array.prototype.forEach.call(cardFields, function(el) {
      el.contentEditable = "false"
    });

    let itemToUpdate = {uniqId: currentId, value: currentValue, label: currentLabel};

    this.props.updateElement(itemToUpdate);
    this.setState({
        isEditable: false
      }
    )
  };

  editHandler() {
    let cardFields = document.getElementsByClassName("".concat(this.props.itemData.uniqId).concat(this.props.uniqKey));

    Array.prototype.forEach.call(cardFields, function(el) {
      el.contentEditable = "true"
    });

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
            className={"cardValue ".concat(this.props.itemData.uniqId).concat(this.props.uniqKey)}>
            {this.props.itemData.value}</span>
        </div>
        <div className={"listItemLabel"}><span className={"titleLabel"}>Label: </span>
          <span
            className={"cardLabel ".concat(this.props.itemData.uniqId).concat(this.props.uniqKey)}>
            {this.props.itemData.label}</span>
        </div>
        <div className="buttonsPanel">
          <button className="customButton deleteButton"
                  onClick={this.deleteHandler.bind(this)}>Delete
          </button>
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
  uniqKey: PropTypes.string.isRequired
  // value: PropTypes.string.isRequired,
  // label: PropTypes.string.isRequired,
};

export default Card;