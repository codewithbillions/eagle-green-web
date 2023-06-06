import { Component } from "react";

class Aboutc extends Component {
    constructor() {

        super()

        this.state = {
            name: {firstName: "victoria",
                lastName: "akaani"},
                company: "Gomycode",
        }
    }

    render() {
        return (
        <div>
            <h1>Hello victoria 2</h1>
            <p>Hi {this.state.name.firstName} {this.state.name.lastName}. I work at {this.state.company}</p>

            <button onClick={() => {this.setState({name : {firstName: 'Ebuka', lastName: "buchi"}})}}>change name</button>
        </div>
        )
    }
}


export default Aboutc;