function getContacts () {
    return fetch('http://localhost:4001/contacts'
    ).then(response =>{
        return response.json();
    }).then(jsonResponse =>{
        return jsonResponse;
    });
};
function deleteContactName (fullname){
    let url = `http://localhost:4001/contacts/delete/${fullname}`;
    return fetch(url,{}
    ).then(response => {
        return response.json().then(jsonResponse => {
            return jsonResponse;
        });
    });
}

function deleteContactId (id){
    let url = `http://localhost:4001/contacts/deleteById/${id}`;
    return fetch(url,{}
    ).then(response => {
        return response.json().then(jsonResponse => {
            return jsonResponse;
        });
    });
}

function deleteAllContatcs () {
    let url = 'http://localhost:4001/contacts/delete_all';
    return fetch(url,{}
    ).then(response => {
        return response.json();
    }).then(jsonResponse =>{
        return jsonResponse;
    })
}

function insertContact (first_name, last_name, email, phone_number, street, city, state, zip_code, dob_dd, dob_mm, dob_yy, gender, country) {
    first_name = encodeURIComponent(first_name);
    last_name = encodeURIComponent(last_name);
    email = encodeURIComponent(email);
    phone_number = encodeURIComponent(phone_number);
    street = encodeURIComponent(street);
    city = encodeURIComponent(city);
    state = encodeURIComponent(state);
    zip_code = encodeURIComponent(zip_code);
    dob_dd = encodeURIComponent(dob_dd);
    dob_mm = encodeURIComponent(dob_mm);
    dob_yy = encodeURIComponent(dob_yy);
    gender = encodeURIComponent(gender);
    country = encodeURIComponent(country);

    let url = `http://localhost:4001/contacts/insert/${first_name}/${last_name}/${email}/${phone_number}/${street}/${city}/${state}/${zip_code}/${dob_dd}/${dob_mm}/${dob_yy}/${gender}/${country}`;
    return fetch(url).then(response => {
        return response.json();
    }).then (jsonResponse =>{
        return jsonResponse;
    }) 
}

function editContactName (id,first_name, last_name, email, phone_number, street, city, state, zip_code, dob_dd, dob_mm, dob_yy, gender, country){
    let url = `http://localhost:4001/contacts/edit/${id}/${first_name}/${last_name}/${email}/${phone_number}/${street}/${city}/${state}/${zip_code}/${dob_dd}/${dob_mm}/${dob_yy}/${gender}/${country}`;
    return fetch(url
        ).then(response => {
            return response.json();
        }).then(jsonResponse =>{
            return jsonResponse;
        });
}

function sortField (field, direction){
    let url = `http://localhost:4001/contacts/${field}/${direction}`;
    return fetch(url
        ).then(response =>{
            return response.json();
        }).then(jsonResponse =>{
            return jsonResponse
        });
}



export {getContacts, deleteContactName, insertContact, editContactName, deleteAllContatcs, deleteContactId, sortField };

//import { response } from "express"
// function getContacts (){
//     return fetch(`http://localhost:4001/contacts`,{}
//     ).then(response => {
//         return response.json().then(jsonResponse => {
//             return jsonResponse;
//         }).catch(reason => {
//             console.log(reason);
//         });
//     }).catch(reason => {
//         alert('Server is down!');
//         console.log(reason);
//         return [];
//     });
// }

// function deleteContactName (name){
//     let url = `http://localhost:4001/contacts/delete/${name}`;
//     return fetch(url,{}
//     ).then(response => {
//         return response.json().then(jsonResponse => {
//             return jsonResponse;
//         });
//     });
// }