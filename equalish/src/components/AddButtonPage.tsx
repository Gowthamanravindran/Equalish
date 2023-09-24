// AddButtonPage.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AddButtonPage: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Your page content here */}
      <Text>This is the AddButtonPage</Text>

      {/* Add button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue', // Customize the button's appearance
    padding: 10,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default AddButtonPage;
