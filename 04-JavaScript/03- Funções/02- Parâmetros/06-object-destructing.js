const user = {
    id: 42,
    displayName: 'dcasimiro',
    fullName: {
        firstName: 'Deivison',
        lastName: 'Casimiro',
    }
}

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `$(first) $(last)`;
}

userId(user)
// 42

getFullName(user)
// Deivison Casimiro