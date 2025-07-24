import React from "react";
class User extends React.Component{
    constructor(props){
        super(props);
        //create local state variable 
        this.state={
            userInfo:{
             Name:"dummy",
             Contact:"fax",
             avatar_url:"https://dummy-photo.com", 
            }
    };
    };
    async componentDidMount(){
      const data=await fetch("https://api.github.com/users/akshaymarch7");
      const json= await data.json();
      //update api json data
      this.setState(
        {
            userInfo:json,
        }
      );
    };

    render(){
     const{name,location,avatar_url}=this.state.userInfo;   
    return (
    <div className="user-card">
    <img src={avatar_url}></img>    
     <h2>Name:{name}</h2>
     <h2>Location:{location}</h2>
    </div>
    );
}
}
export default User;