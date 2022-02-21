import React from 'react';
import "./style.css";
import moment from 'moment-timezone'
import { useSelector } from 'react-redux'

const TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

const TIME = () => {
    const timeZone = useSelector(state => state.itemReducer.timezone) 
    const [timeData, setTimeData] = React.useState(moment().tz(timeZone).format(TIME_FORMAT))

    const updateDate = () => {
        setTimeData(moment().tz(timeZone).format(TIME_FORMAT))
    }

    React.useEffect(() => {
        setTimeout(updateDate, 1000);
    })

    return(
        <div className='header-bar__left'>{timeData}</div>
    )
}

export default class HEADER extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.updateDate = this.updateDate.bind(this);
    //     this.state = {
    //         date: moment().tz(localStorage.getItem('timezone')).format(TIME_FORMAT),
    //     }
    //     this.interval = setInterval(this.updateDate, 1000);
    // }
    
    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }

    // updateDate() {
    //     this.setState({
    //         date: moment().tz(localStorage.getItem('timezone')).format(TIME_FORMAT),
    //     });
    // }

    render() {
        return(
            <div className="header-bar">
                <TIME/>
            </div>
        );
    }
}