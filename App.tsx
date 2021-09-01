import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fetchInitialDeals} from './src/ajax';
import DealList from './src/components/DealList';
import DealDetail from './src/components/DealDetail';
import {IDeal} from './types';
import SearchBar from './src/components/SearchBar';

const App = (): JSX.Element => {
  const [deals, setDeals] = useState([]);
  const [currentDealId, setCurrentDealId] = useState(null);

  useEffect(() => {
    (async () => {
      const deals = await fetchInitialDeals();
      setDeals(deals);
    })();
  }, []);

  const currentDeal = (): IDeal | undefined => {
    return deals.find((deal: IDeal) => deal.key === currentDealId);
  };

  const unSetCurrentDeal = () => {
    setCurrentDealId(null);
  };

  if (currentDealId) {
    return (
      <DealDetail initialDealData={currentDeal()} onBack={unSetCurrentDeal} />
    );
  }

  if (deals.length > 0) {
    return (
      <View style={styles.main}>
        <SearchBar />
        <DealList deals={deals} onItemPress={setCurrentDealId} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bakesale</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
  },
  main: {
    marginTop: 30,
    flex: 1,
  },
});
