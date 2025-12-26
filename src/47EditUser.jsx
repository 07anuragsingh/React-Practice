import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function EditUser() {
  const [name, setName] = useState("");
  const [classs, setClasss] = useState("");
  const [age, setAge] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const getUserData = async () => {
    const url = "http://localhost:3000/user/" + id;
    let response = await fetch(url);
    
    response = await response.json();
    console.log(response);

    setName(response.name);
    setClasss(response.classs);
    setAge(response.age);
  };

  useEffect(() => {
    (
        async ()=>{
            await getUserData()
        }
    )();
  }, [id]);

  const updateUser = async(name,age,classs)=>{
    console.log(name,age,classs);
    const url = "http://localhost:3000/user/" + id;
    let resposne = await fetch (url,{
        method: "put",
        body : JSON.stringify({name,classs,age})
    });
    resposne = resposne.json();
    if (resposne){
        alert ("user Upadted");
        navigate('/');
    }

    
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Edit User Details</h2>

      <input
        type="text"
        placeholder="User Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="User Class"
        value={classs}
        onChange={(e) => setClasss(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="User Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br /><br />

      <button onClick={()=>updateUser(name,age,classs)}>Update</button>
    </div>
  );
}
