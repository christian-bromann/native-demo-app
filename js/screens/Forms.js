import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import FormComponents from '../components/FormComponents';
import { STATUS_BAR_HEIGHT } from '../components/StatusBar';

class FormsScreen extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <FormComponents/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    marginTop: STATUS_BAR_HEIGHT,
    paddingBottom: 40,
  },
});

export default FormsScreen;
