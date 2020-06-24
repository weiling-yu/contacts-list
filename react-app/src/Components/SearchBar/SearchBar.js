import React from "react";
import "./SearchBar.css";

export class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "Vicky",
            phone: "4157568441",
            age: '36'
        }


        this.handleLocationChange=this.handleLocationChange.bind(this)
        this.handleTermChange=this.handleTermChange.bind(this)
        this.handleSearch=this.handleSearch.bind(this)

    }
    getSortByClass(sortByOption){
        if (this.state.sortBy === sortByOption){
            return "active";
        } 
        return "";
    }
    handleSortByChange(sortByOption){
        this.setState({sortBy: sortByOption})
    }
    handleTermChange(event){
        this.setState({
            term: event.target.value
        })
    }
    handleLocationChange(event){
        this.setState({
            location: event.target.value
        })
    }
    handleSearch(event){
        console.log(this.props);
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        if (event) {
            event.preventDefault();
        }
    }
    renderSortByOptions(){
        let keys = Object.keys(this.sortByOptions);

        return keys.map(key =>{
            let value = this.sortByOptions[key];
            return (
                <li className={this.getSortByClass(value)} 
                    onClick={this.handleSortByChange.bind(this, value)} 
                    key={value}>{key}
                </li>
            );
        });
    }

    componentDidMount() {
        this.handleSearch();
    }

    render(){
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
{/*
                        <li key="best_match">Best Match</li>
                        <li key="rating">Highest Rated</li>
                        <li key="review_count">Most Reviewed</li>
*/}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange} value={this.state.term} />
                    <input placeholder="Where?" onChange={this.handleLocationChange} value={this.state.location}/>
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        )
    }
}