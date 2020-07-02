import React from "react";
import "./Contact.css";
import { getContacts ,deleteContactName, editContactName, deleteContactId} from '../../util/contacts';



class Contact extends React.Component {
    constructor(){
        super();
        //console.log(this.props);
        this.state = {
            readOnly: true,
            disabled: true,
            id: '',
            first_name: '',
            last_name:'',
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
        }
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.hadleCancelClick = this.hadleCancelClick.bind(this);

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleStreetChange = this.handleStreetChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this); 
        this.handleMonthChange = this.handleMonthChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    //React Method
    componentWillMount (){
        this.setState({
            id: this.props.contact.id,
            first_name: this.props.contact.first_name,
            last_name: this.props.contact.last_name,
            email: this.props.contact.email,
            phone_number: this.props.contact.phone_number,
            street : this.props.contact.street,
            city : this.props.contact.city,
            state : this.props.contact.state,
            zip_code : this.props.contact.zip_code,
            dob_dd: this.props.contact.dob_dd,
            dob_mm: this.props.contact.dob_mm,
            dob_yy: this.props.contact.dob_yy,
            gender: this.props.contact.gender,
            country: this.props.contact.country,
        });
    }
    // remove and edit
    removeContact(data){
        deleteContactId(data).then(()=>{
            this.props.reload();
        })
    }
    handleRemoveClick() {
        if (window.confirm('Are you sure you want to delete the contact?')){
            this.removeContact(this.state.id)
        }
        this.props.reload();
    }

    editContact(id, first_name, last_name, email, phone_number, street, city, state, zip_code, dob_dd, dob_mm, dob_yy, gender, country) {
        // console.log(id, full_name, email, phone_number, address, birthday);
        // editContactName(1, 'a', 'a', 'a', 'a', 'a');
        editContactName(id, first_name, last_name, email, phone_number, street, city, state, zip_code, dob_dd, dob_mm, dob_yy, gender, country).then(()=>{
            this.props.reload();
        })
    }

    handleEditClick(){
        this.setState({
            readOnly: !this.state.readOnly,
            disabled: !this.state.disabled,
        });
    }
    handleSaveClick(){
        this.editContact(this.state.id, this.state.first_name, this.state.last_name, this.state.email, this.state.phone_number, this.state.street, this.state.city, this.state.state, this.state.zip_code, this.state.dob_dd, this.state.dob_mm, this.state.dob_yy, this.state.gender, this.state.country);
        this.setState({
            readOnly: !this.state.readOnly,
            disabled: !this.state.disabled,
        });
    }
    hadleCancelClick(){
        this.setState({
            readOnly: !this.state.readOnly,
            disabled: !this.state.disabled,
            id: this.props.contact.id,
            first_name: this.props.contact.first_name,
            last_name: this.props.contact.last_name,
            email: this.props.contact.email,
            phone_number: this.props.contact.phone_number,
            street : this.props.contact.street,
            city : this.props.contact.city,
            state : this.props.contact.state,
            zip_code : this.props.contact.zip_code,
            dob_dd: this.props.contact.dob_dd,
            dob_mm: this.props.contact.dob_mm,
            dob_yy: this.props.contact.dob_yy,
            gender: this.props.contact.gender,
            country: this.props.contact.country,
        })
        this.props.reload();
    }

    // handle input change methods
    handleFirstNameChange(e){
        this.setState({
            first_name: e.target.value,
        });
    }
    handleLastNameChange(e){
        this.setState({
            last_name: e.target.value,
        })
    }
    handleEmailChange(e){
        this.setState({
            email: e.target.value
        });
    }
    handlePhoneChange(e){
        this.setState({
            phone_number: e.target.value,
        });
    }
    handleStreetChange(e){
        this.setState({
            street: e.target.value,
        });
    }
    handleCityChange(e){
        this.setState({
            city: e.target.value,
        });
    }
    handleStateChange(e){
        this.setState({
            state: e.target.value,
        });
    }
    handleZipCodeChange(e){
        this.setState({
            zip_code: e.target.value,
        });
    }
    handleDayChange(e){
        this.setState({
            dob_dd: e.target.value,
        });
    }
    handleMonthChange(e){
        this.setState({
            dob_mm: e.target.value,
        });
    }
    handleYearChange(e){
        this.setState({
            dob_yy: e.target.value,
        });
    }
    handleGenderChange(e){
        this.setState({
            gender: e.target.value,
        })
    }
    handleCountryChange(e){
        this.setState({
            country: e.target.value,
        })
    }
    // remove multiple selected contacts
    handleCheckbox(e){
        if (e.target.checked){
            this.props.addDeleteId(this.state.id)
        } 
        else {
            this.props.removeDeleteId(this.state.id)
        }
    }



    render(){
        // bottons
        let readOnly=this.state.readOnly;
        let disabled=this.state.disabled;
        let buttons;
        if (readOnly) {
            buttons = (
                <div>
                    <button className = "btn btn-light" onClick={this.handleRemoveClick}>Remove</button>
                    <button className = "btn btn-light" onClick={this.handleEditClick}>Edit</button>
                </div>
            );
        } else {
            buttons = (
                <div>
                    <button className = "btn btn-light" onClick={this.handleSaveClick}>Save</button>
                    <button className = "btn btn-light" onClick={this.hadleCancelClick}>Cancel</button>
                </div>
            );
        }
        // birthday dropdown
        let dropdownDays=['dd'];
        for (let d = 1 ; d <= 31; d++){
            dropdownDays.push(d)
        }
        const dayList = dropdownDays.map((d)=>{return <option key={d} value={d}>{d}</option>})
        
        let dropdownMonths=['mm'];
        for (let m = 1 ; m <= 12; m++){
            dropdownMonths.push(m)
        }
        const monthList = dropdownMonths.map((m)=>{return <option key={m} value={m}>{m}</option>})

        let thisYear = (new Date()).getFullYear();
        let dropdownYears = ['yy'];
        for (let y = 0 ; y <= 100; y++){
            dropdownYears.push(thisYear-y)
        }
        const yearList = dropdownYears.map((y)=>{return <option key={y} value={y}>{y}</option>})

        return ( 
               <tr className='text-center'>
                    <td className='checkbox'><input type='checkbox' id={this.state.id} onChange={this.handleCheckbox} size='3'></input></td>
                    <td className='idList'><input className="readOnly text-center idList" type="text" value={this.state.id} readOnly={readOnly}></input></td>
                    <td className='fullNameList'>
                        <div className='fullName-container'>
                                <input id='cap' className={this.state.readOnly ? 'readOnly text-center flexbox-firstName' : ''} type='text' value={this.state.first_name} readOnly={readOnly} onChange={this.handleFirstNameChange} ></input> 
                                <input id='cap'className={this.state.readOnly? 'readOnly text-center flexbox-lastName' : ''} type='text' value={this.state.last_name} readOnly={readOnly} onChange={this.handleLastNameChange}></input>
                        </div>  
                    </td>
                    <td className='emailPhoneList'>
                        <div className='email-phone-container'>
                                <input id='lowercase' className={this.state.readOnly ? 'readOnly text-center flexbox-email' : ''} type='text' value={this.state.email} readOnly={readOnly} onChange={this.handleEmailChange} ></input>
                                <input className={this.state.readOnly ? 'readOnly text-center flexbox-number' : ''} type='text' value={this.state.phone_number} readOnly={readOnly} onChange={this.handlePhoneChange} ></input>
                        </div>
                    </td>
                    <td className='addressList'>
                        <div className='address-container'>
                            <div className='flexbox-address1'>
                                <input id='cap' placeholder='street' className={this.state.readOnly ? 'readOnly text-center flexbox-street' : ''} type='text' value={this.state.street} readOnly={readOnly} onChange={this.handleStreetChange} ></input><br/>
                            </div>
                            <div className='flexbox-address2'>
                                <input id='cap' placeholder='city' className={this.state.readOnly ? 'readOnly text-center flexbox-city' : ''} type='text' value={this.state.city} readOnly={readOnly} onChange={this.handleCityChange} size='15' ></input>&nbsp;
                                <input id='uppercase' className ='state' placeholder='state' className={this.state.readOnly ? 'readOnly text-center flexbox-state' : ''} type='text' value={this.state.state} readOnly={readOnly} onChange={this.handleStateChange} size='3'></input>&nbsp;
                                <input placeholder='zip code' className={this.state.readOnly ? 'readOnly text-center flexbox-zip' : ''} type='text' value={this.state.zip_code} readOnly={readOnly} onChange={this.handleZipCodeChange} size='6'></input>
                            </div>
                        </div>
                    </td>
                    <td className='dobList'>
                        <div className='dob-gender-country-container'>
                            <div className='flexbox-dob'>
                                    <select name='dob_dd' className={this.state.disabled ? 'disabled flexbox-dd' : '' } type='text' value={this.state.dob_dd} disabled={disabled} onChange={this.handleDayChange}> 
                                        {dayList}</select>&nbsp;
                                    <select name='dob_mm' className={this.state.disabled ? 'disabled flexbox-mm' : '' } type='text' value={this.state.dob_mm} disabled={disabled} onChange={this.handleMonthChange}>
                                        {monthList}</select>&nbsp;
                                    <select name='dob_yy' className={this.state.disabled ? 'disabled flexbox-yy' : '' } type='text' value={this.state.dob_yy} disabled={disabled} onChange={this.handleYearChange}>
                                        {yearList}</select>
                            </div>
                            <div className='flexbox-gender-country'>
                                    <select name="gender" className={this.state.disabled ? 'disabled flexbox-gender' : ''} type='text' value={this.state.gender} disabled={disabled} onChange={this.handleGenderChange}>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    <select name='countryList' className={this.state.disabled ? 'disabled flexbox-country' : ''} type='text' value={this.state.country} disabled={disabled} onChange={this.handleCountryChange}>
                                        <option value='taiwan'>Taiwan</option>
                                        <option value='chile'>Chile</option>
                                    </select>
                            </div>
                        </div>
                    </td>
                    <td>
                        {buttons}
                    </td>
               </tr>
        );
    }
}

export default Contact;