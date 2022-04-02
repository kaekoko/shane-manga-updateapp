import React, { useState } from 'react'
import {
  View, Text, FlatList, TouchableOpacity, StyleSheet,
} from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import MangaRanderItem, { SLIDER_WIDTH, ITEM_WIDTH } from './TemplatePart/MangaRenderItem'
import useLatestMangas from '../hook/LatestMangasHook'

const LatestMangas = () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)
  const [slug, setSlug] = useState('adult')
  const { data, isLoading, isSuccess } = useLatestMangas()
  const onPressGenerName = (slug) => {
    // Alert.alert(slug);
    setSlug(slug)
  }
  return (
    <View>

      {isLoading && (
        <>
          <Text>Loading...</Text>
        </>
      )}

      {isSuccess && (

        <View>
          <Carousel
            layout="default"
            ref={isCarousel}
            data={data.latest}
            renderItem={MangaRanderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            useScrollView
            loop
            loopClonesPerSide={2}
            autoplay
            autoplayDelay={5000}
            autoplayInterval={3000}
          />
          <Text style={styles.title}> ALL GENRES </Text>
          <FlatList
            data={data.genres}
            horizontal
            keyExtractor={(item) => `genre_${item.term_id}`}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => onPressGenerName(item.slug)}
                style={styles.genrebtn}
              >
                <View style={styles.item}>
                  <Text style={styles.btntitle}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  genrebtn: {
    backgroundColor: 'red',
    margin: 3,
    borderRadius: 5,

  },
  btntitle: {
    padding: 2,

  },
})
export default LatestMangas
