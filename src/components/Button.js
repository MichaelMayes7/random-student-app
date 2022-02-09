import React from "react";

export default class Button extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <button onClick={this.props.handleClicked}>Pick Student</button>
            </div>
        );
    }
}