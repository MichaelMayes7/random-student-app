import React from "react";

export default class Student extends React.Component {
    state = {}
    render() {
        return (
            <div>{this.props.student && this.props.student.name}
            <br />
            <img src={this.props.student && this.props.student.img}></img>
            </div>
        );
    }
}