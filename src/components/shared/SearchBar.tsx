import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Colors, defaultStyles } from '@/constants'
import {Ionicons} from "@expo/vector-icons"

const SearchBar = ({searchquery, setSearchquery}:{
  searchquery:string, setSearchquery:React.Dispatch<string>
}) => {
  return (
    <View
    style={{
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: Colors.Gray,
      marginTop: 20,
      paddingVertical: 15,
      borderRadius: 12,
      paddingLeft: 10,
      gap: 10,
    }}
  >
    <Ionicons name="search-sharp" size={24} color={"#000"} />
    <TextInput
      placeholder="Search Products"
      style={defaultStyles.input}
      value={searchquery}
      onChangeText={setSearchquery}
      onChange={(ev) => console.log("Search Query Changed", ev.target)}
    />
  </View>
  )
}

export default SearchBar