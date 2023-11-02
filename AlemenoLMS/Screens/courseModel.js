export default [

{
  id: 1, // Unique identifier for the course
  name: 'Introduction to React Native',
  instructor: 'John Doe', // Name of the course instructor
  description: 'Learn the basics of React Native development and build your first mobile app.',
  enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'InProgress' 
  thumbnail: 'your.image.here', //Link to the course thumbnail
  duration: '8 weeks', // Duration of the course
  schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
  location: 'Online',
  prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
  syllabus: [{
      week: 1,
      topic: 'Introduction to React Native',
      content: 'Overview of React Native, setting up your development environment.'
  },{
      week: 2,
      topic: 'Building Your First App',
      content: 'Creating a simple mobile app using React Native components.'
  },
    // Additional weeks and topics...
  ],
  students: [
  {
    id: 101,
    name: 'Alice Johnson',
    email: 'alice@example.com',
  },{
      id: 102,
      name: 'Bob Smith',
      email: 'bob@example.com',
  },
  
    // Additional enrolled students...
  ],
},

{  
  id: 2, // Unique identifier for the course
  name: 'Introduction to Angular',
  instructor: 'Paul smith', // Name of the course instructor
  description: 'Learn the basics of Angular development and build your first web app.',
  enrollmentStatus: 'Closed', // Can be 'Open', 'Closed', or 'InProgress' 
  thumbnail: 'your.image.here', //Link to the course thumbnail
  duration: '8 weeks', // Duration of the course
  schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
  location: 'Online',
  prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
  syllabus: [{
      week: 1,
      topic: 'Introduction to Angular',
      content: 'Overview of Angular, setting up your development environment.'
  },{
      week: 2,
      topic: 'Building Your First App',
      content: 'Creating a simple mobile app using Angular components.'
  },
    // Additional weeks and topics...
  ],
  students: [
  {
    id: 101,
    name: 'Alice Johnson',
    email: 'alice@example.com',
  },{
      id: 102,
      name: 'Bob Smith',
      email: 'bob@example.com',
  },]
},

{  
  id: 3, // Unique identifier for the course
  name: 'Introduction to Big Data and Hadoop',
  instructor: 'Sarvesh prasad', // Name of the course instructor
  description: 'Learn the basics of Big Data and Hadoop.',
  enrollmentStatus: 'InProgress', // Can be 'Open', 'Closed', or 'InProgress' 
  thumbnail: 'your.image.here', //Link to the course thumbnail
  duration: '8 weeks', // Duration of the course
  schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
  location: 'Online',
  prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
  syllabus: [{
      week: 1,
      topic: 'Introduction to Big Data and Hadoop',
      content: 'Overview of Angular, setting up your development environment.'
  },{
      week: 2,
      topic: 'Building Your First App',
      content: 'Creating a simple mobile app using Big Data and Hadoop components.'
  },
    // Additional weeks and topics...
  ],
  students: [
  {
    id: 101,
    name: 'Alice Johnson',
    email: 'alice@example.com',
  },{
      id: 102,
      name: 'Bob Smith',
      email: 'bob@example.com',
  },]
}
]