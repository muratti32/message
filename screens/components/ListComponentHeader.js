import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements';

const ListComponentHeader = () => {
    return (
        <View style={styles.container}>
            <Button 
                title="Broadcast Lists"
                type="clear"
                onPress={() =>{console.log("Broadcast Lists")}}
            />
            <Button 
                title="New Group"
                type="clear"
                onPress={() =>{console.log("New Group")}}
            />

        </View>
    )
}

export default ListComponentHeader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom:7,
    }
})
