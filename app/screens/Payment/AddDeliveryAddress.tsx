import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import Header from '../../layout/Header';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS,FONTS } from '../../constants/theme';
import Input from '../../components/Input/Input';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import Button from '../../components/Button/Button';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';

type AddDeliveryAddressScreenProps = StackScreenProps<RootStackParamList, 'AddDeliveryAddress'>;

const AddDeliveryAddress = ({navigation} : AddDeliveryAddressScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const productSizes = ["Home", "Shop", "Office"];

    const [activeSize, setActiveSize] = useState(productSizes[0]);

    return (
        <View style={{backgroundColor:colors.background,flex:1}}>
            <Header
                title='Add Delivery Address'
                leftIcon='back'
                titleRight
            />
            <View 
                style={[GlobalStyleSheet.container,
                    { paddingHorizontal: 15,
                        backgroundColor:theme.dark ? 'rgba(255,255,255,.1)':colors.card,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        },
                        shadowOpacity: 0.35,
                        shadowRadius: 6.27,
                        elevation: 5, 
                    }
                 ]}
            >
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
                        <View style={{height:18,width:18,borderRadius:30,backgroundColor:COLORS.primary,alignItems:'center',justifyContent:'center'}}>
                            <Text style={[FONTS.fontMedium,{fontSize:10,color:COLORS.card}]}>1</Text>
                        </View>
                        <Text style={[FONTS.fontMedium,{fontSize:13,color:colors.title}]}>Cart</Text>
                    </View>
                    <View style={{height:2,flex:1,backgroundColor:COLORS.primary,marginHorizontal:10}}/>
                    <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
                    <View style={{height:18,width:18,borderRadius:30,backgroundColor:COLORS.primary,alignItems:'center',justifyContent:'center'}}>
                            <Text style={[FONTS.fontMedium,{fontSize:10,color:COLORS.card}]}>2</Text>
                        </View>
                        <Text style={[FONTS.fontMedium,{fontSize:13,color:colors.title}]}>Address</Text>
                    </View>
                    <View style={{height:2,flex:1,backgroundColor:colors.title,opacity:.1,marginHorizontal:10}}/>
                    <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
                        <View style={{height:18,width:18,borderRadius:30,backgroundColor:COLORS.primaryLight,alignItems:'center',justifyContent:'center'}}>
                            <Text style={[FONTS.fontMedium,{fontSize:10,color:COLORS.title}]}>3</Text>
                        </View>
                        <Text style={[FONTS.fontMedium,{fontSize:13,color:colors.text}]}>payment</Text>
                    </View>
                </View>
            </View>
            <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:20}}>
                <View style={[GlobalStyleSheet.container,{backgroundColor:theme.dark ? 'rgba(255,255,255,.1)':colors.card,marginTop:15}]}>
                    <Text style={{ ...FONTS.fontMedium, fontSize: 18, color: colors.title,borderBottomWidth:1,borderBottomColor:COLORS.primaryLight,marginHorizontal:-15,paddingHorizontal:15,paddingBottom:15 }}>Contact Details</Text>
                    <View style={{ marginBottom: 20, marginTop: 15 }}>
                        <Text style={{ ...FONTS.fontMedium, fontSize: 12, color:COLORS.primary, }}>Full Name</Text>
                        <Input
                            inputBorder
                            defaultValue="Profile Name"
                            onChangeText={(value) => console.log(value)}
                            style={{borderColor:COLORS.primary, paddingLeft:0}}
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        {/* <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title, }}>Mobile No.</Text> */}
                        <Input
                            inputBorder
                            placeholder='Mobile No.'
                            onChangeText={(value) => console.log(value)}
                            style={{borderColor:COLORS.primaryLight, paddingLeft:0}}
                            keyboardType={'number-pad'}
                        />
                    </View>
                </View>
                <View style={[GlobalStyleSheet.container,{backgroundColor:theme.dark ? 'rgba(255,255,255,.1)':colors.card,marginTop:15}]}>
                    <Text style={{ ...FONTS.fontMedium, fontSize: 18, color: colors.title,borderBottomWidth:1,borderBottomColor:COLORS.primaryLight,marginHorizontal:-15,paddingHorizontal:15,paddingBottom:15 }}>Address</Text>
                    <View style={{ marginBottom: 20, marginTop: 10 }}>
                        <Text style={{ ...FONTS.fontMedium, fontSize: 12, color:COLORS.primary, }}>Pin Code</Text>
                        <Input
                            inputBorder
                            defaultValue="324010"
                            onChangeText={(value) => console.log(value)}
                            style={{borderColor:COLORS.primary, paddingLeft:0}}
                            keyboardType={'number-pad'}
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Input
                            inputBorder
                            placeholder='Address'
                            onChangeText={(value) => console.log(value)}
                            style={{borderColor:COLORS.primaryLight, paddingLeft:0}}
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Input
                            inputBorder
                            placeholder='Locality/Town'
                            onChangeText={(value) => console.log(value)}
                            style={{borderColor:COLORS.primaryLight, paddingLeft:0}}
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Input
                            inputBorder
                            placeholder='City/District'
                            onChangeText={(value) => console.log(value)}
                            style={{borderColor:COLORS.primaryLight, paddingLeft:0}}
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Input
                            inputBorder
                            placeholder='State'
                            onChangeText={(value) => console.log(value)}
                            style={{borderColor:COLORS.primaryLight, paddingLeft:0}}
                        />
                    </View>
                </View>
                <View style={[GlobalStyleSheet.container,{backgroundColor:theme.dark ? 'rgba(255,255,255,.1)':colors.card,marginTop:15}]}>
                    <Text style={{ ...FONTS.fontMedium, fontSize: 18, color: colors.title,borderBottomWidth:1,borderBottomColor:COLORS.primaryLight,marginHorizontal:-15,paddingHorizontal:15,paddingBottom:15 }}>Save Address As</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            paddingTop: 15,
                            paddingBottom: 10
                        }}
                    >
                        {productSizes.map((data, index) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => setActiveSize(data)}
                                    key={index}
                                    style={[{
                                        height: 40,
                                        width: 75,
                                        borderRadius: 4,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderWidth: 1,
                                        borderColor: COLORS.primaryLight,
                                        marginHorizontal: 4,
                                        //backgroundColor:theme.dark ? 'rgba(255,255,255,0.10)': colors.background
                                    }, activeSize === data && {
                                        backgroundColor:COLORS.primary,
                                        borderColor: COLORS.primary,
                                    }]}
                                >
                                    <Text style={[{ ...FONTS.fontMedium, fontSize: 14, color: colors.title }, activeSize === data && { color:theme.dark ? COLORS.white : colors.card }]}>{data}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
            <View style={[GlobalStyleSheet.container,{padding:0}]}>
                <View 
                    style={{
                        height:88,
                        width:'100%',
                        backgroundColor:theme.dark ? 'rgba(255,255,255,.1)':colors.card,
                        justifyContent:'center',
                        paddingHorizontal:15,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 2,
                            height: 2,
                        },
                        shadowOpacity: .1,
                        shadowRadius: 5,
                    }}
                >
                    <Button
                        title='Save Address'
                        color={COLORS.secondary}
                        text={COLORS.title }
                       onPress={() => navigation.navigate('DeliveryAddress')}
                    />
                </View>
            </View>
        </View>
    )
}

export default AddDeliveryAddress