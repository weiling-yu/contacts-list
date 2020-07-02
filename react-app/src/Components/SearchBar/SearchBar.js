import React from "react";
import "./SearchBar.css";

export class SearchBar extends React.Component {
    constructor(){
        super()
        this.state = {
            id:'',
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleIdChange = this.handleIdChange.bind(this);
    }
    handleSearch(e){
        this.props.search(this.state.id);
    }
    handleIdChange(e){
        this.setState({
            id: e.target.value,
        })
    }

    // componentDidMount() {
    //     this.handleSearch();
    // }

    render(){
        return(
            <div className="SearchBar">
                <div className="SearchBar-fields">
                    <input className='search-input' placeholder="Search Contatct By ID" onChange={this.handleIdChange} value={this.state.id} /> &nbsp;
                    <a className="btn btn-info searchBtn" onClick={this.handleSearch}>Search</a>
                </div>
                <div className="SearchBar-submit">
                    
                </div>
            </div>
        )
    }
};
export default SearchBar;