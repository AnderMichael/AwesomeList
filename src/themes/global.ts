import {StyleSheet} from 'react-native';
import {colorsApp} from '../constants/colorsApp';
// ! This is the palette color https://www.instagram.com/p/CloCdxBJzs9/?hl=es-la

export const globalStyles = StyleSheet.create({
  backgroundApp: {
    flex: 1,
    backgroundColor: colorsApp.GRAY_COLOR,
    paddingHorizontal: 20,
    paddingBottom: 50,
    paddingTop: 10,
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
  title: {
    fontFamily: 'JosefinSans-SemiBold',
    textAlign: 'center',
    fontSize: 25,
    color: colorsApp.BROWN_COLOR,
  },
});
