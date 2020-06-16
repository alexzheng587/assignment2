import React from 'react';

class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
        this.showDetails = this.showDetails.bind(this);
        this.hideDetails = this.hideDetails.bind(this);
    }

    showDetails() {
        this.setState({
            visible: true
        })
    }

    hideDetails() {
        this.setState({
            visible: false
        })
    }

    render() {
        if (this.state.visible) {
            return (
                <div id="details" className="panel">
                    <button onClick={this.hideDetails}>Show Less</button>
                    <p id="detail_view">{this.props.message['message']}</p>
                    <p id="detail_view">{this.props.message['date']}</p>
                    <p id="detail_view">{this.props.message['username']}</p>
                </div>
            )
        }
        return  ( <div className="messageLine">
            <button onClick={this.showDetails}>Show Details</button>
            <span>{this.props.message['message']}</span>
            </div>
        )
    }
}

export default Details