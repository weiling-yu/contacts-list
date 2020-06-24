import React from 'react';
import './NewContact.css';
import {insertContact} from '../../util/contacts';

class NewContact extends React.Component {
    constructor(){
        super()
        this.state = {
            id: '',
            full_name: '',
            email: '',
            phone_number: '',
            address : '',
            dob_dd: '',
            dob_mm: '',
            dob_yy: '',
            gender: '',
            country: '',
        };
        this.handleInsertClick = this.handleInsertClick.bind(this);

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleMonthChange = this.handleMonthChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
    }

    insertData (full_name, email, phone_number, address, dob_dd, dob_mm, dob_yy, gender, country){
        insertContact(full_name, email, phone_number, address, dob_dd, dob_mm, dob_yy, gender, country).then(()=>{
            this.props.reload();
        });
        this.setState({
            id: '',
            full_name: '',
            email: '',
            phone_number: '',
            address : '',
            dob_dd: '', 
            dob_mm: '',
            dob_yy: '',
            gender: '',
            country: '',
        })
    }

    handleInsertClick(){
        this.insertData(
            this.state.full_name, 
            this.state.email, 
            this.state.phone_number, 
            this.state.address, 
            this.state.dob_dd, 
            this.state.dob_mm, 
            this.state.dob_yy, 
            this.state.gender, 
            this.state.country);
    }

    handleNameChange(e){
        this.setState({
            full_name: e.target.value,
        });
    }
    handleEmailChange(e){
        this.setState({
            email: e.target.value,
        });
    }
    handlePhoneChange(e){
        this.setState({
            phone_number: e.target.value,
        });
    }
    handleAddressChange(e){
        this.setState({
            address: e.target.value
        });
    };
    handleDayChange(e){
        this.setState({
            dob_dd: e.target.value
        });
    };
    handleMonthChange(e){
        this.setState({
            dob_mm: e.target.value
        });
    };
    handleYearChange(e){
        this.setState({
            dob_yy: e.target.value
        });
    };
    handleGenderChange(e){
        // console.log(e);
        console.log(e.target.value);
        this.setState({
            // gender: e.target.'male'
            gender: e.target.value
        });
    }
    handleCountryChange(e){
        console.log(e.target.value);
        this.setState({
            country: e.target.value
        })
    }


    render(){
        
        return(
            <div className="App">
                <h1>Create New Contact</h1>
                    <table className='table table-striped table-contacts'>
                        <thead>
                        <tr className='thead-dark'>
                            <th className="text-center" id="id">ID</th>
                            <th className='text-center' id='fullName'>Full Name</th>
                            <th className='text-center' id='email'>Email</th>
                            <th className='text-center' id='phone_number'>Phone</th>
                            <th className='text-center' id='address'>Address</th>
                            <th className='text-center' id='birthDay'>Birth Day</th>
                            <th className="text-center" id="gender">Gender</th>
                            <th className="text-center" id="county">Country</th>
                            <th className='text-center' id='action'>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className='thead-dark'>
                            <td className='text-center'><input type='text' id='id' value={this.state.id} readOnly></input></td>
                            <td className='text-center'><input type='text' id='name' value={this.state.full_name} onChange={this.handleNameChange}></input></td>
                            <td className='text-center'><input type='text' id='email' value={this.state.email} onChange={this.handleEmailChange}></input ></td>
                            <td className='text-center'><input type='text' id='number' value={this.state.phone_number} onChange={this.handlePhoneChange}></input></td>
                            <td className='text-center'><input type='text' id='address' value={this.state.address} onChange={this.handleAddressChange}></input ></td>
                            {/* <td className='text-center'><input type='text' id='birthday' value={this.state.birthday} onChange={this.handleBirthdayChange}></input ></td> */}
                            
                            <td className='text-center'>
                                <input id='dob_dd' type='text' value={this.state.dob_dd}  onChange={this.handleDayChange} maxLength='2'></input>
                                <input id='dob_mm' type='text' value={this.state.dob_mm} onChange={this.handleMonthChange} maxLength='2'></input>
                                <input id='dob_yy' type='text' value={this.state.dob_yy} onChange={this.handleYearChange} maxLength='4'></input>
                            </td>

                            <td className='text-center'>
                                <select name='gender' value={this.state.gender} onChange={this.handleGenderChange}>
                                    <option value=''></option>
                                    <option value='male'>male</option>
                                    <option value='female'>female</option>
                                </select></td>
                            <td className='text-center'>
                                <select name='country' value={this.state.country} onChange={this.handleCountryChange}>
                                    <option value=''></option>
                                    <option value='taiwan'>Taiwan</option>
                                    <option value='chile'>Chile</option>
                                </select>
                            </td>
                            <td>
                                <button className = "btn btn-light" onClick={this.handleInsertClick}>Add</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
            </div>
        )
    }
}

export default NewContact;