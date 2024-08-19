import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center',}} onPress={onPress} >
        <View style={styles.button}> 
            <Text style={styles.buttonText}>{ text }</Text>
        </View>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button:{
        borderRadius: 100,
        backgroundColor: '#FFFDD0',
        width: 150,
        height: 50,
        alignItems: 'center',  
        justifyContent: 'center',
        marginBottom:50  
    },
    buttonText:{
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})
