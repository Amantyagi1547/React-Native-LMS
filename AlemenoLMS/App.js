import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CourseDetailsScreen from './Screens/CourseDetailsScreen';
import CourseListScreen from './Screens/CourseListScreen';
import StudentDashboardScreen from './Screens/StudentDashboardScreen';

export default function App() {
    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='CourseListScreen'>
    <Stack.Screen name="CourseListScreen" component={CourseListScreen} options={{headerShown:false}}/>
    <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} options={{headerShown:false}}/>
    <Stack.Screen name="StudentDashboardScreen" component={StudentDashboardScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>

  );
}

