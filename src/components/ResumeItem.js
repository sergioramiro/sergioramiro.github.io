import React, { Component } from 'react';

export class ResumeItem extends Component {
    render() {
        return (<div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
                <h3 className="mb-0">{this.props.position}</h3>
                <div className="subheading mb-3">{this.props.company}</div>
                {this.props.text.split('\n').map(str => <p>{str}</p>)}
            </div>
            <div className="resume-date text-md-right">
                <span className="text-primary">{this.props.data}</span>
            </div>
        </div>)
    }
}