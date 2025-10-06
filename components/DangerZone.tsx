import { createSettingsStyles } from '@/assets/styles/settings.styles'
import { api } from '@/convex/_generated/api'
import { useTheme } from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { useMutation } from 'convex/react'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'

const DangerZone = () => {
    const { colors } = useTheme()
    const settingsStyles = createSettingsStyles(colors);
    const clearAllTodos = useMutation(api.todos.deleteAllTodo);


    const handleResetApp = () => {
        Alert.alert(
            "Reset App",
            "⚠️ This will delete all your todos and cannot be undone. Are you sure you want to proceed?",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Reset", style: "destructive", onPress: async () => {
                    try {
                        const result = await clearAllTodos();
                        Alert.alert(
                            "App reset",
                            `Successfully deleted ${result.deletedCount} todo${result.deletedCount === 1 ? "" : "s"}. Your app has been reset.`
                        )
                    } catch (error) {
                        Alert.alert("Error", "Failed to reset app. Please try again.")
                    }
                }}
            ]
        )
    }
  return (
    <LinearGradient colors={colors.gradients.surface} style={settingsStyles.section}>
          <Text style={settingsStyles.sectionTitleDanger}>Danger Zone</Text>
          <TouchableOpacity
              style={settingsStyles.actionButton}
              onPress={handleResetApp}
              activeOpacity={0.7}
          >
              <View style={settingsStyles.actionLeft}>
                  <LinearGradient colors={colors.gradients.danger} style={settingsStyles.actionIcon}>
                      <Ionicons name='trash' size={18} color="#ffff"/>
                  </LinearGradient>
                  <Text style={settingsStyles.actionTextDanger}>Reset App</Text>
              </View>
                <Ionicons name='chevron-forward' size={18} color={colors.danger}/>
          </TouchableOpacity>
    </LinearGradient>
  )
}

export default DangerZone