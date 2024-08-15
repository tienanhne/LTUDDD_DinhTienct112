import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Welcome: undefined;
  WeekOne: undefined;
  NewPage: undefined;
};

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Welcome', 'WeekOne'
>;

export type Props = {
  navigation: WelcomeScreenNavigationProp;
};
