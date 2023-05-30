import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import resGuides from '../../services/api'
import { CardGuideInfo, ContainerCardGuide, ContainerGuides } from './style'
import { useNavigation } from '@react-navigation/native'
import GuideCard from '../../components/GuideCard'

export default function Guides() {

  const [guides, setGuides] = useState([])
  const navigation = useNavigation()

  useEffect(() => {
    async function loadGuides() {
      try {
        const res = await resGuides.get('/guias')
        setGuides(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    loadGuides()
  }, [])

  return (
    <SafeAreaView>
      <StatusBar style="dark" />

      <ContainerGuides>
        <ContainerCardGuide>
          {guides.map((guide, index) => (
            <GuideCard
              key={index}
              guide={guide}
              onPress={() => navigation.navigate('GuideDetails', {guide})}
            />
          ))}
        </ContainerCardGuide>
      </ContainerGuides>
    </SafeAreaView>
  )
}