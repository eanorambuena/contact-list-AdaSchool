const addContact = (
        contactList, contactId, contactFirstName, contactLastName,
        contactPhoneNumber, contactLocations, contactCity, contactAddress, contactOrder
    ) => {
    let contact = {
        id:             contactId,     
        nombres:        contactFirstName,
        apellidos:      contactLastName,
        teléfono:       contactPhoneNumber,
        ubicaciones:    contactLocations,
        ciudad:         contactCity,
        dirección:      contactAddress,
        order:          contactOrder
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

const sortContacts = (contactList, key = (contact) => contact.order) => {
    let temp;
    for (let times = 0; times < contactList.length; times++) {
        for (let index = 0; index < contactList.length - 1; index++) {
            if (key(contactList[index]) > key(contactList[index + 1])) {
                temp = contactList[index];
                contactList[index] = contactList[index + 1];
                contactList[index + 1] = temp;
            }
        }
    }
}

// EJEMPLO DE USO
const example = () => {
    const contactList = [
        {
            id:             1,
            nombres:        "Juan",
            apellidos:      "Perez",
            teléfono:       "123456789",
            ubicaciones:    ["Casa", "Trabajo"],
            ciudad:         "Bogotá",
            dirección:      "Calle 123 #45 - 67",
            order:          2
        },
        {
            id:             2,
            nombres:        "Pedro",
            apellidos:      "Gonzalez",
            teléfono:       "987654321",
            ubicaciones:    ["Casa"],
            ciudad:         "Santiago",
            dirección:      "Calle Chile #01443",
            order:          1
        },
    ];

    addContact(contactList, 3, "Carlos", "Garcia", "123456789", ["Casa"], "Bogotá", "Avenida Colombia #123", 3);

    console.log(contactList);
    sortContacts(contactList);
    console.log(contactList);
}

example();
