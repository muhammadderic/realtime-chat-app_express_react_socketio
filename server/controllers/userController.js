let users = [];

const addUser = ({ id, name, room }) => {
  if (!name || !room) return { error: "Username and room name are required!" };

  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(user => user.name === name && user.room === room);

  // DEVELOPMENT LINE (C)
  // if (existingUser) return {error: "Username has taken"};
  // ---

  const user = { id, name, room };

  if (!existingUser) {
    users.push(user);
  }

  return { user };
}

const getUser = (id) => users.find(user => user.id === id);

module.exports = { addUser, getUser };