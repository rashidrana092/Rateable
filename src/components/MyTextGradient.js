import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearTextGradient } from "react-native-text-gradient";

const MyTextGradient = (props) => {
  return (
    <View>
       <LinearTextGradient
  style={{ fontWeight: "bold", fontSize: 25, marginHorizontal: 100}}
  locations={[0, 1]}
  colors={["red", "blue"]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
>
<Text>{props.nametext}</Text>
</LinearTextGradient>
    </View>
  )
}

export default MyTextGradient