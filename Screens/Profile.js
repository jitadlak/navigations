import React from 'react'
import { View, Text, TouchableOpacity , StyleSheet} from 'react-native'

const Profile = ({navigation}) => {
    return (
        <View style={styles.main}>
            <Text>Profile Screeen</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Edit')}>
            <Text>Go To Edit page</Text>

            </TouchableOpacity>
        </View>
    )
}

export default Profile
const styles= StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

