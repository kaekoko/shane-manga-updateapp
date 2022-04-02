import React, { useState } from 'react'
import {
  View, Text, FlatList, StyleSheet, Button, TouchableOpacity, Alert,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import useAllGenre from '../hook/AllGenresHook'
import useMangasByGenre from '../hook/MangasByGenre'
import MangaByGenre from './MangaByGenre'

const GenreTab = () => {
  const [slug, setSlug] = useState('adult')
  const { data, isLoading, isSuccess } = useAllGenre()
  const { mdata } = useMangasByGenre(slug)
  // console.log(data)
  const onPressGenerName = (slug) => {
    // Alert.alert(slug);
    setSlug(slug)
  }

  return (
    <View>
      <Text style={styles.title}> ALL GENRES </Text>
      {isLoading && (
        <>
          <Text>Loading...</Text>
        </>
      )}

      {isSuccess && (
      <FlatList
        data={data}
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

export default GenreTab
