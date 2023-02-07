import {Avatar, Button} from '@rneui/themed';
import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {ButtonAttendance} from '../../components/ButtonAttendance';
import {ButtonDirection} from '../../components/ButtonDirection';
import {Student} from '../../interfaces/Student';

export const ScreenStudent = () => {
  const studentsList: Student[] = [
    {
      id: 1,
      first_name: 'Webb',
      last_name: 'Dorian',
      email: 'wdorian0@pinterest.com',
      gender: 'Male',
      present: '',
    },
    {
      id: 2,
      first_name: 'Courtnay',
      last_name: 'Bricket',
      email: 'cbricket1@printfriendly.com',
      gender: 'Male',
      present: '',
    },
    {
      id: 3,
      first_name: 'Kyle',
      last_name: 'Saunter',
      email: 'ksaunter2@hao123.com',
      gender: 'Male',
      present: '',
    },
    {
      id: 4,
      first_name: 'Bob',
      last_name: 'Friend',
      email: 'bfriend3@oracle.com',
      gender: 'Male',
      present: '',
    },
    {
      id: 5,
      first_name: 'Siffre',
      last_name: 'Issacov',
      email: 'sissacov4@cmu.edu',
      gender: 'Male',
      present: '',
    },
  ];

  const [currentStudent, setCurrentStudent] = useState<Student>({
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    present: '',
  });

  const [indexStudent, setIndexStudent] = useState<number>(0);

  const attendance = () => {
    setCurrentStudent(studentsList[indexStudent]);
  };

  const present = () => {
    currentStudent.present = 'Present';
  };

  const nextStudent = () => {
    setIndexStudent(indexStudent + 1);
  };

  const previousStudent = () => {
    setIndexStudent(indexStudent - 1);
  };

  useEffect(() => {
    console.log(indexStudent);
    attendance();
  }, [indexStudent]);
  return (
    <>
      <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
        <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
          <Text style={{fontFamily: 'JosefinSans-Bold', fontSize: 50,color: 'lightpink'}}>
            N°{indexStudent + 1}
          </Text>
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
      <Text style={{textAlign: 'center'}}>
        Show the current student to your class!
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
        <ButtonAttendance
          title="FAULT"
          color="red"
          icon="exclamation-triangle"
        />
        <ButtonAttendance title="PRESENT" color="green" icon="check-circle" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'stretch',
        }}>
        {indexStudent > 0 ? (
          <ButtonDirection
            title={'Previous'}
            color="darkblue"
            icon="arrow-circle-left"
            left={true}
            action={previousStudent}
          />
        ) : (
          <></>
        )}
        {indexStudent < studentsList.length - 1 ? (
          <ButtonDirection
            title={'Next'}
            color="darkblue"
            icon="arrow-circle-right"
            left={false}
            action={nextStudent}
          />
        ) : (
          <></>
        )}
      </View>
    </>
  );
};
