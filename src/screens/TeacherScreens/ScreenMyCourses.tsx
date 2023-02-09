import {Card, Image, Text} from '@rneui/base';
import {TouchableOpacity, View} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {CardCourse} from '../../components/CardCourse';
import {colorsApp} from '../../constants/colorsApp';
import {useCourses} from '../../hooks/useCourses';
export const ScreenMyCourses = () => {
  const coursesList = useCourses();
  return (
    <>
      <Text
        style={{
          fontFamily: 'JosefinSans-Bold',
          fontSize: 45,
          color: colorsApp.RED_COLOR,
          paddingVertical: 5,
        }}>
        My Courses!
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginVertical: 5}}>
        {coursesList.map(course => (
          <CardCourse
            name={course.id}
            time={course.date}
            students={course.students}
            key={course.id}
          />
        ))}
      </ScrollView>
    </>
  );
};
