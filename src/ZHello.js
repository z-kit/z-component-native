/**
 * Copyright (c) 2017 z-kit contributors.
 * @license MIT LICENSE
 * https://github.com/z-kit/z-hello-native
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Helvetica',
    color: 'blue',
  },
});

export function ZHello() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello!
      </Text>
    </View>
  );
}

export default {
  ZHello,
};
