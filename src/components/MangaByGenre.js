import React from 'react'
import { View, Text, StyleSheet,FlatList, VirtualizedView} from 'react-native'
import MangaRanderItem, { SLIDER_WIDTH, ITEM_WIDTH } from './TemplatePart/MangaRenderItem'
import useMangasByGenre from '../hook/MangasByGenre'

const MangaByGenre = (slug) => {
  const { data, isLoading, isSuccess } = useMangasByGenre(slug);
  return (
    <View>

      {isLoading && (
        <React.Fragment>
          <Text>Loading...</Text>
        </React.Fragment>
      )}

      {isSuccess && (

        <View>
          <VirtualizedView
              data={data}
              keyExtractor={keyExtractor}
              renderItem={MangaRanderItem}
              onRefresh={refetch}
              refreshing={isLoading}
              onEndReached={concatData}

      />
    </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    
  });
export default MangaByGenre
