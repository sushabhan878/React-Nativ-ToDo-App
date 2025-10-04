import { createHomeStyles } from "@/assets/images/styles/home.styles";
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import { useTheme } from "@/hooks/useTheme";
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const homeStyles = createHomeStyles(colors);
  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
      <StatusBar barStyle={colors.statusBarStyle} />
    <SafeAreaView style={homeStyles.safeArea}>
      <TouchableOpacity onPress={toggleDarkMode}>  
        <Text>Dark Mode</Text>
        </TouchableOpacity>
        <Header />
        <TodoInput/>
      </SafeAreaView>
      </LinearGradient>
  );
}
