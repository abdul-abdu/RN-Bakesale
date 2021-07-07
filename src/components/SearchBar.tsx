import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const SearchBar = () => {
    return (
        <View>
            <TextInput style={styles.input} placeholder='searchbar'/>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        height: 40
    }
})


export default SearchBar