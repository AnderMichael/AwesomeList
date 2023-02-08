import {useEffect} from 'react';
import {Text} from 'react-native';
import {useStudents} from '../../hooks/useStudents';
import {useNavigation} from '@react-navigation/native';
import {StudentsInformation} from '../../components/StudentsInformation';
import {RowButtonsAttendance} from '../../components/RowButtonsAttendance';
import {DirectionButtons} from '../../components/DirectionButtons';

export const ScreenStudent = () => {
  const navigation = useNavigation();
  const {
    studentsListLength,
    previousStudent,
    nextStudent,
    attendance,
    indexStudent,
    currentStudent,
  } = useStudents();

  useEffect(() => {
    console.log(indexStudent);
    attendance();
  }, [indexStudent]);

  return (
    <>
      <StudentsInformation
        currentStudent={currentStudent}
        indexStudent={indexStudent}
      />
      <Text style={{textAlign: 'center'}}>
        Show the current student to your class!
      </Text>

      <RowButtonsAttendance
        previousStudent={previousStudent}
        nextStudent={nextStudent}
      />

      <DirectionButtons
        indexStudent={indexStudent}
        navigation={navigation}
        nextStudent={nextStudent}
        previousStudent={previousStudent}
        studentsNumber={studentsListLength}
      />
    </>
  );
};
