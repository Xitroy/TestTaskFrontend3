import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';


class SearchInput extends React.Component {
  constructor(){
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <input autoComplete={"off"} className={"searchInput"} id = {this.props.searchBy} onChange={this.props.onChangeHandler} placeholder={this.props.searchBy}/>
      </div>
    )
  }
}

SearchInput.propTypes = {
  onChangeHandler : PropTypes.func.isRequired,
  searchBy : PropTypes.string.isRequired
};

export default SearchInput;