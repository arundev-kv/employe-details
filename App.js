/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {COLORS} from './src/constants';
import {EmployeeListScreen} from './src/screens/EmployeeListScreen';

const App = () => {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
            <EmployeeListScreen />
        </SafeAreaView>
    );
};

export default App;
