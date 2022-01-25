import React from 'react';
import "./style.css";
import moment from 'moment-timezone'

const TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export default class HEADER extends React.Component {
    constructor(props) {
        super(props);
        this.updateDate = this.updateDate.bind(this);
        this.state = {
            date: moment().format(TIME_FORMAT),
        }
        this.interval = setInterval(this.updateDate, 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateDate() {
        this.setState({
            date: moment().format(TIME_FORMAT),
        });
    }

    render() {
        return(
            <div className="header-bar">
                <div className='header-bar__left'>{this.state.date}</div>
            </div>
        );
    }
}