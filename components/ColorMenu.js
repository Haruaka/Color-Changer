import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import DefaultMenu from './Default';
import ColorsMenu from './MyColors';

class ColorMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultModal: false,
            colorsModal: false,
        }
    
        this.props.colorSetter = this.props.colorSetter.bind(this)
    }
    
    toggleDefault = (visible) => {
        this.setState({
            defaultModal: visible,
        })
    }

    toggleColors = (visible) => {
        this.setState({
            colorsModal: visible,
        })
    }

    render() {
        return (
            <View style={styles.footer}>
                <DefaultMenu colorSetter={this.props.colorSetter}
                             defaultArray={this.props.defaultColors} 
                             modalState={this.state.defaultModal} 
                             toggleModal = {this.toggleDefault}/>

                <ColorsMenu  colorSetter={this.props.colorSetter}
                             colorArray={this.props.colorArray}
                             modalState={this.state.colorsModal}
                             toggleModal = {this.toggleColors}/>

                <TouchableOpacity style={styles.menuBtns}
                                  onPress = {() => {this.toggleDefault(true)}}>
                    <Text style={styles.menuBtnText}>Default Colors</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuBtns} 
                                  onPress = {() => {this.toggleColors(true)}}>
                    <Text style={styles.menuBtnText}>My Colors</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row', 
    },

    menuBtns: {
        backgroundColor: "salmon",
        width: '50%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    menuBtnText: {
        color: 'white',
        textAlign: 'center',
    },
})

export default ColorMenu;