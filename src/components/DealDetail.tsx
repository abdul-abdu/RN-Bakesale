import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { priceDisplay } from '../util'
import { IDeal, IDealFull } from '../../types'
import { fetchDealDetail } from '../ajax'

type Props = {
    initialDealData: IDeal,
    onBack: Function
}


const DealDetail = ({ initialDealData, onBack }: Props) => {
    const [deal, setDeal] = useState<IDeal | IDealFull>(initialDealData)

    useEffect(() => {
        (async () => {
            const fullDealData = await fetchDealDetail(deal.key)
            setDeal(fullDealData)
            console.log({ fullDealData });

        })()
    }, [])



    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onBack()}>
                <Text style={styles.backLink}>Back</Text>
            </TouchableOpacity>

            <Image source={{ uri: initialDealData.media[0] }} style={styles.image} />
            <View>
                <Text>{initialDealData.title}</Text>
                <Text>{priceDisplay(initialDealData.price)}</Text>
            </View>

            {deal.user && <>
                <View>
                    <Image source={{ uri: deal.user.avatar }} style={styles.avatar} />
                    <Text>{deal.user.name}</Text>
                </View>

                <View>
                    <Text>{deal.description}</Text>
                </View>
            </>}
        </View>
    )
}



const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 150
    },
    container: {
        margin: 10,
        backgroundColor: '#fff'
    },
    avatar: {
        height: 60,
        width: 60
    },
    backLink: {
        fontSize: 20,
        backgroundColor: '#22f',
        marginBottom: 10
    }
})


export default DealDetail