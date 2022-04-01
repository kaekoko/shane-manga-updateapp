import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar, Container, ScrollView
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import LatestMangas from '../components/LatestMangas'
import GenreTab from '../components/GenresTab'

const styles = StyleSheet.create({
  root: {
    flex: 1,
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

const Home = ({ navigation }) => (
  <ScrollView>

    <StatusBar barStyle="light-content" />

    <LatestMangas />
    <GenreTab />
  </ScrollView>

)

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
