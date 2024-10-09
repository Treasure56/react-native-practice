import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { H1, H2, H3, H4 } from '@/components/text'

export default function Index() {
  return (
    <View>
      <Text>hello</Text>
      <Link href={"/about"}>
        <H1  style={{color:"red"}}>About</H1>
      </Link>
      <H2 style={{color:"blue"}}  numberOfLines={2} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, doloribus. Nulla est provident in quasi nostrum, totam impedit corrupti vel modi suscipit velit dolorem delectus eius deleniti fugiat quae voluptas.
      </H2>
      <H3 style={{color:"green"}}>Text</H3>
      <H4 style={{color:"purple"}}>Text</H4>
    </View>
  )
}