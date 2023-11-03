import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import courseModel from './courseModel';


const CourseListScreen = ({ navigation }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses([courseModel, courseModel, courseModel]); 
  }, []);


  const navigateToCourseDetails = (course) => {
    navigation.navigate('CourseDetails', { course });
  };

  return (
    <View style={{justifyContent:"center",alignContent:"center",alignItems:"center",marginTop:100}}> 
      <Text>Course List</Text>
      <View style={{height:'auto',marginTop:"3%"}}  >
      <FlatList 
        data={courseModel}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToCourseDetails(item)}>
            <Text>{item.name}</Text>
            <Text>{item.instructor}</Text>
          </TouchableOpacity>
        )}
      />
      </View>
    </View>
  );
};

export default CourseListScreen;
