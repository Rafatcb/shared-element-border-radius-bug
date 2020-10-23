import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SharedElement } from 'react-navigation-shared-element';

const Second = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SharedElement id="enter">
        <View style={styles.circle} />
      </SharedElement>
    </SafeAreaView>
  );
};

const sharedElements = () => {
  return ['enter'];
};

Second.sharedElements = sharedElements;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  circle: {
    backgroundColor: '#6f42c1',
    borderRadius: 500,
    height: 100,
    width: 100,
  },
});

export { Second };
