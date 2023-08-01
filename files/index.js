const path = require('path');
const fs = require('fs/promises');

// console.log(__dirname);
// console.log(__filename);

const usersPath = path.join(__dirname, '..', 'db', 'users.json');

class FileOperations {
  constructor(path) {
    this.path = path;
  }

  async read() {
    const users = await fs.readFile(this.path, 'utf-8');
    return JSON.parse(users);
  }

  async display() {
    const users = await this.read();
    console.table(users);
  }

  async create(data) {
    return await fs.writeFile(this.path, JSON.stringify(data, null, 2));
  }

  async append(data) {
    const users = await this.read();
    const newUsers = [...users, data];
    await this.create(newUsers);
    return data;
  }

  async remove() {
    return await fs.unlink(this.path);
  }

  async update(id, userName) {
    const users = await this.read();
    const foundUser = users.find(user => user.id === id);
    if (!foundUser) {
      return null;
    }
    foundUser.name = userName;
    const index = users.findIndex(user => user.id === id);
    users[index] = foundUser;
    return await this.create(users);
  }

  async removeOne(id) {
    const users = await this.read();
    const foundUser = users.find(user => user.id === id);
    if (!foundUser) {
      return null;
    }
    const index = users.findIndex(user => user.id === id);
    users.splice(index, 1);
    return await this.create(users);
  }
}

const file = new FileOperations(usersPath);

const users = [
  {
    id: '1',
    name: 'Ura',
  },
  {
    id: '2',
    name: 'Sveta',
  },
  {
    id: '3',
    name: 'Bob',
  },
];

// file.display();

// file.create(users);

// file.append({
//   id: '4',
//   name: 'Andrii',
// });

// file.remove();

// file.update('2', 'Sara');

// file.removeOne('2');
