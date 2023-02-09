import {StyleSheet, Text, View} from 'react-native';
import {Button} from '@rneui/themed';
import {Icon} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';
import {constantsStackLists} from '../../constants/constantsStackLists';
import {colorsApp} from '../../constants/colorsApp';
import { createContext } from 'react';
export const ScreenStartAwesomeAttendance = ({route}: any) => {
  const {name, students, time} = route.params;
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.descriptionContainer}>
        <Text style={styles.titleDescription}>{name}</Text>
        <Text style={styles.courseDescription}>Students: {students}</Text>
        <Text style={styles.courseDescription}>Time: {time}</Text>
      </View>
      <View style={styles.areYouReadyContainer}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            backgroundColor: colorsApp.RED_COLOR,
            borderRadius: 20,
            padding: 20
          }}>
          <Text style={styles.title}>
            Are you ready for{'\n'}Awesome Attendance?
          </Text>
          <Button
            radius="md"
            type="solid"
            color="black"
            containerStyle={{marginVertical: 10}}
            titleStyle={styles.titleButton}
            onPress={() =>
              navigation.navigate(constantsStackLists.students.screen)
            }>
            <Icon name="play-arrow" color="white" size={30} /> Start Attendance
          </Button>
          <Button
            radius="md"
            type="solid"
            color="black"
            containerStyle={{marginVertical: 10}}
            titleStyle={styles.titleButton}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" color="white" size={30} /> Back
          </Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'JosefinSans-Bold',
  },
  descriptionContainer: {
    padding: 20,
    justifyContent: 'space-around',
    flex: 2,
    backgroundColor: colorsApp.VIOLET_COLOR,
    borderRadius: 30,
  },
  titleDescription: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 30,
    textAlign: 'center',
  },
  courseDescription: {
    fontFamily: 'JosefinSans-Light',
    fontSize: 25,
    textAlign: 'justify',
  },
  titleButton: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 20,
    textAlign: 'center',
  },
  areYouReadyContainer: {
    flex: 3,
    marginVertical: 5,
  },
});
