import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ClockSide from './ClockSide';


export default class ClockContainer extends React.Component {
    state = {
        isCurrentWhite: true,
        gameStarted: false,
    };

    constructor(props) {
        super(props);

        this._flipSide = this._flipSide.bind(this);
    }

    _flipSide = () => {
        // flip the currentSide.
        newSide = !this.state.isCurrentWhite;
        console.log("newSide: ", newSide);

        sCopy = Object.assign({}, this.state);
        sCopy.isCurrentWhite = newSide;
        this.setState(sCopy);
    }

    render() {
        return(
            <View style={styles.containerStyle}>
                <ClockSide isCurrentWhite={this.state.isCurrentWhite} flip={this._flipSide} isWhite={false}/>
                <ClockSide isCurrentWhite={this.state.isCurrentWhite} flip={this._flipSide} isWhite={true}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: 'orange'
    }
});
