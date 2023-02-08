import {StyleSheet, Text, View} from 'react-native';
import {Button} from '@rneui/themed';
import {Icon} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';
import {constantsStackLists} from '../../constants/constantsStackLists';
export const ScreenStartAwesomeAttendance = ({route}: any) => {
  const {name, students, time} = route.params;
  const navigation = useNavigation();
  return (
    <>
      <Text>{name}</Text>
      <Text>Students: {students}</Text>
      <Text>Time: {time}</Text>
      <Text style={styles.title}>
        Are you ready for{'\n'}Awesome Attendance?
      </Text>
      <View style={{justifyContent: 'space-between'}}>
        <Button
          radius="md"
          type="solid"
          color="black"
          containerStyle={{marginVertical: 10}}
          onPress={() =>
            navigation.navigate(constantsStackLists.students.screen)
          }>
          Start Attendance <Icon name="person" color="white" />
        </Button>
        <Button
          radius="md"
          type="solid"
          color="black"
          containerStyle={{marginVertical: 10}}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" color="white" /> Back
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
