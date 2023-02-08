import {useNavigation} from '@react-navigation/native';
import {Image, Text} from '@rneui/base';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {constantsStackLists} from '../constants/constantsStackLists';

interface CardCourseProps {
  name: string;
  students: number;
  time: string;
}

export const CardCourse = ({name, students, time}: CardCourseProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(constantsStackLists.start.screen, {
          name,
          students,
          time,
        })
      }>
      <View style={styles.card}>
        <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image
              source={{
                uri: 'https://image.winudf.com/v2/image/Y29tLmFwdGl0YWxlbi5tYXJpZW5nYXJ0ZW5fc2NyZWVuXzBfbmVrZjZsNnY/screen-0.jpg?fakeurl=1&type=.webp',
              }}
              style={styles.image}
            />
          </View>

          <View style={{flex: 2, justifyContent: 'space-around'}}>
            <Text>{name}</Text>
            <Text>Students: {students}</Text>
            <Text>Time: {time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 30,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'grey',
    padding: 10,
  },
  image: {
    width: 90,
    height: 130,
    marginRight: 15,
  },
});
