import React from 'react';
import "./style.css";
const Page = (props) => {
    return (
        <div>
            <div className='title'>
                <div className='title__content title__content__main-title'>
                    {props.title}
                </div>
            </div>
        </div>
    );
}

export default class MainPage extends React.Component {
    render() {
        return (
            <Page title={this.props.title}/>
        );
    }
}