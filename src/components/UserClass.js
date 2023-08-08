import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/" + this.props.name);
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h4>Location: {location}</h4>
      </div>
    );
  }
}

export default UserClass;
