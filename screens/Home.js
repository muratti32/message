import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,TextInput,FlatList, RefreshControl, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button,Divider } from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons';
import CardItem from './components/Card';

import ListComponentHeader from './components/ListComponentHeader'

const Home = ({navigation,route}) => {

    const [data,setData] = useState()
    const [isRefreshing,setisRefreshing] = useState(false)
    const [search,setSearch] = useState()
    const [searchData,setSearchData] = useState()

    useEffect(() => {
        handleRefresh()
    },[])

    const handleSearch = (text) => {
        setSearch(text)
        const result = data.filter((item) =>
            Object.values(item).some((t) => t.includes(text))
        );
        setSearchData(result);
    };

    const handleRefresh = () => {
        setisRefreshing(true);
        fetch("https://hwasampleapi.firebaseio.com/chats.json")
            .then((res) => res.json())
            .then((json) => setData(json))
            .then(() => setisRefreshing(false))
            .catch((err) => console.log(err));
    };

    const getDivider = () => {
        return (
            <Divider style={{marginBottom:7, backgroundColor: 'blue' }} />
        )
    }
    

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerEditButton}>
                        <Button title="Edit" type="clear" />
                        <Button 
                            type="clear"
                            icon={ <Ionicons name="ios-create" size={32} color={"dodgerblue"} /> } 
                        />
                    </View>
                    <Text style={styles.headerText}>{route.name}</Text>
                    
                    <View style={styles.search}>
                        <Button
                                type="clear"
                                icon={  <Ionicons name='ios-search' size={24} color='black' /> }
                            />
                        <TextInput
                        placeholder="Search"
                        style={{ backgroundColor: '#ccc',flex:1,borderRadius:12,}}
                        onChangeText={text => handleSearch(text)}
                        value={search}/>
                    </View>
                </View>

                <View style={styles.body}>
                <FlatList
                style={styles.flatList}
                    data={searchData ? searchData : data}
                    renderItem={({ item }) => 
                        <CardItem item={item} />
                    }
                    keyExtractor={(item,index) =>  item.name}

                    ItemSeparatorComponent={() => getDivider()}

                    ListHeaderComponent = { <ListComponentHeader /> }

                    refreshControl={
                        <RefreshControl 
                        refreshing={isRefreshing} 
                        onRefresh={() => handleRefresh()} />
                    }
                />
                </View>

            </SafeAreaView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    header: {
        width : '100%',
        borderBottomColor: "#ccc", 
        borderBottomWidth: 1, 
        paddingLeft:7,
        paddingRight:7,
        paddingBottom:0,
    },
    body: {
        flex: 1,
        backgroundColor:'white'
    },
    headerEditButton: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerText: {
        marginTop: 10,
        fontWeight:'bold',
        fontSize:36,
    },
    search: {
        flexDirection:'row',
        backgroundColor: '#ccc',
        alignItems:'center',
        borderRadius:12,
        marginBottom:5,
    },
    flatList: {
        flex:1,
        padding:7,
    }
})
