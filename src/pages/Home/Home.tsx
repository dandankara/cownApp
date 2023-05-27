import React, { useState } from 'react';
import { StatusBar, ScrollView } from 'react-native';
import {
  Container, Card, CardTitle, 
  CardDescription, SearchButton, SearchButtonText,
  CategoryItem, CategoryText, Header,
  Body, CardContainer,
} from './style';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([
    {
      id: '1',
      title: 'Gastronômicos',
      items: [
        { id: '1', 
        title: 'Cervejaria Bohemia', 
        description: 'Quem entra na Cervejaria Bohemia, imediatamente se apaixona pelo universo da cerveja. A visita oferece a experiência cervejeira mais completa da América Latina. O Tour apresenta a história da cerveja, o seu processo de produção e ingredientes que levam os visitantes a experiências sensoriais únicas e degustações exclusiva' },
        { id: '2', 
        title: 'Cachaçaria Werneck', 
        description: 'Há muitos anos trabalhando no ramo de bebidas nacionais e internacionais de qualidade e originais, os sócios da Cachaçaria Original resolveram levar até você as melhores bebidas do Brasil, com a praticidade do comércio eletrônico! Para isso precisaram de tempo e investimento, com o intuíto de que seu "e-cliente" tenha toda a tranquilidade e segurança ao adquirir seus produtos pela internet, através de uma moderna Loja Virtual disponibiliza seus produtos com procedência confiança e tecnologia.' },
        { id: '3', 
        title: 'Restaurante Crémerie', 
        description: 'Tudo começou quando Reinaldo Pires se formou em Zootecnia pela UFRRJ e decidiu, em Teresópolis, criar cabras leiteiras para a produção de queijos de cabra finos. Inaugurou, em seguida, o restaurante Cremerie Genève com o Chef francês Robert Darrot, ex chef do Rio Palace e do Meridien' },
      ],
    },
    {
      id: '2',
      title: 'Aventura',
      items: [
        { id: '4', 
          title: 'Passeio 4', 
          description: 'Descrição do Passeio 4' },
        { id: '5', 
          title: 'Passeio 5', 
          description: 'Descrição do Passeio 5' },
        { id: '6', 
          title: 'Passeio 6', 
          description: 'Descrição do Passeio 6' },
      ],
    },
    {
      id: '3',
      title: 'Praia e Sol',
      items: [
        { id: '7', 
          title: 'Passeio 7', 
          description: 'Descrição do Passeio 7' },
        { id: '8', 
          title: 'Passeio 8', 
          description: 'Descrição do Passeio 8' },
        { id: '9', 
          title: 'Passeio 9', 
          description: 'Descrição do Passeio 9' },
      ],
    },
  ]);
  const [cards, setCards] = useState([]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCards(category.items);
  };

  const renderCategoryItem = ({ item }) => (
    <CategoryItem onPress={() => handleCategoryClick(item)}>
      <CategoryText>{item.title}</CategoryText>
    </CategoryItem>
  );

  const renderCard = (card) => (
    <Card key={card.id}>
      <CardTitle>{card.title}</CardTitle>
      <CardDescription>{card.description}</CardDescription>
      <SearchButton>
        <SearchButtonText>Procurar Guias</SearchButtonText>
      </SearchButton>
    </Card>
  );

  return (
    <SafeAreaProvider>
      <Container>
        <StatusBar style="dark" />
        <Header>
          <Carousel
            data={categories}
            renderItem={renderCategoryItem}
            sliderWidth={300}
            itemWidth={200}
          />
        </Header>
        <Body>
          <CardContainer>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }} showsVerticalScrollIndicator={false}>
              {cards.map((card) => renderCard(card))}
            </ScrollView>
          </CardContainer>
        </Body>
      </Container>
    </SafeAreaProvider>
  );
}
