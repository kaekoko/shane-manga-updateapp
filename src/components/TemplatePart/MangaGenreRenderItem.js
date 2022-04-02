import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, Image, Dimensions,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.4)

const MangaGenreRenderItem = ({ item, index }) => (
  <View style={styles.container} key={index}>
    <Image
      source={{ uri: item.featureimage }}
      style={styles.image}
    />
    <Text style={styles.header}>{item.title}</Text>
    <Text style={styles.body}>{item.body}</Text>
  </View>
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3,
    marginBottom: 10,
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 250,
  },
  header: {
    color: '#222',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 13,
    paddingLeft: 20,
    paddingRight: 20,
  },
})

export default MangaGenreRenderItem
