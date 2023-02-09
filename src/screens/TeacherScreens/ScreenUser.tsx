import {Button, Text} from '@rneui/base';
import {View} from 'react-native';
import {colorsApp} from '../../constants/colorsApp';
import {globalStyles} from '../../themes/global';
import {ButtonApp} from '../../components/ButtonApp';
import {useDispatch, useSelector} from 'react-redux';
import {signOut} from '../../store/actions/userSignOutAction';

export const ScreenUser = () => {
  const dispatch = useDispatch();
  const signOutMethod = () => {
    dispatch(signOut);
  };
  return (
    <>
      <View style={globalStyles.backgroundApp}>
        <Text
          style={{
            fontFamily: 'JosefinSans-SemiBold',
            textAlign: 'center',
            fontSize: 35,
            color: colorsApp.RED_COLOR,
          }}>
          Welcome to Awesome Attendance!{'\n'}This will be a fun experience
        </Text>
        <ButtonApp title={'Sign Out'} action={signOutMethod} />
      </View>
    </>
  );
};
