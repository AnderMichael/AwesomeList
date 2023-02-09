import {Student} from '../interfaces/Student';
import {useEffect, useState} from 'react';

export interface attend {
  calification: string;
}

export const useStudents = (course: any) => {
  const studentsLists = new Map<any, Student[]>([
    [
      '5A',
      [
        {
          id: 1,
          first_name: 'Webb',
          last_name: 'Dorian',
        },
        {
          id: 2,
          first_name: 'Courtnay',
          last_name: 'Bricket',
        },
        {
          id: 3,
          first_name: 'Kyle',
          last_name: 'Saunter',
        },
        {
          id: 4,
          first_name: 'Bob',
          last_name: 'Friend',
        },
        {
          id: 5,
          first_name: 'Siffre',
          last_name: 'Issacov',
        },
      ],
    ],
    [
      '5B',
      [
        {
          id: 6,
          first_name: 'Hillyer',
          last_name: 'Laborda',
        },
        {
          id: 7,
          first_name: 'Rockie',
          last_name: 'De Laspee',
        },
        {
          id: 8,
          first_name: 'Melicent',
          last_name: 'Taffley',
        },
        {
          id: 9,
          first_name: 'Portie',
          last_name: 'Morton',
        },
        {
          id: 10,
          first_name: 'Adrian',
          last_name: 'Marling',
        },
      ],
    ],
    [
      '5C',
      [
        {
          id: 11,
          first_name: 'Carly',
          last_name: 'Coulthard',
        },
        {
          id: 12,
          first_name: 'Rosemaria',
          last_name: 'Janz',
        },
        {
          id: 13,
          first_name: 'Jamesy',
          last_name: 'Buske',
        },
        {
          id: 14,
          first_name: 'Marcos',
          last_name: 'Deniset',
        },
        {
          id: 15,
          first_name: 'Aleta',
          last_name: 'Prynne',
        },
      ],
    ],
    [
      '5D',
      [
        {
          id: 16,
          first_name: 'Willi',
          last_name: 'Bratt',
        },
        {
          id: 17,
          first_name: 'Alaster',
          last_name: 'Chamberlain',
        },
        {
          id: 18,
          first_name: 'Fallon',
          last_name: 'Dotterill',
        },
        {
          id: 19,
          first_name: 'Zara',
          last_name: 'Kerr',
        },
        {
          id: 20,
          first_name: 'Maurie',
          last_name: 'Osan',
        },
      ],
    ],
    [
      '6A',
      [
        {
          id: 21,
          first_name: 'Jdavie',
          last_name: 'Beeden',
        },
        {
          id: 22,
          first_name: 'Bartie',
          last_name: 'Kaine',
        },
        {
          id: 23,
          first_name: 'Woodman',
          last_name: 'Gookey',
        },
        {
          id: 24,
          first_name: 'Luisa',
          last_name: 'Handman',
        },
        {
          id: 25,
          first_name: 'Patrice',
          last_name: 'Auten',
        },
      ],
    ],
    [
      '1C',
      [
        {
          id: 35,
          first_name: 'Michelle',
          last_name: 'Furbank',
        },
        {
          id: 36,
          first_name: 'Gustavo',
          last_name: 'Tollet',
        },
        {
          id: 37,
          first_name: 'Lelia',
          last_name: 'Rostern',
        },
        {
          id: 38,
          first_name: 'Reamonn',
          last_name: 'Rhymer',
        },
        {
          id: 39,
          first_name: 'Radcliffe',
          last_name: 'Biaggelli',
        },
        {
          id: 40,
          first_name: 'Winifield',
          last_name: 'Linge',
        },
      ],
    ],
    [
      '1D',
      [
        {
          id: 41,
          first_name: 'Lincoln',
          last_name: 'Lemon',
        },
        {
          id: 42,
          first_name: 'Zora',
          last_name: 'Sutlieff',
        },
        {
          id: 43,
          first_name: 'Tabbitha',
          last_name: 'Glancy',
        },
        {
          id: 44,
          first_name: 'Trixi',
          last_name: 'Gallaher',
        },
        {
          id: 45,
          first_name: 'Dusty',
          last_name: 'Hamerton',
        },
      ],
    ],
  ]);

  const studentsList = studentsLists.get(course);

  const studentsListLength = studentsList.length;

  const attendanceRow: attend[] = [];

  for (let i = 0; i < studentsListLength; i++) {
    attendanceRow.push({calification: 'NA'});
  }
  const [currentStudent, setCurrentStudent] = useState<Student>({
    id: 0,
    first_name: '',
    last_name: '',
  });

  const [indexStudent, setIndexStudent] = useState<number>(0);

  const attendance = () => {
    setCurrentStudent(studentsList[indexStudent]);
  };

  const nextStudent = () => {
    setIndexStudent(indexStudent + 1);
  };

  const previousStudent = () => {
    setIndexStudent(indexStudent - 1);
  };
  return {
    studentsListLength,
    previousStudent,
    nextStudent,
    attendance,
    indexStudent,
    currentStudent,
    attendanceRow,
  };
};
