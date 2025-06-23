import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../../constants/theme';
import {GlobalStyleSheet} from '../../constants/StyleSheet';
import {useTheme} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/RootStackParamList';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Zocial from 'react-native-vector-icons/Zocial';
import Entypo from 'react-native-vector-icons/Entypo';
import {showMessage} from 'react-native-flash-message';
import {useDispatch} from 'react-redux';
import {signinUser} from '../../redux/actions/AuthAction';

type SingInScreenProps = StackScreenProps<RootStackParamList, 'SingIn'>;

const SingIn = ({navigation}: SingInScreenProps) => {
  const [email, setEmail] = useState('Singh@gmail.com');
  const [password, setPassword] = useState('12345678');

  const dispatch = useDispatch();

  const theme = useTheme();
  const {colors}: {colors: any} = theme;

  const LoginUser = async () => {
    const UserData = {
        email: email,
        password: password,
        login_by: 'email',
      };
    const result = await dispatch(signinUser(UserData));
    if (result?.payload?.result === true) {
      showMessage({
        message: 'User Login Successfully!!',
        type: 'success',
        icon: 'success',
      });
      navigation.navigate('DrawerNavigation', {screen: 'Home'});
    } else {
      showMessage({
        message: 'Wrong Email or Password!!',
        type: 'danger',
        icon: 'danger',
      });
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View style={[GlobalStyleSheet.container, {paddingVertical: 20}]}>
        <View
          style={[
            GlobalStyleSheet.row,
            {alignItems: 'center', justifyContent: 'space-between'},
          ]}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <FeatherIcon size={24} color={COLORS.card} name={'arrow-left'} />
            </TouchableOpacity>
            <Text
              style={[FONTS.fontMedium, {fontSize: 20, color: COLORS.card}]}>
              Login
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DrawerNavigation', {screen: 'Home'})
            }>
            <Text
              style={[
                FONTS.fontRegular,
                {
                  fontSize: 16,
                  color: COLORS.card,
                  textDecorationLine: 'underline',
                },
              ]}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.dark ? colors.background : COLORS.card,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        <View
          style={[GlobalStyleSheet.container, {flexGrow: 1, marginTop: 15}]}>
          <ScrollView>
            <Text
              style={[FONTS.fontMedium, {fontSize: 18, color: colors.title}]}>
              Unlock Personalized Content{'\n'}Tailored Just For You
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 15,
                paddingBottom: 5,
              }}>
              <Text
                style={[FONTS.fontMedium, {fontSize: 14, color: colors.text}]}>
                Enter Your Email
              </Text>
            </View>

            <View>
              <Input
                inputBorder
                icon={
                  <Zocial name={'email'} size={20} color={COLORS.primary} />
                }
                placeholder="E-Mail (Required)*"
                value={email}
                onChangeText={val => setEmail(val)}
                style={{borderColor: COLORS.primary, paddingLeft: 35}}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 15,
                paddingBottom: 5,
              }}>
              <Text
                style={[FONTS.fontMedium, {fontSize: 14, color: colors.text}]}>
                Enter Your Password
              </Text>
            </View>

            <View>
              <Input
                inputBorder
                icon={<Entypo name={'lock'} size={20} color={COLORS.primary} />}
                placeholder="E-Mail (Required)*"
                value={password}
                onChangeText={val => setPassword(val)}
                style={{borderColor: COLORS.primary, paddingLeft: 35}}
              />
            </View>

            <View style={{paddingTop: 10}}>
              <Text
                style={[
                  FONTS.fontRegular,
                  {fontSize: 14, color: colors.title},
                ]}>
                By continuing, you agree to Skala's{' '}
                <Text style={[FONTS.fontSemiBold, {color: COLORS.primary}]}>
                  Terms of Use
                </Text>
                {'\n'}and{' '}
                <Text style={[FONTS.fontSemiBold, {color: COLORS.primary}]}>
                  Privacy Policy
                </Text>
                .
              </Text>
            </View>
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 15,
              gap: 5,
            }}>
            <Text
              style={[FONTS.fontRegular, {fontSize: 15, color: colors.title}]}>
              Not a member?
            </Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate('SignUp')}>
              <Text
                style={[
                  FONTS.fontRegular,
                  {
                    fontSize: 16,
                    color: COLORS.primary,
                    textDecorationLine: 'underline',
                    textDecorationColor: COLORS.primary,
                  },
                ]}>
                Create an account
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <Button
              title={'Continue'}
              //onPress={() => navigation.navigate('OTPAuthentication')}
              onPress={() => LoginUser()}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SingIn;
