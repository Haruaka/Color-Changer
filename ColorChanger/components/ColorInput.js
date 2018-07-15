import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

class ColorInput extends React.Component {
    state = {
        color: "",
    }

    changeColorName = (str) => {
        this.setState({
            color: str
        })
    }

    submitColor = () => {
        if(this.state.color.trim() === ""){
            return;
        }
        this.props.addColorReceiver(this.state.color);
        this.setState({
            color: ""
        })
    }

    render() {
        return (
            <View style={styles.centerBox}> 
                <TextInput style={styles.inputBox} 
                           placeholder="You can add your own colors here!"
                           value = {this.state.color}
                           onChangeText={this.changeColorName}>
                </TextInput>
                <TouchableOpacity style={styles.addBtn} onPress={this.submitColor}>
                    <Text style={styles.btnText}>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    centerBox: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 10,
        width: '100%',
    }, 

    inputBox: {
        width: '80%',
        textAlign: 'center',
        fontSize: 18,
        paddingBottom: 10,
    },

    addBtn: {
        marginTop: 10,
        width: '80%',
        height: 40,
        justifyContent: 'center',
        backgroundColor: 'salmon',
    },

    btnText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    }
})

export default ColorInput;