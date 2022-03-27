import React from 'react'
import { View, Text } from 'react-native'
import Carousel, { Pagination, } from 'react-native-snap-carousel'
import MangaRanderItem, { SLIDER_WIDTH, ITEM_WIDTH } from './TemplatePart/MangaRenderItem'
import useLatestMangas from '../hook/LatestMangasHook'

const LatestMangas = () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)
  const { data, isLoading, isSuccess } = useLatestMangas();
  return (
    <View>

      {isLoading && (
        <React.Fragment>
          <Text>Loading...</Text>
        </React.Fragment>
      )}

      {isSuccess && (

        <View>
          <Carousel
            layout="default"
            ref={isCarousel}
            data={data}
            renderItem={MangaRanderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            useScrollView={true}
            loop={true}
            loopClonesPerSide={2}
            autoplay={true}
            autoplayDelay={5000}
            autoplayInterval={3000}
          />

        </View>
      )}
    </View>
  );
}

export default LatestMangas
