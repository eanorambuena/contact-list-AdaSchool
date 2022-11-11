const addContact = (
        contactList, contactId, contactFirstName, contactLastName,
        contactPhoneNumber, contactLocations, contactCity, contactAddress
    ) => {
    let contact = {
        id:             contactId,     
        nombres:        contactFirstName,
        apellidos:      contactLastName,
        teléfono:       contactPhoneNumber,
        ubicaciones:    contactLocations,
        ciudad:         contactCity,
        dirección:      contactAddress
    }
    contactList.push(contact);
}

const removeContact = (contactList, contactFirstName, contactLastName) => {
    let resultIndex = -1;
    for (let index = 0; index < contactList.length; index ++) {
        if (contactList[index].nombres == contactFirstName
            && contactList[index].apellidos == contactLastName) {
            resultIndex = index;
        }
    }
    return contactList.splice(resultIndex, 1);
}

const printContacts = (contactList) => {
    contactString = contactList.join(", ");
    console.log(contactString);
}
