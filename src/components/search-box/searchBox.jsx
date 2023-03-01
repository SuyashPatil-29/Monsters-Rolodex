import React, {Component} from "react";
import "./searchBox.styles.css"
class SearchBox extends Component {
    render()
    {
        return <input className={`search-box ${this.props.className}`} type={this.props.type} placeholder={this.props.placeholder} onChange={this.props.onChange}/>
    }
}

export default SearchBox;