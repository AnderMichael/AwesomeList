import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from '@rneui/themed';
import {Student} from '../interfaces/Student';

interface StudentsInformationProps {
  indexStudent: number;
  currentStudent: Student;
}
export const StudentsInformation = ({
  indexStudent,
  currentStudent,
}: StudentsInformationProps) => {
  return (
    <>
      <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
        <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
          <Text style={styles.listNumber}>N°{indexStudent + 1}</Text>
        </View>
        <View style={{alignItems: 'center', flex: 1}}>
          <Text style={{fontFamily: 'JosefinSans-Light', fontSize: 35}}>
            {currentStudent.last_name}
          </Text>
          <Text style={{fontFamily: 'JosefinSans-Light', fontSize: 35}}>
            {currentStudent.first_name}
          </Text>
        </View>
      </View>
      <Avatar
        size={180}
        rounded
        source={{
          uri: `https://randomuser.me/api/portraits/men/1${indexStudent}.jpg`,
        }}
        containerStyle={{
          alignSelf: 'center',
          borderColor: 'black',
          borderWidth: 1,
        }}
      />
    </>
  );
};
const styles = StyleSheet.create({
  listNumber: {
    fontFamily: 'JosefinSans-Bold',
    fontSize: 50,
    color: 'lightpink',
  },
});
