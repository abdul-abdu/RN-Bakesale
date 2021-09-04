import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  PanResponder,
  Animated,
  Dimensions,
} from 'react-native'
import { priceDisplay } from '../util'
import { IDeal, IDealFull } from '../../types'
import { fetchDealDetail } from '../ajax'
import { SafeArea } from '../layouts'

type Props = {
  initialDealData: IDeal
  onBack: Function
}

function DealDetail({ initialDealData, onBack }: Props) {
  const imageXPos = new Animated.Value(0)
  const width = Dimensions.get('window').width
  const [deal, setDeal] = useState<IDeal | IDealFull>(initialDealData)
  const [imageIndex, setImageIndex] = useState(0)
  const imagePanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      imageXPos.setValue(gestureState.dx)
    },
    onPanResponderRelease: (event, gestureState) => {
      if (gestureState.dx < -0.4 * width) {
        Animated.timing(imageXPos, {
          toValue: -1 * width,
          duration: 250,
          useNativeDriver: false,
        }).start()
      }
    },
  })

  useEffect(() => {
    ;(async function loadDealDetails() {
      const fullDealData = await fetchDealDetail(deal.key)
      setDeal(fullDealData)
    })()
  }, [])

  const handleSwipe = () => {
    setImageIndex(imageIndex + 1)
    imageXPos.setValue(width)
  }
  return (
    <SafeArea>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => onBack()}>
          <Text style={styles.backLink}>Back</Text>
        </TouchableOpacity>

        <Animated.Image
          {...imagePanResponder.panHandlers}
          source={{ uri: deal.media[imageIndex] }}
          style={[styles.image, { left: imageXPos }]}
        />
        <View>
          <Text>{initialDealData.title}</Text>
          <Text>{priceDisplay(initialDealData.price)}</Text>
        </View>

        {deal.user && (
          <>
            <View>
              <Image source={{ uri: deal.user.avatar }} style={styles.avatar} />
              <Text>{deal.user.name}</Text>
            </View>

            <View>
              <Text>{deal.description}</Text>
            </View>
          </>
        )}
      </View>
    </SafeArea>
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
  avatar: {
    height: 60,
    width: 60,
  },
  backLink: {
    fontSize: 20,
    backgroundColor: '#22f',
    marginBottom: 10,
  },
})

export default DealDetail
