import {Student} from '../interfaces/Student';
import {useEffect, useState} from 'react';

export interface attend {
  calification: string;
}

export const useStudents = () => {
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

  const studentsListLength = studentsList.length;

  const attendanceRow:attend[]=[];

  for (let i = 0; i < studentsListLength; i++) {
    attendanceRow.push({calification: 'NA'});
  }
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

  const fault = () => {
    currentStudent.present = 'Fault';
  };

  const nextStudent = () => {
    setIndexStudent(indexStudent + 1);
  };

  const previousStudent = () => {
    setIndexStudent(indexStudent - 1);
  };
  return {
    studentsListLength,
    present,
    previousStudent,
    fault,
    nextStudent,
    attendance,
    indexStudent,
    currentStudent,
    attendanceRow,
  };
};
