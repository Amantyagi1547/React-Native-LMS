// StudentDashboardScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, ProgressViewIOS } from 'react-native';
import courseModel from './courseModel';

const StudentDashboardScreen = ({ route,navigation }) => {
  const { course } = route.params;
  const [enrolledCourses, setEnrolledCourses] = useState([]);
console.log(course)
  useEffect(() => {
    // Fetch the list of courses the student is enrolled in.
    setEnrolledCourses([courseModel, courseModel]); // Sample data
  }, []);

  return (
    <View style={{justifyContent:"center",alignContent:"center",alignItems:"center",marginTop:100}}>
      <Text>Student Dashboard</Text>
      <Text>{course.name}</Text>
      <Text>Instructor: {course.instructor}</Text>
      <Text>Due Date: {course.dueDate}</Text>

    </View>
  );
};

export default StudentDashboardScreen;
