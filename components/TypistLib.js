/**
 * Created by rbo2913 on 09/08/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';

const styles = {
    role : {
        fontSize: "30px",
        lineHeight: "12px",
        fontWeight: "300"
    }
}

const cursorProps = {
    show: false,
    blink: true,
    element: '|',
    hideWhenDone: true,
    hideWhenDoneDelay: 1000
}

class TypistLib extends React.Component {

    constructor() {
        super();
    }

    render(){
        return (
            <div>
            <Typist className="TypistExample-header" avgTypingSpeed={40}
                    startDelay={2000} loop={true} backDelay={1500} cursor={cursorProps}>
                    <h3 className="role">{this.props.state.role}</h3>
            </Typist>
            </div>
        )
    }
}

export default TypistLib;