// ---- global ----
import React from 'react';
import "asset/share.css";
import "./style.css";

export default class CARD extends React.Component {    
    render() {
        return (
            <div>
                <span className='valueCardTitle'>
                    {this.props.value}
                </span>
                <hr />
                <div>
                    <span className='valueCardSideTitle'>
                        {this.props.fristTitle} : {this.props.fristValue}
                    </span>
                </div>
                <hr />
                <div>
                    <span className='valueCardSideTitle'>
                        {this.props.secondTitle} : {this.props.secondValue}
                    </span>
                </div>
            </div>
            
        );
    }
}