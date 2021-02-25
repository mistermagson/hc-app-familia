/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
if(__DEV__) {
    import ('./config/ReactotronConfig');
}
import React from 'react';
import { StyleSheet,View} from 'react-native';

import Routes from './src/routes';

const App: () => React$Node = () => {

  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});

export default App;
