import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import StackNavigation from './StackNavigation';

const Index = () => {
  return (
    <NavigationContainer>
        <StackNavigation />
    </NavigationContainer>    
  )
}

export default Index;