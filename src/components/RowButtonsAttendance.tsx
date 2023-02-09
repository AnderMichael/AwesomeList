import {View} from 'react-native';
import {ButtonAttendance} from './ButtonAttendance';

interface RowButtonsAttendanceProps {
  changeAttend: (attend: string) => void;
  state: string;
}

export const RowButtonsAttendance = ({
  changeAttend,
  state,
}: RowButtonsAttendanceProps) => {
  const present = () => {
    changeAttend('Present');
  };

  const fault = () => {
    changeAttend('Fault');
  };
  return (
    <>
      <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
        <ButtonAttendance
          title="FAULT"
          color="red"
          icon="exclamation-triangle"
          action={fault}
          type={state == 'NA'? 'solid': state == 'Present'? 'clear' : 'solid'}
        />
        <ButtonAttendance
          title="PRESENT"
          color="green"
          icon="check-circle"
          action={present}
          type={state == 'NA'? 'solid': state == 'Fault'? 'clear' : 'solid'}
        />
      </View>
    </>
  );
};
