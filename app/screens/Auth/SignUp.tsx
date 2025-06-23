import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
import {GlobalStyleSheet} from '../../constants/StyleSheet';
import {useTheme} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/RootStackParamList';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import SelectCountery from '../../components/SelectCountery';
import {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, UseDispatch, useSelector} from 'react-redux';
import {signupUser} from '../../redux/actions/AuthAction';

type SignUpScreenProps = StackScreenProps<RootStackParamList, 'SignUp'>;

const SignUp = ({navigation}: SignUpScreenProps) => {
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCpassword] = useState('');

  const theme = useTheme();
  const {colors}: {colors: any} = theme;

  const SignUpUser = async (alert: any) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (name == '' || email == '' || password == '' || cPassword == '') {
      showMessage({
        message: 'All Fields(Required)*',
        type: 'danger',
        icon: 'danger',
      });
    } else if (reg.test(email) == false) {
      showMessage({
        message: 'Invalid Email Address!!',
        type: 'danger',
        icon: 'danger',
      });
    } else if (password.length < 8) {
      showMessage({
        message: 'Password must be minimum 8 characters!!',
        type: 'danger',
        icon: 'danger',
      });
    } else if (password != cPassword) {
      showMessage({
        message: 'Password not Match!!',
        type: 'danger',
        icon: 'danger',
      });
    } else {
      const UserData = {
        name: name,
        email_or_phone: email,
        password: password,
        password_confirmation: cPassword,
        register_by: 'email',
      };
      const result = await dispatch(signupUser(UserData));

      if (result?.payload.result == true) {
        showMessage({
          message: 'User Registered Successfully!!',
          type: 'success',
          icon: 'success',
        });
        navigation.navigate('SingIn');
      } else if (result?.payload.message[0] == 'The email has already been taken') {
        showMessage({
          message: 'Email Already Registered!!',
          type: 'danger',
          icon: 'danger',
        });
      } else {
        alert('error');
      }
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FeatherIcon size={24} color={COLORS.card} name={'arrow-left'} />
            </TouchableOpacity>
            <Text
              style={[FONTS.fontMedium, {fontSize: 20, color: COLORS.card}]}>
              Create Account
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.dark ? colors.background : colors.card,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        <View
          style={[GlobalStyleSheet.container, {flexGrow: 1, marginTop: 15}]}>
          <ScrollView>
            <Text
              style={[FONTS.fontMedium, {fontSize: 18, color: colors.title}]}>
              Fresh Arrival, Ready To Explore?
            </Text>
            <Text
              style={[FONTS.fontRegular, {fontSize: 14, color: colors.text}]}>
              Register Using Your Phone Number To Begin
            </Text>
            <View style={{paddingTop: 15}}>
              <Text
                style={[FONTS.fontMedium, {fontSize: 14, color: colors.text}]}>
                Your Name
              </Text>
              <Input
                inputBorder
                icon={
                  <FontAwesome
                    style={{}}
                    name={'user'}
                    size={20}
                    color={COLORS.primary}
                  />
                }
                placeholder="Name (Required)*"
                value={name}
                onChangeText={value => setName(value)}
                style={{borderColor: COLORS.primary, paddingLeft: 30}}
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
                Enter Email
              </Text>
              <TouchableOpacity onPress={() => setToggle(!toggle)}>
                <Text
                  style={[
                    FONTS.fontMedium,
                    {
                      fontSize: 14,
                      color: toggle == true ? COLORS.primary : colors.text,
                    },
                  ]}>
                  Mobile Number
                </Text>
              </TouchableOpacity>
            </View>
            {toggle == true ? (
              <View>
                <Input
                  inputBorder
                  keyboardType={'number-pad'}
                  value={email}
                  onChangeText={value => setEmail(value)}
                  style={{borderColor: COLORS.primary, paddingLeft: 70}}
                />
                <View style={{position: 'absolute', top: 12, left: 0}}>
                  <SelectCountery />
                </View>
              </View>
            ) : (
              <Input
                inputBorder
                icon={
                  <Zocial
                    style={{}}
                    name={'email'}
                    size={20}
                    color={COLORS.primary}
                  />
                }
                placeholder="Email (Required)*"
                value={email}
                onChangeText={value => setEmail(value)}
                style={{borderColor: COLORS.primary, paddingLeft: 30}}
              />
            )}
            <View>
              <Text
                style={[
                  FONTS.fontMedium,
                  {fontSize: 14, color: COLORS.text, marginTop: 15},
                ]}>
                Enter Password
              </Text>

              <Input
                inputBorder
                icon={
                  <Entypo
                    style={{}}
                    name={'lock'}
                    size={20}
                    color={COLORS.primary}
                  />
                }
                placeholder="Password (Required)*"
                value={password}
                onChangeText={value => setPassword(value)}
                style={{borderColor: COLORS.primary, paddingLeft: 30}}
              />

              <Text
                style={[
                  FONTS.fontMedium,
                  {fontSize: 14, color: COLORS.text, marginTop: 15},
                ]}>
                Confirm Password
              </Text>

              <Input
                inputBorder
                icon={
                  <Entypo
                    style={{}}
                    name={'lock'}
                    size={20}
                    color={COLORS.primary}
                  />
                }
                placeholder="Confirm Password (Required)*"
                value={cPassword}
                onChangeText={value => setCpassword(value)}
                style={{borderColor: COLORS.primary, paddingLeft: 30}}
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
              Existing User?
            </Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate('SingIn')}>
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
                Log in
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <Button
              title={'Continue'}
              onPress={() => SignUpUser()}
              // onPress={() => navigation.navigate('SingIn')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
