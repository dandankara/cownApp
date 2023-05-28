import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import resGuides from '../../services/api'
import { CardGuideInfo, ContainerCardGuide, ContainerGuides } from './style'

export default function Guides() {

  const [guides, setGuides] = useState([]);

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

  // const renderGuides = () => (
  //   <Card key={card.id}>
  //     <CardTitle>{card.title}</CardTitle>
  //     <CardDescription>{card.description}</CardDescription>
  //     <SearchButton>
  //       <SearchButtonText>Procurar Guias</SearchButtonText>
  //     </SearchButton>
  //   </Card>
  // );


  return (
    <SafeAreaView>
      <StatusBar style="dark" />

      <ContainerGuides>
        <ContainerCardGuide>
          {guides.map((guide, index) => (
            <>
              <CardGuideInfo>
                <Text key={index}>{guide.nome}</Text>
                <Text key={index}>{guide.categorias[0]}</Text>
              </CardGuideInfo>
            </>
          ))}
        </ContainerCardGuide>
      </ContainerGuides>
    </SafeAreaView>
  )
}