import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from 'react-query'



// assets
import { imageAssets } from 'theme/images'
import { fontAssets } from 'theme/fonts'
import Navigator from './navigator'

const queryClient = new QueryClient();

const Root = () => {

return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Navigator />
      </QueryClientProvider>
    </NavigationContainer>  
  )
}

export default Root
