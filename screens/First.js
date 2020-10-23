import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SharedElement } from 'react-navigation-shared-element';

export const First = ({ navigation }) => {
  function goToSecond() {
    navigation.navigate('Second');
  }

  return (
    <SafeAreaView style={styles.container}>
      <SharedElement id="enter">
        <View style={styles.view}>
          <Pressable onPress={goToSecond} style={styles.button}>
            <Text>Navigate</Text>
          </Pressable>
        </View>
      </SharedElement>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderRadius: 16,
    backgroundColor: '#fafafa',
    padding: 16,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  view: {
    backgroundColor: '#000',
    borderRadius: 16,
    height: 300,
    justifyContent: 'center',
    width: 300,
  },
});
