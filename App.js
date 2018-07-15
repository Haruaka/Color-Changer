import React from 'react';
import {StyleSheet, StatusBar, Text, View } from 'react-native';

import ColorInput from './components/ColorInput';
import ColorMenu from './components/ColorMenu';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: 'white',
      colorArray: [],
      defaultColors: [{key: "pink"}, 
                      {key: "plum"}, 
                      {key: "yellow"}],
    }

    this.setColor = this.setColor.bind(this)
  }

  addColor = (colorName) => {
      this.setState((prevState) => {
          return {
            colorArray: prevState.colorArray.concat({key: colorName})
          }
      })
  }

  setColor(colorName){
    this.setState ({
      bgColor: colorName,
    })
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.bgColor}]}>
        <StatusBar hidden={true}/>
        <View style={styles.header}>
          <Text style={styles.headerTxt}>Color Changer</Text>
        </View>
        <ColorInput addColorReceiver={this.addColor}/>
        <ColorMenu colorSetter={this.setColor} 
                   defaultColors={this.state.defaultColors} 
                   colorArray={this.state.colorArray}/>
      </View>
    );
  }
}
//onPress={() => this.props.colorSetter('yellow')}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    flex: 1,
    backgroundColor: 'salmon',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  
  headerTxt: {
    fontSize: 20,
    color: 'white',
  },
});
