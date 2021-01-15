import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import Auth from '../modules/auth'
const LoginScreen = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState()
  const auth = new Auth({ host: 'https://newsroom-api.herokuapp.com/api' })

  const authenticateUser = () => {

    auth.signIn(email, password)
      .then((resp) => {
        props.navigation.navigate('Start')
      })
      .catch(e => {
        setMessage(e.response.data.errors[0])
      })
  }
  return (
    <View style={{ flex: 1, margin: 10 }}>
      <Text>Login screen</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        title="Log in"
        color='purple'
        onPress={() => authenticateUser()}
      />

      { message &&
        <Text style={{ color: 'red' }}>{message}</Text>
      }
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    padding: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
})
