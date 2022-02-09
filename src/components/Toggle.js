import React from "react";

export default class Toggle extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <button onClick={this.props.toggleHandler}>Toggle</button>
            </div>
        );
    }
}