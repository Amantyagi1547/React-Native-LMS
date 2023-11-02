// CourseDetailsScreen.js
import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

const CourseDetailsScreen = ({ route,navigation }) => {
  const { course } = route.params;

  const enrollInCourse = () => {
    alert("Enrollment Confirm")
    navigation.navigate('StudentDashboardScreen',{course})
    // Implement your enrollment logic here
    // Display a confirmation message
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
      {/* <Text>syllabus: {course.syllabus}</Text> */}

      {/* Display other course details */}
      {/* Add other course details like description, duration, schedule, location, prerequisites */}
      <Button
        title="Enroll"
        onPress={enrollInCourse}
        disabled={course.enrollmentStatus !== 'Open'}
      />
    </View>
  );
};

export default CourseDetailsScreen;
