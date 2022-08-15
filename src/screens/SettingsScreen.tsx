import React from 'react'
import { View, Text } from 'react-native'
import InputField from '../components/InputField'

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
      <Text>Please select chain</Text>
      <Text>Please enter wallet</Text>
      <InputField />
    </View>
  )
}

export default SettingsScreen