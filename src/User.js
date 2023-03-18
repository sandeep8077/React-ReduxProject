

function User(props){
    console.log(props);
    return(<>
    <h1>user component</h1>
        <h2>{props.name}</h2></>
        
        )
}
export default User;