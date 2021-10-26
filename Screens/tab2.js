import React from 'react'
import { View, Text , TouchableOpacity, StyleSheet} from 'react-native'

const tab2 = ({navigation}) => {
    return (
        <View style={styles.main}>
            <Text>tab2</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Edit')}>
            <Text>Go To Edit page</Text>

            </TouchableOpacity>
        </View>
    )
}

export default tab2
const styles= StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})