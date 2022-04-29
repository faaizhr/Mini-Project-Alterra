import { gql, useQuery, useLazyQuery } from "@apollo/client"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";


const GetLogin = gql `
query MyQuery($_eq: String, $_eq1: String ) {
  auth(where: {name: {_eq: $_eq}, password: {_eq: $_eq1}}) {
    id
    level
    name
    username
    password
    url
  }
}
`;
export default function Login() {

    const[getUser, { data, loading, error}] = useLazyQuery(GetLogin);

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate()

    console.log("data login", data)

    useEffect(() => {
        if(data?.auth.length === 1) {
            console.log("data", data);
            return navigate ("/home")
        }
    }, [data]);

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const login = () => {
        getUser({
            variables: {
                _eq: name,
                _eq1: password,
            }
        })
    }

    if(loading) {
        return <h1>Loading...</h1>
    }

    console.log("data", name + "  " + password)

    return (
      <div className="App">
        <h1>Login</h1>
        <input type="text" onChange={handleChangeName}/>
        <input type="text" onChange={handleChangePassword}/>
        {data && <h4>gagal</h4>}

        <button onClick={login}>Submit</button>
      </div>
      )
}