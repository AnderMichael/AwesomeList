interface Course {
  id: string;
  date: string;
  students: number;
}

export const useCourses = (email: any) => {
  const courses = new Map<any, Course[]>([
    [
      'teacher1@school.com',
      [
        {
          id: '5A',
          date: '14:00-15:20',
          students: 5,
        },
        {
          id: '5B',
          date: '15:20-16:40',
          students: 5,
        },
        {
          id: '5C',
          date: '17:00-18:20',
          students: 5,
        },
        {
          id: '5D',
          date: '15:20-16:40',
          students: 5,
        },
      ],
    ],
    [
      'teacher2@school.com',
      [
        {
          id: '6A',
          date: '17:00-18:20',
          students: 5,
        },
      ],
    ],
    [
      'teacher3@school.com',
      [
        {
          id: '1D',
          date: '15:20-16:40',
          students: 5,
        },
        {
          id: '1C',
          date: '17:00-18:20',
          students: 5,
        },
      ],
    ],
  ]);

  const coursesList = courses.get(email);
  return coursesList;
};
