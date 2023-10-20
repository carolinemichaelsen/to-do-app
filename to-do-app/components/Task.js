import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = (props) => {
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circle}></View>
    </View>
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderRadius: 5,
        marginRight: 15,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor:'#cc99ff',
        opacity: 0.5,
    },
    itemText: {
        maxWidth: '80%',
    },
    circle: {
        width: 12,
        height: 12,
        borderColors: '#cc99ff',
    },
})

export default Task;