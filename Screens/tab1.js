import React from 'react'
import { View, Text , TouchableOpacity, StyleSheet} from 'react-native'

const tab1 = ({navigation}) => {
    return (
        <View style={styles.main}>
            <Text>tab1</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
            <Text>Go To Profile page</Text>

            </TouchableOpacity>
        </View>
    )
}

export default tab1
const styles= StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})