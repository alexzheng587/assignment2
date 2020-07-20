import React, { Component } from 'react';
import AddMessage from './addmessage';
import Panel from './panel';
import './static.css'
import { setInitialMessagesState } from '../actions/index';
import { connect } from 'react-redux';

// const App = () => {
//   return (
//       <div id="main_panel">
//         <h1>Assignment 2</h1>
//         <AddMessage/>
//         <Panel/>
//       </div>
//   );
// }
//
// export default App;

class App extends Component {

    getInitialMessages(dispatch) {
        fetch("/api/message")
            .then((res) => {
                return res.json()
            })
            .then((res) => {
            dispatch(setInitialMessagesState(res));
        }).catch(err =>
        console.log("error trying to get"));
    }

    componentWillMount() {
        this.getInitialMessages(this.props.dispatch);
    }

    render() {
        return (
            <div id="main_panel">
                <h1>Assignment 2</h1>
                <AddMessage/>
                <Panel/>
            </div>
        );
    }
}

export default connect()(App);