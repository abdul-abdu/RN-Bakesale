import React, { ReactElement } from 'react'
import { SafeAreaView } from 'react-native'

interface Props {
  children: React.ReactNode
}

export function SafeArea({ children }: Props): ReactElement {
  return <SafeAreaView>{children}</SafeAreaView>
}
