import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon,Image} from 'react-native-elements'

import MyButton from './button'

const CardItem = ({item}) => {


    return (
        
        <MyButton style={styles.container}>
            <View style={styles.avatar}>
                <Image
                    source={{ uri: item.image }}
                    style={{ width: 50, height: 50,borderRadius:25 }}
                />
            </View>

            <View style={{flex:1,flexDirection: 'row',alignItems:"center"}}>
                <View style={{  marginLeft:9,marginEnd:9,   flex:1,}}>
                    <View style={styles.baslik}>
                        <Text style={{fontSize: 19,fontWeight: 'bold'}}>{item.name}</Text>
                        <Text style={{color: '#ccc'}}>{item.date}</Text>
                    </View>
                    <Text numberOfLines={1} style={styles.message}>{item.message}</Text>
                </View>
                <Icon
                    style={{marginEnd:9,marginStart:5}}
                    name='ios-arrow-forward'
                    type='ionicon'
                    size={24}
                    color='#517fa4'
                />
            </View>
        </MyButton>
    )
}

export default CardItem

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        width : '100%',
        marginBottom:11,
    },
    baslik : {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: "space-between"
    },
    baslikText: {
        fontWeight:"bold"
    },
    message: {
        
    }
})
