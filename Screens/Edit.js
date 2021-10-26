import React from 'react'
import { View, Text , TouchableOpacity, StyleSheet} from 'react-native'

const Edit = ({navigation}) => {
    return (
        <View style={styles.main}>
            <Text>Edit page</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
            <Text>Go To Profile page</Text>

            </TouchableOpacity>
        </View>
    )
}

export default Edit

const styles= StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
