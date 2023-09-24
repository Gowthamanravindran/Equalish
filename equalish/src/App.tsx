// App.tsx or your main application file

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AddButtonPage from './components/AddButtonPage';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Lets create our first item</Text>
      {/* Other components or navigation */}
      {/* Render your AddButtonPage component */}
      <AddButtonPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
