import {ButtonDirection} from './ButtonDirection';
import {View} from 'react-native';
import {Button} from '@rneui/themed';

interface DirectionButtonsProps {
  indexStudent: number;
  previousStudent: () => void;
  nextStudent: () => void;
  studentsNumber: number;
  navigation: any;
}
export const DirectionButtons = ({
  indexStudent,
  previousStudent,
  nextStudent,
  studentsNumber,
  navigation,
}: DirectionButtonsProps) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'stretch',
        }}>
        {indexStudent > 0 ? (
          <>
            <ButtonDirection
              title={'Previous'}
              color="darkblue"
              icon="arrow-circle-left"
              left={true}
              action={previousStudent}
            />
          </>
        ) : (
          <></>
        )}

        {indexStudent < studentsNumber - 1 && indexStudent > 0 ? (
          <View style={{width: 25}} />
        ) : (
          <></>
        )}

        {indexStudent < studentsNumber - 1 ? (
          <>
            <ButtonDirection
              title={'Next'}
              color="darkblue"
              icon="arrow-circle-right"
              left={false}
              action={nextStudent}
            />
          </>
        ) : (
          <></>
        )}
      </View>
      {indexStudent == studentsNumber - 1 ? (
        <Button
          title="Finish"
          icon={{
            name: 'archive',
            type: 'font-awesome',
            size: 20,
            color: 'white',
          }}
          iconRight
          iconContainerStyle={{marginLeft: 10}}
          titleStyle={{fontFamily: 'JosefinSans-BoldItalic', fontSize: 20}}
          buttonStyle={{
            backgroundColor: 'red',
            borderColor: 'transparent',
            borderRadius: 30,
          }}
          containerStyle={{
            borderRadius: 30,
            marginHorizontal: 4,
          }}
          onPress={navigation.goBack}
        />
      ) : (
        <></>
      )}
    </>
  );
};
