import React from 'react'

class TextareaWithEvents extends React.Component {
    constructor() {
        super();
        this.state = {currentEvent: '---'};
        this.whatever = this.whatever.bind(this);
    }
    whatever (e) {
        this.setState({currentEvent: e.type});
    }
    render() {
        return (
            <div>
                <textarea
                    onKeyPress={this.whatever}
                    onCopy={this.whatever}
                    onCut={this.whatever}
                    onPaste={this.whatever}
                    onFocus={this.whatever}
                    onBlur={this.wahtever}
                    onDoubleClick={this.whatever}
                    cols="30"
                    rows="10"
                />
                <h1>{this.state.currentEvent}</h1>
            </div>
        );
    }
    
}

export default TextareaWithEvents;