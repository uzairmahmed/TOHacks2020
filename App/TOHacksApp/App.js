import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { View, Text, Card, Button } from 'react-native-ui-lib';

import { NativeRouter, Route, Link } from "react-router-native";

import LoginPage from "./components/LoginPage.js"
import DashboardPage from "./components/DashboardPage.js"

export default function App() {
    return (
      <NativeRouter>
        <Route exact path="/" component={DashboardPage} />
        <Route path="/dash" component={DashboardPage} />
      </NativeRouter>
    );
}
