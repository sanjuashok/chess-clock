import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Vibration} from 'react-native';

export default class ClockSide extends React.Component {
    state = {
        isCurrent: false,
        time: 60,
        clockTime: null
    };

    componentDidUpdate(prevProps) {
        // if this side is white && white is the current side, start the timer.
        // if this side is black && black is the current side, start the timer.
        if (this.props.isWhite && !prevProps.isCurrentWhite && this.props.isCurrentWhite ||
            !this.props.isWhite && prevProps.isCurrentWhite && !this.props.isCurrentWhite) {
            this._startTimer();
            // we also want to set this side as current.
            sCopy = Object.assign({}, this.state);
            sCopy.isCurrent = true;
            this.setState(sCopy);

        }
    }

    componentWillUnmount() {
        clearInterval(this._interval);
    }

    _startTimer = () => {
        this._interval = setInterval(() => {
            currTime = parseInt(this.state.time);
            sCopy = Object.assign({}, this.state);
            sCopy.time = currTime - 1;
            this.setState(sCopy);
        }, 1000);
    }

    buttonPress = function() {
        Vibration.vibrate(2);

        if (this.state.isCurrent) {
            clearInterval(this._interval);
            this.setState({isCurrent: false});
            this.props.flip();
        } else {
            // start the timer and set the current side as current.
            this._startTimer();
            sCopy = Object.assign({}, this.state);
            sCopy.isCurrent = true;
            this.setState(sCopy);
        }
    }


    render() {
        return(
            <TouchableOpacity
                onPressIn={this.buttonPress.bind(this)}
                style={[styles.clockStyle, this.props.isWhite ? styles.white : styles.black]}>
                <Text style={this.props.isWhite ? styles.whiteTextStyle : styles.blackTextStyle}>
                    {this.state.time}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    clockStyle: {
        height: '50%',
        width: null,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    white: {
        backgroundColor: 'purple'
    },
    black: {
        backgroundColor: 'black'
    },
    whiteTextStyle: {
        fontSize: 100,
        color: "yellow",
        alignSelf: 'center',
    },
    blackTextStyle: {
        fontSize: 100,
        color: "yellow",
        alignSelf: 'center',
        transform: [{rotate: '-180deg'}]
    }
});
