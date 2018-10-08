import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

//ToDo Вынести карточку в отдельный компонент
class ResponsiveList extends React.Component {
  editOnClickHandler(e){

  }

  removeOnClickHandler(e){

  }

  showResponsible(yn) {
    // console.log(this.props.itemList);
    if (yn === true) {
      return (
        <div className={"ResponsiveList"}>
          {this.props.itemList.map((item, index) => {
            return (
              <div key={"responsiveListItem" + index} className={"listItem"}>
                <div className={"listItemValue"}><span className={"titleValue"}>Value: </span><span>{item.value}</span>
                </div>
                <div className={"listItemLabel"}><span className={"titleLabel"}>Label: </span><span>{item.label}</span>
                </div>
                <div className="buttonsPanel">
                  <button className="customButton removeButton">Remove</button>
                  <button className="customButton editButton">Edit</button>
                </div>
              </div>)
          })}
        </div>

      )
    }
    else {
      return (
        <div className={"justList"}>
          <div className={"titleList"}>Сomplete list of elements</div>
          {this.props.itemList.map((item, index) => {
            return (
              <div key={"justResponsiveListItem" + index} className={"listItem"}>
                <div className={"listItemValue"}><span className={"titleValue"}>Value: </span><span>{item.value}</span>
                </div>
                <div className={"listItemLabel"}><span className={"titleLabel"}>Label: </span><span>{item.label}</span>
                </div>
                <div className="buttonsPanel">
                  <button className="customButton removeButton">Remove</button>
                  <button className="customButton editButton">Edit</button>
                </div>
              </div>)
          })}
        </div>
      )
    }
  }

  render() {
    return (
      <div className={""}>
        {this.showResponsible(this.props.isResponsible)}
      </div>
    )
  }
}

ResponsiveList.propTypes = {
  itemList: PropTypes.array.isRequired,
  isResponsible: PropTypes.bool
};

export default ResponsiveList;