// CourseListScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import courseModel from './courseModel';
import axios from 'axios';


const CourseListScreen = ({ navigation }) => {
  const [courses, setCourses] = useState([]);
  // console.log(courses)
//   const[myUserData,SetMyUserDate]=useState();
//   const getUserData=async()=>{
//   axios.get(`https://almenolms-default-rtdb.firebaseio.com/course.json`) //integration of api
  
//   .then(response => {
//     var a="-NiDVWJ8r30kl2cFtxT5"
//      console.log(typeof(response.data));  
//      SetMyUserDate(response.data)
//      console.log("------------")
//      console.log(response.data)
//   })
//   .catch(error => {
//     console.error(error);
//   }); 
  
  
// }
  useEffect(() => {
    // getUserData();
    // You can fetch courses from an API or use a dummy data array
    setCourses([courseModel, courseModel, courseModel]); // Sample data
  }, []);

  // console.log(myUserData)

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
            {/* Display other basic course information */}
          </TouchableOpacity>
        )}
      />
      </View>
    </View>
  );
};

export default CourseListScreen;
