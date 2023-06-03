import React from "react";
import {View, Text} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'

export default function GuideDetails() {

  const route = useRoute()
  const guides = route.params?.guide

  console.log(guides)

  return (
    <View>
      <Text>
        {guides?.nome}
      </Text>
    </View>
  )
}