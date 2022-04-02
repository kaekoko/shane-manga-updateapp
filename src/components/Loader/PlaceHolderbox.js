import React from 'react'
import {
  StyleSheet, Text, View, StatusBar, Container,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'

const PlaceHolderBox = ({ item }) => (

  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>RenderItem</Text>
    <Button
      title="Go to Details"
      color="white"
      backgroundColor={colors.lightPurple}
    />
  </View>

)

const styles = StyleSheet.create({
  root: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})
export default PlaceHolderBox
