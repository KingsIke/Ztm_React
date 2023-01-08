import React, { Component } from "react";
import "./search-box.css"

class SearchBox extends Component {
    render(){
        return(
            <input 
          className={this.props.className} 
          type="search" 
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
          />
        )
    }
}
export default SearchBox