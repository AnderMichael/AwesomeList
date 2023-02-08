import {View} from 'react-native';
import {ButtonAttendance} from './ButtonAttendance';

interface RowButtonsAttendance {
    previousStudent: () =>void,
    nextStudent: () =>void
}


export const RowButtonsAttendance = ({previousStudent,nextStudent}:RowButtonsAttendance) => {
  return (
    <>
      <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
        <ButtonAttendance
          title="FAULT"
          color="red"
          icon="exclamation-triangle"
          action={previousStudent}
        />
        <ButtonAttendance
          title="PRESENT"
          color="green"
          icon="check-circle"
          action={nextStudent}
        />
      </View>
    </>
  );
};
