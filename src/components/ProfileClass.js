import React from "react"

class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      name: "Test",
    }
  }
  render() {
    return (
      <div>
        <h2>This is a Class based Component Profile</h2>
        <h3>Type: {this.props.type}</h3>
        <h3>
          Count: {this.state.count}, Name: {this.state.name}
        </h3>
        <button
          onClick={() => {
            this.setState({ count: 1, name: "Testing" })
          }}
        >
          Count Btn
        </button>
      </div>
    )
  }
}

export default Profile
