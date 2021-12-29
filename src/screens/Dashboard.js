import React from 'react'
import { View, StyleSheet, Platform, Alert } from 'react-native'
import { FAB } from 'react-native-paper'
import { WebView } from 'react-native-webview'
import { logoutUser } from '../api/auth-api'

export default function Dashboard() {
  const createTwoButtonAlert = () => {
    return Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => logoutUser() },
    ])
  }
  return Platform.OS === 'web' ? (
    <iframe src="https://www.marketcube.io/" height={400} width={300} />
  ) : (
    <View style={{ flex: 1 }}>
      <>
        <WebView
          originWhitelist={['*']}
          source={{ uri: 'https://www.marketcube.io/', baseUrl: '' }}
          style={{ flex: 1, height: 2, marginTop: 30 }}
        />
        <FAB
          label="Logout"
          icon="logout"
          style={styles.fab}
          onPress={() => createTwoButtonAlert()}
        />
      </>
    </View>
  )
}

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#36444f',
  },
})
