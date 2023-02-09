import {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {attend, useStudents} from '../../hooks/useStudents';
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
    attendanceRow,
  } = useStudents();

  const changeAttend = (attend: string) => {
    attendanceList[indexStudent].calification = attend;
    setCurrentAttend(attend);
  };

  const [attendanceList, setAttendanceList] = useState(attendanceRow);
  const [currentAttend, setCurrentAttend] = useState('');
  useEffect(() => {
    attendance();
    setCurrentAttend(attendanceList[indexStudent].calification);
  }, [currentAttend, indexStudent]);

  return (
    <>
      <StudentsInformation
        currentStudent={currentStudent}
        indexStudent={indexStudent}
      />
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'JosefinSans-Bold',
          fontSize: 15,
        }}>
        Show the current student to your class!
      </Text>

      <RowButtonsAttendance changeAttend={changeAttend} state={currentAttend} />
      {attendanceList[indexStudent].calification === 'NA' ? (
        <></>
      ) : (
        <DirectionButtons
          indexStudent={indexStudent}
          navigation={navigation}
          nextStudent={nextStudent}
          previousStudent={previousStudent}
          studentsNumber={studentsListLength}
        />
      )}
    </>
  );
};
