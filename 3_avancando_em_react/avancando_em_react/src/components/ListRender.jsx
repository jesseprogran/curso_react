import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Jessé", "Manuela", "Isaac Levi", "Lucivania"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Dalila", age: 37 },
    { id: 2, name: "Davi Silva", age: 39 },
    { id: 3, name: "Joelma", age: 30 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };
  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete radom user</button>
    </div>
  );
};

export default ListRender;
