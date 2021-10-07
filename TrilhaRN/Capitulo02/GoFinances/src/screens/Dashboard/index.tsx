import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
} from './styles';

const Dashboard: React.FC = () => {
  const data = [
    {
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: { name: 'Vendas', icon: 'dollar-sign' },
      date: '13/04/2020',
    },
    {
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: { name: 'Vendas', icon: 'dollar-sign' },
      date: '13/04/2020',
    },
    {
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: { name: 'Vendas', icon: 'dollar-sign' },
      date: '13/04/2020',
    },
  ];
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/57682027?v=4',
              }}
            />
            <User>
              <UserGreeting>Ola, </UserGreeting>
              <UserName>João</UserName>
            </User>
          </UserInfo>
          <Icon name='power' />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type='up'
          title='Entradas'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
        />
        <HighlightCard
          type='down'
          title='Saídas'
          amount='R$ 1.259,00'
          lastTransaction='Última entrada dia 13 de abril'
        />
        <HighlightCard
          type='total'
          title='Entradas'
          amount='R$ 16.141,00'
          lastTransaction='Última entrada dia 13 de abril'
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace(),
          }}
        />
      </Transactions>
    </Container>
  );
};

export default Dashboard;
