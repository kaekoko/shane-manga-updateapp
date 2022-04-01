import React from 'react'
import { View, Text, StyleSheet, FlatList, VirtualizedView } from 'react-native'
import MangaGenreRenderItem from './TemplatePart/MangaGenreRenderItem'
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
           <FlatList
                        data={data}
                        keyExtractor={item => `genre_${item.id}`}
                        renderItem={({item}) => (<MangaGenreRenderItem item={item}/>)}
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
    width: 200
  },

});
export default MangaByGenre
