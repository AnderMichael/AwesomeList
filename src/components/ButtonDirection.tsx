import {Button} from '@rneui/themed';

interface iButtonDirection {
  title: string;
  color: string;
  icon: string;
  left: boolean;
  action: () => void;
}

export const ButtonDirection = ({
  title,
  color,
  icon,
  left,
  action,
}: iButtonDirection) => {
  return (
    <Button
      title={title}
      icon={{
        name: icon,
        type: 'font-awesome',
        size: 25,
        color: 'white',
        style: left ? {marginRight: 5} : {marginLeft: 5},
      }}
      iconRight={!left}
      titleStyle={{
        fontFamily: 'JosefinSans-Bold',
        fontSize: 20,
      }}
      buttonStyle={{
        backgroundColor: color,
        borderColor: 'transparent',
        borderRadius: 10,
        alignItems: 'center',
      }}
      containerStyle={{
        flex: 1,
        alignItems: 'stretch',
      }}
      onPress={action}
    />
  );
};
