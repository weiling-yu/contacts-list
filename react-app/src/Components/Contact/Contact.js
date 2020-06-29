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
        }
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.hadleCancelClick = this.hadleCancelClick.bind(this);

        this.handleNameChange = this.handleNameChange.bind(this);
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
            full_name: this.props.contact.full_name,
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

    editContact(id, full_name, email, phone_number, street, city, state, zip_code, dob_dd, dob_mm, dob_yy, gender, country) {
        // console.log(id, full_name, email, phone_number, address, birthday);
        // editContactName(1, 'a', 'a', 'a', 'a', 'a');
        editContactName(id, full_name, email, phone_number, street, city, state, zip_code, dob_dd, dob_mm, dob_yy, gender, country).then(()=>{
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
        this.editContact(this.state.id, this.state.full_name, this.state.email, this.state.phone_number, this.state.street, this.state.city, this.state.state, this.state.zip_code, this.state.dob_dd, this.state.dob_mm, this.state.dob_yy, this.state.gender, this.state.country);
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
            full_name: this.props.contact.full_name,
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
    handleNameChange(e){
        this.setState({
            full_name: e.target.value,
        });
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
        // render not JS
        // return JSX
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
                    <td className='checkbox'><input type='checkbox' id={this.state.id} onChange={this.handleCheckbox}></input></td>
                    <td className='idList'><input className="readOnly text-center idList" type="text" value={this.state.id} readOnly={readOnly}></input></td>
                    <td className='fullNameList'><input className={this.state.readOnly ? 'readOnly text-center ' : ''} type='text' value={this.state.full_name} readOnly={readOnly} onChange={this.handleNameChange}></input></td>
                    <td className='emailList'><input className={this.state.readOnly ? 'readOnly text-center ' : ''} type='text' value={this.state.email} readOnly={readOnly} onChange={this.handleEmailChange}></input></td>
                    <td className='numberList'><input className={this.state.readOnly ? 'readOnly text-center ' : ''} type='text' value={this.state.phone_number} readOnly={readOnly} onChange={this.handlePhoneChange}></input></td>
                    <td className='addressList'>
                        <input placeholder='street' className={this.state.readOnly ? 'readOnly text-center' : ''} type='text' value={this.state.street} readOnly={readOnly} onChange={this.handleStreetChange} size='25'></input><br/>
                        <input placeholder='city' className={this.state.readOnly ? 'readOnly text-center' : ''} type='text' value={this.state.city} readOnly={readOnly} onChange={this.handleCityChange} size='15'></input>&nbsp;
                        <input className ='state' placeholder='state' className={this.state.readOnly ? 'readOnly text-center' : ''} type='text' value={this.state.state} readOnly={readOnly} onChange={this.handleStateChange} size='3'></input>&nbsp;
                        <input placeholder='zip code' className={this.state.readOnly ? 'readOnly text-center' : ''} type='text' value={this.state.zip_code} readOnly={readOnly} onChange={this.handleZipCodeChange} size='6'></input>
                    </td>
                
                    <td className="birthday">
                        {/* use input
                        <input id='dob_dd' className={this.state.readOnly ? 'readOnly text-center' : ''} type='text' value={this.state.dob_dd} readOnly={readOnly} onChange={this.handleDayChange} maxLength='2'></input>
                        <input id='dob_mm' className={this.state.readOnly ? 'readOnly text-center' : ''} type='text' value={this.state.dob_mm} readOnly={readOnly} onChange={this.handleMonthChange} maxLength='2'></input>
                        <input id='dob_yy' className={this.state.readOnly ? 'readOnly text-center' : ''} type='text' value={this.state.dob_yy} readOnly={readOnly} onChange={this.handleYearChange} maxLength='4'></input> */}
                        <select name='dob_dd' className={this.state.disabled ? 'disabled' : '' } type='text' value={this.state.dob_dd} disabled={disabled} onChange={this.handleDayChange}> 
                            {dayList}</select>&nbsp;
                        <select name='dob_mm' className={this.state.disabled ? 'disabled' : '' } type='text' value={this.state.dob_mm} disabled={disabled} onChange={this.handleMonthChange}>
                            {monthList}</select>&nbsp;
                        <select name='dob_yy' className={this.state.disabled ? 'disabled' : '' } type='text' value={this.state.dob_yy} disabled={disabled} onChange={this.handleYearChange}>
                            {yearList}</select>
                    </td>
                    
                    <td className="gender">
                        <select name="gender" className={this.state.disabled ? 'disabled' : ''} type='text' value={this.state.gender} disabled={disabled} onChange={this.handleGenderChange}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </td>
                    <td>
                        <select name='country' className={this.state.disabled ? 'disabled' : ''} type='text' value={this.state.country} disabled={disabled} onChange={this.handleCountryChange}>
                            <option value='taiwan'>Taiwan</option>
                            <option value='chile'>Chile</option>
                        </select>
                    </td>
                    <td>
                        {buttons}
                    </td>
               </tr>
        );
    }
}

export default Contact;