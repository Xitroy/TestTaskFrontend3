import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import Card from "./Card";

class ResponsiveList extends React.Component {
  showResponsible(yn) {
    // console.log(this.props.itemList);
    return (
      <div className={yn ? "ResponsiveList" : "justList"}>
        {yn ? "" : <div className={"titleList"}>Сomplete list of elements</div>}
        {this.props.itemList.map((item, index) => {
          return (
            <Card key={"responsiveListItem" + index} itemData = {item}
                  // value={item.value} label={item.label.toString()}
            />
          )
        })}
      </div>
    )
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