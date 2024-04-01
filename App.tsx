import { StatusBar } from "expo-status-bar"
import React from "react"
import { styled } from "nativewind"

import { Text, View } from "react-native"
const StyledView = styled(View)
const StyledText = styled(Text)

export default function App() {
  return (
    <StyledView className="flex-1 items-left justify-center bg-amber-400">
      <StyledText tw="font-bold italic">
        Open up App.js to start working on your app!!
      </StyledText>
      <StatusBar style="auto" />
    </StyledView>
  )
}
