import {Button} from '@rneui/themed';

interface iButtonAttendace {
  title: string;
  color: string;
  icon: string;
  action: () => void;
}

export const ButtonAttendance = ({
  title,
  color,
  icon,
  action,
}: iButtonAttendace) => {
  return (
    <Button
      title={title}
      icon={{
        name: icon,
        type: 'font-awesome',
        size: 20,
        color: 'white',
      }}
      iconRight
      iconContainerStyle={{marginLeft: 10}}
      titleStyle={{fontFamily: 'JosefinSans-BoldItalic', fontSize: 20}}
      buttonStyle={{
        backgroundColor: color,
        borderColor: 'transparent',
        borderRadius: 30,
      }}
      containerStyle={{
        borderRadius: 30,
        flex: 1,
        marginHorizontal: 4,
      }}
      onPress={action}
    />
  );
};
