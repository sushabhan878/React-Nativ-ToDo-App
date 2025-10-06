import { createSettingsStyles } from '@/assets/styles/settings.styles'
import { useTheme } from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { Switch, Text, View } from 'react-native'

const Preference = () => {


    const [isAutoSync, setIsAutoSync] = useState(true)
    const [isNotificationEnabled, setIsNotificationEnabled] = useState(true)
    const { colors, isDarkMode, toggleDarkMode } = useTheme();
    const settingStyles = createSettingsStyles(colors);
  return (
    <LinearGradient colors={colors.gradients.surface} style={settingStyles.section}>
          <Text style={settingStyles.sectionTitle}>Preferences</Text>
          
          {/* Dark Mode */}
          <View style={settingStyles.settingItem}>
              <View style={settingStyles.settingLeft}>
                  <LinearGradient colors={colors.gradients.primary} style={settingStyles.settingIcon}>
                      <Ionicons name='moon' size={18} color="#ffff"/>
                  </LinearGradient>
                  <Text style={settingStyles.settingText}>Dark Mode</Text>
              </View>
              <Switch
                  value={isDarkMode}
                  onValueChange={toggleDarkMode}
                  thumbColor="#ffff"
                  trackColor={{false: colors.border, true: colors.primary}}
              />
          </View>
          {/* Notifications */}
          <View style={settingStyles.settingItem}>
              <View style={settingStyles.settingLeft}>
                  <LinearGradient colors={colors.gradients.warning} style={settingStyles.settingIcon}>
                      <Ionicons name='notifications' size={18} color="#ffff"/>
                  </LinearGradient>
                  <Text style={settingStyles.settingText}>Notifications</Text>
              </View>
              <Switch
                  value={isNotificationEnabled}
                  onValueChange={() => setIsNotificationEnabled(!isNotificationEnabled)}
                  thumbColor="#ffff"
                  trackColor={{false: colors.border, true: colors.warning}}
              />
          </View>
          {/* Auto Sync */}
          <View style={settingStyles.settingItem}>
              <View style={settingStyles.settingLeft}>
                  <LinearGradient colors={colors.gradients.success} style={settingStyles.settingIcon}>
                      <Ionicons name='sync' size={18} color="#ffff"/>
                  </LinearGradient>
                  <Text style={settingStyles.settingText}>Dark Mode</Text>
              </View>
              <Switch
                  value={isAutoSync}
                  onValueChange={() => setIsAutoSync(!isAutoSync)}
                  thumbColor="#ffff"
                  trackColor={{false: colors.border, true: colors.success}}
              />
         </View>
    </LinearGradient>
  )
}

export default Preference
