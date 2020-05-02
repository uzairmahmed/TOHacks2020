import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { View, Text, Card, Button } from 'react-native-ui-lib';

import { NativeRouter, Route, Link } from "react-router-native";

import LoginPage from "./components/LoginPage.js"
import DashboardPage from "./components/DashboardPage.js"

export default function App() {
    return (
      <NativeRouter>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dash" component={DashboardPage} />
      </NativeRouter>
    );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});