contactList = [
    "Ana Sandoval",
    "Miguel Bosé",
    "Elmer Figueroa",
    "Loreto Contreras"
]

const addContact = (contactList, contactName) => {
    contactList.push(contactName);
}

const removeContact = (contactList, contactName) => {
    let resultIndex = -1;
    for (let index = 0; index < contactList.length; index ++) {
        if (contactList[index] == contactName) {
            resultIndex = index;
        }
    }
    return contactList.splice(resultIndex, 1);
}

const printContacts = (contactList) => {
    contactString = contactList.join(", ");
    console.log(contactString);
}
