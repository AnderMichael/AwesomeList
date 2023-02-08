import {Card, Image, Text} from '@rneui/base';
import {TouchableOpacity, View} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {CardCourse} from '../../components/CardCourse';
import {useCourses} from '../../hooks/useCourses';
export const ScreenMyCourses = () => {
  const coursesList = useCourses();
  return (
    <>
      <Text>My Courses!</Text>
      <ScrollView>
        {coursesList.map(course => <CardCourse name={course.id} time={course.date} students={course.students} key={course.id}/>)}
      </ScrollView>
    </>
  );
};
