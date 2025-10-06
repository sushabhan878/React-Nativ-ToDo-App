import { createSettingsStyles } from '@/assets/styles/settings.styles'
import DangerZone from '@/components/DangerZone'
import Preference from '@/components/Preference'
import ProgressStats from '@/components/ProgressStats'
import { useTheme } from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Settings = () => {

  const { colors, isDarkMode, toggleDarkMode } = useTheme();

  const settingsStyles = createSettingsStyles(colors)
  return (
    <LinearGradient colors={colors.gradients.background} style={settingsStyles.container}>
      <SafeAreaView style={settingsStyles.safeArea}>
        {/* Header */}
        <View style={settingsStyles.header}>
          <View style={settingsStyles.titleContainer}>
            <LinearGradient colors={colors.gradients.primary} style={settingsStyles.iconContainer}>
              <Ionicons name='settings' size={28} color="#ffff"/>
            </LinearGradient>
            <Text style={settingsStyles.title}>Settings</Text>
          </View>
        </View>
        {/* Scrollview */}
        <ScrollView style={settingsStyles.scrollView} contentContainerStyle={settingsStyles.content} showsVerticalScrollIndicator={false}>
          <ProgressStats />
          <Preference />
          <DangerZone/>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default Settings