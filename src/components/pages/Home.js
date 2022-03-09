import React,{useEffect, useState} from "react";
import axios from "axios";



const Home = () => {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        loadUser();
    },[]);

    const loadUser = async() =>{
      const result = await axios.get("http://localhost:3001/users");
      setUsers(result.data);
    };

    const deleteUser = async id =>{
      await axios.delete(`http://localhost:3001/users/${id}`);
      loadUser();
  }  

    return (
      <div className="container">
         <div className="py-4">
        <h1>Home</h1>
        <table class="table">
  <thead>
    <tr className="bg-primary">
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   {users.map((user,index) => (
     <tr>
       <th scope ="row">{index +1}</th>
       <td>{user.name}</td>
       <td>{user.username}</td>
       <td>{user.email}</td>
      <td>
      <a type="button" class="btn btn-info m-2" href={`/user/${user.id}`}>View</a>
      <a type="button" class="btn btn-outline-primary m-2" href={`/user/edituser/${user.id}`}> Edit</a>
        <button type="button" class="btn btn-danger m-2"
         onClick={()=>{deleteUser(user.id)
         }}>Delete</button>
      </td>
     </tr>
   ))}
  </tbody>
</table>
</div>
      </div>
    );
  };
  
  export default Home;
  