// ---- global ----
import React from 'react';
import "asset/share.css";
import "./style.css";

export default class CARD extends React.Component {
    render() {
        return (
            <div>
                <div className='cardTitle'>
                    <span >
                        {this.props.title}
                    </span>
                    <div className='cardValue'>
                        <span>
                            {this.props.value}
                        </span>
                    </div>
                    
                </div>
            </div>
            
        );
    }
}