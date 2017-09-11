/**
 * Created by rbo2913 on 09/08/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
//import '../node_modules/font-awesome/css/font-awesome.min.css';

const styles = {
    list : {
        display : "inline-block"
    },
    roundIcons : {
        display: "inline-block",
        fontSize: "25px",
        paddingTop : "10px",
        width: "50px",
        height: "42px",
        lineHeight: "36px",
        textAlign: "center",
        margin: "0 7px 7px",
        borderRadius: "50%",
        borderStyle: "solid",
        borderWidth: "1px"
    }
}

export default  class Social extends React.Component {

    constructor(){
        super();
    }

    render() {
        return (
                <li style={styles.list}>
                    {this.props.link}
                    <a style={styles.roundIcons} href={this.props.social.href}>
                        <i className={this.props.social.icons}></i>
                    </a>
                </li>
        )
    }

}
