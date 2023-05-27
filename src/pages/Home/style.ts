import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  align-items: center;
  padding-top: 20px;
  padding-bottom: 10px;
  margin-top: 35px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

export const Body = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 20px;
`;

export const CategoryItem = styled.TouchableOpacity`
  background-color: #f9c2ff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 10px;
  align-items: center;
`;

export const CategoryText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const CardContainer = styled.View`
  margin-top: 20px;
  width: 100%;
  align-self: center;
  overflow: hidden;
`;

export const Card = styled.View`
  background-color: #f9c2ff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 10px;
  width: 300px;
  align-items: center;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CardDescription = styled.Text`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const SearchButton = styled.TouchableOpacity`
  background-color: #ccc;
  padding-vertical: 8px;
  padding-horizontal: 16px;
  border-radius: 6px;
`;

export const SearchButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;