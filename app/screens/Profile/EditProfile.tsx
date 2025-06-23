import React,{useRef,useEffect, useState,useCallback} from 'react'
import { View, Text,  ScrollView, Image, TouchableOpacity,PermissionsAndroid,Platform, StyleSheet } from 'react-native'
import { useNavigation, useTheme } from '@react-navigation/native';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { IMAGES } from '../../constants/Images';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { COLORS, FONTS } from '../../constants/theme';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import Entypo from 'react-native-vector-icons/Entypo'
import {responsiveHeight,responsiveFontSize,responsiveWidth} from 'react-native-responsive-dimensions';

const EditProfile = () => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const navigation = useNavigation<any>();

    const [profile,setProfile] = useState('');



    const refRBSheet = useRef<Camera>(null);
    function OpneBottomSheet() {
      refRBSheet.current.open();
    }
  
    const AllcameraPermission = useCallback(async () => {
      console.log(Platform.OS);
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: `Skala App Camera Permission`,
              message: `Skala app needs access to your camera for document and profile photo upload.`,
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the camera');
          } else {
            console.log('Camera permission denied');
          }
        } catch (err) {
          console.warn(err);
        }
      } else {
        const newCameraPermission = await Camera.getCameraPermissionStatus();
        console.log(newCameraPermission);
      }
    }, []);
    useEffect(() => {
      AllcameraPermission();
    }, []);
  
    function UserPrefence() {
      return (
        <View style={{flex: 1, width: '100%', padding: 20}}>
         <TouchableOpacity
            style={{width: '100%', height: 20,alignItems:'flex-end'}}
            onPress={() => refRBSheet.current.close()}>
            <Entypo name="cross" size={responsiveFontSize(3)} color={COLORS.dark} style={{marginTop:-35,marginRight:-10}}/>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={{width: '100%', height: 40, flexDirection: 'row'}}
            onPress={() => OpenCamera()}>
            <Entypo name="camera" size={20} color={COLORS.primary} />
            <Text style={styles.bottomSliderFont}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: '100%', height: 40, flexDirection: 'row'}}
            onPress={() => Gallery()}>
            <Entypo name="image" size={20} color={COLORS.primary} />
            <Text style={styles.bottomSliderFont}>Gallery</Text>
          </TouchableOpacity>
        </View>
      );
    }
  
    const Gallery = () => {
  
      ImagePicker.openPicker({
        width: 600,
        height: 600,
        cropping: true,
      })
        .then(async coverimg => {
          refRBSheet.current.close();
          setProfile(coverimg.path);
        })
        .catch(err => {
          console.log(err);
        });
    };
  
    const OpenCamera = () => {
      ImagePicker.openCamera({
        width: 600,
        height: 600,
        cropping: true,
      })
        .then(async image => {
          console.log(image);
          refRBSheet.current.close();
          setProfile(image.path);
        })
        .catch(err => {
          console.log(err);
        });
    };


    return (
       <View style={{backgroundColor:colors.background,flex:1}}>
           <Header
                title='Edit Profile'
                leftIcon='back'
                titleRight
           />
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <View style={[GlobalStyleSheet.container, {backgroundColor:theme.dark ? 'rgba(255,255,255,.1)':colors.card}]}>
                    <View style={{flexDirection:'row',alignItems:'center',gap:20}}>
                        <View style={{}}>
                            <View style={{ borderWidth: 2, borderColor:COLORS.primary, height: 90, width: 90, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    style={{ height: 82, width: 82, borderRadius: 50 }}
                                    source={IMAGES.small6}
                                />
                            </View>
                            <TouchableOpacity style={{ height: 42, width: 42, borderRadius: 40, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 0, left:60 }} onPress={()=> {OpneBottomSheet(), AllcameraPermission()}}>
                                <View style={{ height: 36, width: 36, borderRadius: 36, alignItems: 'center', justifyContent: 'center', backgroundColor:COLORS.primary }}>
                                    <Image
                                        style={{ height: 16, width: 16, resizeMode: 'contain', tintColor: COLORS.card }}
                                        source={IMAGES.write}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={[FONTS.fontMedium,{fontSize:24,color:colors.title}]}>James Smith</Text>
                            <Text style={[FONTS.fontMedium,{fontSize:13,color:COLORS.primary}]}>Last Visit : 17 Jan 2024</Text>
                        </View>
                    </View>
                </View>
                <View style={[GlobalStyleSheet.container,{backgroundColor:theme.dark ? 'rgba(255,255,255,.1)':colors.card,marginTop:10,paddingVertical:10}]}>
                    <View style={{ marginBottom: 20, marginTop: 10 }}>
                        <Text style={{ ...FONTS.fontMedium, fontSize: 13, color:COLORS.primary, }}>Your Name</Text>
                        <Input
                            inputBorder
                            defaultValue="James Smith"
                            onChangeText={(value) => console.log(value)}
                            style={{borderColor:COLORS.primary, paddingLeft:0}}
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Input
                            inputBorder
                            placeholder='Mobile Number'
                            onChangeText={(value) => console.log(value)}
                            style={{borderColor:COLORS.primaryLight, paddingLeft:0}}
                            keyboardType={'number-pad'}
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Input
                            inputBorder
                            placeholder='Email'
                            onChangeText={(value) => console.log(value)}
                            style={{borderColor:COLORS.primaryLight, paddingLeft:0}}
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Input
                            inputBorder
                            placeholder='Location'
                            onChangeText={(value) => console.log(value)}
                            style={{borderColor:COLORS.primaryLight, paddingLeft:0}}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={[GlobalStyleSheet.container,{paddingHorizontal:0,paddingBottom:0}]}>
                <View style={{height:88,width:'100%',backgroundColor:theme.dark ? 'rgba(255,255,255,.1)':colors.card,justifyContent:'center',paddingHorizontal:15}}>
                    <Button
                        title='Update Profile'
                        color={COLORS.secondary}
                        text={ COLORS.title}
                        onPress={() => navigation.navigate('Profile')}
                    />
                </View>
            </View> 

            <RBSheet
          height={responsiveHeight(20)}
          animationType="slide"
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: 'rgba(0,0,0,0.8)',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
            container: {
              backgroundColor: COLORS.light,
              borderRadius: responsiveWidth(2),
              borderColor: COLORS.dark,
              borderWidth: responsiveWidth(0.5),
            },
          }}>
          <UserPrefence />
        </RBSheet>

       </View>
    )
}

const styles=StyleSheet.create({
    bottomSliderFont: {
        marginLeft: 15,
        color: '#000',
        fontSize: 16,
        fontWeight: '800',
        fontFamily: 'InknutAntiqua-Medium',
      },
})

export default EditProfile

