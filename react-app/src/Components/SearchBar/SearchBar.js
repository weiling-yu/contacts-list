import React from "react";
import "./SearchBar.css";

export class SearchBar extends React.Component {
    constructor(){
        super()
        this.state = {
            // id:'',
            // first_name:'',
            // last_name:'',
            // phone_number:'',
            // email:'',
            // gender:'',
            // counry:'',
            field: '',
            input: '',
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
    }
    handleSearch(e){
        this.props.search(this.state.field, this.state.input);
    }
    handleInputChange(e){
        this.setState({
            input: e.target.value,
        })
    }

    handleFieldChange(e){
        this.setState({
            field: e.target.value,
        })
    }

    render(){
        return(
            <div className="SearchBar">
                <div className="SearchBar-fields">
                    <input className='search-input' placeholder="Search Contatct" onChange={this.handleInputChange} value={this.state.id} /> &nbsp;
                    <select className='searchBy'onChange={this.handleFieldChange}>
                        <option>Search by</option>
                        <option value='id'>ID</option>
                        <option value='first_name'>First Name</option>
                        <option value='last_name'>Last Name</option>
                        <option value='phone_number'>Phone Number</option>
                        <option value='email'>Email</option>
                        <option value='city'>City</option>
                        <option value='gender'>Gender</option>
                        <option value='country'>Country</option>
                    </select>
                    <a className="btn btn-info searchBtn" onClick={this.handleSearch}>Search</a>
                </div>
                <div className="SearchBar-submit">
                    
                </div>
            </div>
        )
    }
};
export default SearchBar;