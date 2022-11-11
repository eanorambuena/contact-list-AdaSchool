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
    const contactIndex = foundContact(contactList, contactFirstName, contactLastName);
    return contactList.splice(contactIndex, 1);
}

const foundContact = (contactList, contactFirstName, contactLastName) => {
    let resultIndex = -1;
    for (let index = 0; index < contactList.length; index ++) {
        if (contactList[index].nombres == contactFirstName
            && contactList[index].apellidos == contactLastName) {
            resultIndex = index;
        }
    }
    return resultIndex;
}

function printContacts(contactList) {
    const contactString = contactList.join(", ");
    console.log(contactString);
}

const updateContact = (contactList, contactFirstName, contactLastName, replacementObject) => {
    const contactIndex = foundContact(contactList, contactFirstName, contactLastName);
    const replacementEntries = Object.entries(replacementObject);
    let key;
    let value;
    let replacement;
    for (let index = 0; index < replacementEntries.length; index++) {
        replacement = replacementEntries[index];
        key = replacement[0];
        value = replacement[1];
        contactList[contactIndex][key] = value;
    }
}
