interface Course {
  id: string;
  date: string;
  students: number;
}

export const useCourses = () => {
  const coursesList: Course[] = [
    {
      id: '63e33cf09e14a1881518da7d',
      date: '1971-06-29T22:38:55.285Z',
      students: 8,
    },
    {
      id: '63e33cf0ecc4483e3e9fd8c0',
      date: '1976-05-04T18:12:58.769Z',
      students: 5,
    },
    {
      id: '63e33cf0ddcbf908f02705ae',
      date: '2006-02-20T00:17:15.798Z',
      students: 7,
    },
    {
      id: '63e33cf0260d8141fa3c9227',
      date: '1997-07-07T21:38:49.264Z',
      students: 4,
    },
    {
      id: '63e33cf024123e8e2d24bf58',
      date: '1976-02-27T23:44:09.400Z',
      students: 2,
    },
    {
      id: '63e33cf062b37937bfe510d5',
      date: '2020-04-11T18:58:38.875Z',
      students: 8,
    },
    {
      id: '63e33cf04d49dfdd1ed129bd',
      date: '1985-10-26T04:46:22.787Z',
      students: 5,
    },
  ];
  return coursesList;
};
