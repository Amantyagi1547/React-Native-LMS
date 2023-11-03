import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

const CourseDetailsScreen = ({ route,navigation }) => {
  const { course } = route.params;

  const enrollInCourse = () => {
    alert("Enrollment Confirmed")
    navigation.navigate('StudentDashboardScreen',{course})
  };

  return (
    <View style={{justifyContent:"center",alignContent:"center",alignItems:"center",marginTop:100}}>
      <Text>{course.name}</Text>
      <Text>Instructor's name: {course.instructor}</Text>
      <Text>Course Description: {course.description}</Text>
      <Text>Enrollment Status: {course.enrollmentStatus}</Text>
      <Text>Course Duration: {course.duration}</Text>
      <Text>Schedule: {course.schedule}</Text>
      <Text>location: {course.location}</Text>
      <Text>prerequisites: {course.prerequisites}</Text>
      <Button
        title="Enroll"
        onPress={enrollInCourse}
        disabled={course.enrollmentStatus !== 'Open'}
      />
    </View>
  );
};

export default CourseDetailsScreen;
