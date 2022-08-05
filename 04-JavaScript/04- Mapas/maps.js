function getAdmins(map) {
    let admins = [];
    for (key, value of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Deivison', 'Admin');
usuarios.set('Bruna', 'Admin');
usuarios.set('Luana', 'User');
usuarios.set('Geraldo', 'Admin');

console.log(getAdmins(usuarios));