import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import Card from "./Card";

//ToDo Вынести карточку в отдельный компонент
class ResponsiveList extends React.Component {
  editOnClickHandler(e) {

  }

  removeOnClickHandler(e) {

  }

  showResponsible(yn) {
    // console.log(this.props.itemList);
    return (
      <div className={yn ? "ResponsiveList" : "justList"}>
        {yn ? "" : <div className={"titleList"}>Сomplete list of elements</div>}
        {this.props.itemList.map((item, index) => {
          return (
            <Card keyindex={index} value={item.value} label={item.label}/>
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