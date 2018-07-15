import React from 'react';
import {FlatList, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class DefaultMenu extends React.Component {
    render() {
        return (
            <Modal onRequestClose= {this.props.modalState}
                        visible = { this.props.modalState }
                        transparent = { false }
                        animationType = "slide"
                        presentationStyle = "fullScreen">
                    <View style={styles.listView}>
                        <FlatList data={this.props.defaultArray}
                                  contentContainerStyle={styles.alignList}
                                  renderItem={({item}) =>  <TouchableOpacity style = {styles.listBtn}
                                                                             onPress={() => this.props.colorSetter(item.key)}>
                                                                    <Text style={styles.closeText}>{item.key}</Text>
                                                             </TouchableOpacity>
                                                            }>
                        </FlatList>
                    </View>

                    <View style={styles.modalView}>
                        <TouchableOpacity style = {styles.closeBtn}
                                  onPress = {() => {this.props.toggleModal(false)}}>
                            <Text style={styles.closeText}>Close Modal</Text>
                        </TouchableOpacity>
                    </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modalView: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        flex: 1,
        marginTop: 20,
    },

    listView: {
        marginTop: 25,
        width: "100%",
        height: "80%",
    },

    alignList: {
        alignItems: 'center',
    },

    listBtn: {
        backgroundColor: "salmon",
        width: 200,
        height: 60,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    closeBtn: {
        backgroundColor: "salmon",
        width: "50%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },

    closeText: {
        color: "white",
        fontSize: 20,
    }
})

export default DefaultMenu;
