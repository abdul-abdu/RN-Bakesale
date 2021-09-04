import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { priceDisplay } from '../util'

type Props = {
  deal: IDeal
  onPress: Function
}

interface IDeal {
  media: string[]
  title: string
  price: number
  key: string
}

const DealItem = ({ deal, onPress }: Props) => {
  const handlePress = () => {
    onPress(deal.key)
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={{ uri: deal.media[0] }} style={styles.image} />
      <View>
        <Text>{deal.title}</Text>
        <Text>{priceDisplay(deal.price)}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
  },
  container: {
    margin: 10,
    backgroundColor: '#fff',
  },
})

export default DealItem
