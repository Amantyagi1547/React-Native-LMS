import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import courseModel from './courseModel';

const StudentDashboardScreen = ({ route,navigation }) => {
  const { course } = route.params;
  const [enrolledCourses, setEnrolledCourses] = useState([]);
console.log(course)
  useEffect(() => {
    setEnrolledCourses([courseModel, courseModel]);
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
