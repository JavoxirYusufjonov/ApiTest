import "./Ava.css";


function Ava({name,url}){
    return <img className = "profile-avatar" width="128" height="128" alt={name} src={url}/>;
}

export default Ava;