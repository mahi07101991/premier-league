import React, { PureComponent } from 'react';
import NavBar from "../navbar";
class index extends PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <div className="container-container">
                    <NavBar {...this.props} auth={this.props.auth}/>
                </div>
                <div>
                    Accounts
                </div>
            </React.Fragment>
        );
    }
}

export default index;