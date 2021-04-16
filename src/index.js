import React from 'react';
import ReactDOM, { render } from 'react-dom';

class App extends React.Component{

    constructor(props){
        super(props);

        this.state = { lat: null, long: null, errMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude, long: position.coords.longitude})
            },
            (err) => {
                this.setState({ errMessage: err.message })
            }
        );
    }

    render () {
            if (this.state.errMessage && !this.state.lat && !this.state.long){
                return (
                    <div>Error: {this.state.errMessage} </div>
                );
            }

            if (!this.state.errMessage && this.state.lat && this.state.long){
                return (
                    <div>
                        Latitude: {this.state.lat} <br />
                        Longitude: {this.state.long}
                    </div>
                );
            }

            return 'Loading!';

    }
    
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);