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
            street : '',
            city: '',
            state: '',
            zip_code: '',
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
        this.handleStreetChange = this.handleStreetChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleMonthChange = this.handleMonthChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
    }

    insertData (full_name, email, phone_number, street, city, state, zip_code, dob_dd, dob_mm, dob_yy, gender, country){
        insertContact(full_name, email, phone_number, street, city, state, zip_code, dob_dd, dob_mm, dob_yy, gender, country).then(()=>{
            this.props.reload();
        });
        this.setState({
            id: '',
            full_name: '',
            email: '',
            phone_number: '',
            street : '',
            city: '',
            state: '',
            zip_code: '',
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
            this.state.street, 
            this.state.city,
            this.state.state,
            this.state.zip_code,
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
    handleStreetChange(e){
        this.setState({
           street : e.target.value
        });
    };
    handleCityChange(e){
        this.setState({
           city : e.target.value
        });
    };
    handleStateChange(e){
        this.setState({
           state : e.target.value
        });
    };
    handleZipCodeChange(e){
        this.setState({
           zip_code : e.target.value
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
        let dropdownDay=['dd'];
        for (let d = 1; d <= 31; d++){
            dropdownDay.push(d)
        }
        const dayList = dropdownDay.map((d)=>{
            return <option key={d} value={d}>{d}</option>
        })
        let dropdownMonth=['mm'];
        for (let m = 1; m <= 12; m++){
            dropdownMonth.push(m)
        }
        const monthList = dropdownMonth.map((m)=>{
            return <option key={m} value={m}>{m}</option>
        })

        let dropdownYear=['yy'];
        let thisYear = (new Date()).getFullYear();
        for (let y = 0; y <= 100; y++){
            dropdownYear.push(thisYear-y)
        }
        const yearList = dropdownYear.map((y)=>{
            return <option key={y} value={y}>{y}</option>
        })

        return(
            <div className="App">
                <h1>Create New Contact</h1>
                    <table className='table table-striped table-contacts'>
                        <thead>
                        <tr className='thead-dark'>
                            <th className="text-center fieldId">ID</th>
                            <th className='text-center fullName'>Full Name</th>
                            <th className='text-center email'>Email</th>
                            <th className='text-center phone_number'>Phone</th>
                            <th className='text-center address'>Address</th>
                            <th className='text-center birthDay'>Birth Day</th>
                            <th className="text-center gender">Gender</th>
                            <th className="text-center county">Country</th>
                            <th className='text-center action'>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className='thead-dark'>
                            <td className='text-center input-id'><input type='text' value={this.state.id} readOnly></input></td>
                            <td className='text-center input-name'><input type='text' value={this.state.full_name} onChange={this.handleNameChange}></input></td>
                            <td className='text-center input-email'><input type='text' value={this.state.email} onChange={this.handleEmailChange}></input ></td>
                            <td className='text-center input-number'><input type='text' value={this.state.phone_number} onChange={this.handlePhoneChange}></input></td>

                            <td className='text-center address'>
                                <input type='text' className='input-street' value={this.state.street} onChange={this.handleStreetChange} placeholder='street' size='25'></input >&nbsp;
                                <input type='text' className='input-city' value={this.state.city} onChange={this.handleCityChange} placeholder='city' size='15'></input >&nbsp;
                                <input type='text' className='input-state' value={this.state.state} onChange={this.handleStateChange} placeholder='state' size='3'></input >&nbsp;
                                <input type='text' className='input-zip-code' value={this.state.zip_code} onChange={this.handleZipCodeChange} placeholder='zip code' size='6'></input >
                            </td>

                            {/* <td className='text-center'><input type='text' id='birthday' value={this.state.birthday} onChange={this.handleBirthdayChange}></input ></td> */}
                            
                            {/* <td className='text-center'>
                                <input id='dob_dd' type='text' value={this.state.dob_dd}  onChange={this.handleDayChange} maxLength='2'></input>
                                <input id='dob_mm' type='text' value={this.state.dob_mm} onChange={this.handleMonthChange} maxLength='2'></input>
                                <input id='dob_yy' type='text' value={this.state.dob_yy} onChange={this.handleYearChange} maxLength='4'></input>
                            </td> */}

                            <td className='text-center'>
                                <select name='dob_dd' value={this.state.dob_dd} onChange={this.handleDayChange}>
                                    {dayList}
                                </select>&nbsp;
                                <select name='dob_mm' value={this.state.dob_mm} onChange={this.handleMonthChange}>
                                    {monthList}
                                </select>&nbsp;
                                <select name='dob_yy' value={this.state.dob_yy} onChange={this.handleYearChange}>
                                    {yearList}
                                </select>
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