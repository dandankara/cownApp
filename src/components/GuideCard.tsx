import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

const GuideCard = ({guide, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{guide.nome}</Text>
        <Text>{guide.categorias[0]}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default GuideCard