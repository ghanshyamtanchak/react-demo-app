import React from "react"


class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            count2: 2
        }
    }
    render() {

        const { name } = this.props
        const { count, count2 } = this.state 

        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h2>count: {count}</h2>
                <h2>count: {count2}</h2>
                <h4>Location: Deharadun</h4>
                <h4>Contact: @gt_7</h4>
            </div>
        )
    }
}

export default UserClass