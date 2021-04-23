import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  Alert,
  StyleSheet
} from 'react-native'
import { v4 as uuidv4 } from 'uuid'
import Header from './Components/Header'
import ListItem from './Components/ListItem'
import AddItem from './Components/AddItem'

const App = () => {
  const [items, setItems] = useState([
    {
      id: uuidv4(),
      text: 'Milk'
    },
    {
      id: uuidv4(),
      text: 'Eggs'
    },
    {
      id: uuidv4(),
      text: 'Bread'
    },
    {
      id: uuidv4(),
      text: 'Juice'
    }
  ])

  const createItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{ text: 'Ok' }])
    } else {
      setItems((prevItems) => {
        return [{ id: uuidv4(), text }, ...prevItems]
      })
    }
  }

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter(item => item.id != id)
    })
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem createItem={createItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 60
  }
})

export default App
