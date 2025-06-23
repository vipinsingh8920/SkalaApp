import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {GlobalStyleSheet} from '../../constants/StyleSheet';
import {IMAGES} from '../../constants/Images';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import Button from '../../components/Button/Button';
import Cardstyle1 from '../../components/Card/Cardstyle1';
import {RootStackParamList} from '../../navigation/RootStackParamList';
import {StackScreenProps} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import {openDrawer} from '../../redux/actions/drawerAction';
import LinearGradient from 'react-native-linear-gradient';
import BottomSheet2 from '../Components/BottomSheet2';
import StopWatch from '../../components/StopWatch';
import StopWatch2 from '../../components/StopWatch2';
import Swiper from 'react-native-swiper';
import {addTowishList} from '../../redux/reducer/wishListReducer';
import {getData} from '../../redux/axios';

const bannerData = [
  {
    image: IMAGES.banner1,
    title: 'Hoodie',
    text: '2nd generation',
    price: '$1259.00*',
    bottom: false,
  },
  {
    image: IMAGES.banner3,
    title: 'Jersey',
    text: '1st generation',
    price: '$125.00*',
    bottom: true,
  },
  {
    image: IMAGES.banner2,
    title: 'Hoodie',
    text: '3rd generation',
    price: '$1029.00*',
    bottom: true,
  },
];

const PopoulerData = [
  {
    title: 'Deal of the day',
  },
  {
    title: 'Hot Deals',
    image: true,
  },
  {
    title: 'Best Sellers',
  },
  {
    title: 'New Arrivals',
  },
  {
    title: 'Deal of the day',
  },
  {
    title: 'Hot Deals',
    image: true,
  },
  {
    title: 'Best Sellers',
  },
  {
    title: 'New Arrivals',
  },
];

const brandData = [
  {
    title: 'Casual',
    image: IMAGES.casual,
  },
  {
    title: 'Hoodie top',
    image: IMAGES.hoodietop,
  },
  {
    title: 'Short pant',
    image: IMAGES.shortpant,
  },
  {
    title: 'T-shirt',
    image: IMAGES.tshirt,
  },
  {
    title: 'Orange hoodie',
    image: IMAGES.orangehoodie,
  },
  {
    title: 'Man`s T-Shirt',
    image: IMAGES.manstshirt,
  },
  {
    title: 'Kids hoodies',
    image: IMAGES.kidshoodies,
  },
];

const absData = [
  {
    image: IMAGES.offer1,
  },
  {
    image: IMAGES.ads3,
  },
  {
    image: IMAGES.offer1,
  },
  {
    image: IMAGES.ads3,
  },
];

const abs2Data = [
  {
    image: IMAGES.offer1,
  },
  {
    image: IMAGES.ads3,
  },
  {
    image: IMAGES.offer1,
  },
  {
    image: IMAGES.ads3,
  },
];

const abs3Data = [
  {
    image: require('../../assets/images/logo1.png'),
  },
];

const offerData = [
  {
    image: IMAGES.deliverytruck,
    title: 'Free Shipping & Returns',
    text: 'For all orders over $99',
  },
  {
    image: IMAGES.check3,
    title: 'Secure Payment',
    text: 'We ensure secure payment',
  },
  {
    image: IMAGES.savemoney,
    title: 'Money Back Guarantee',
    text: 'Any back within 30 days',
  },
  {
    image: IMAGES.technicalsupport,
    title: 'Customer Support',
    text: 'Call or email us 24/7',
  },
  {
    image: IMAGES.wallet2,
    title: 'Flexible Payment',
    text: 'Pay with Multiple Credit Card',
  },
];

const ArrivalData = [
  {
    image: IMAGES.item15,
    title: 'Casual',
  },
  {
    image: IMAGES.greenhoodie,
    title: 'Sports',
  },
  {
    image: IMAGES.hoodietop,
    title: 'For Girls',
  },
  {
    image: IMAGES.kidshoodies,
    title: 'Kids Clothes',
  },
  {
    image: IMAGES.item15,
    title: 'Sports Bra',
  },
];

const cardData = [
  {
    id: '0',
    image: IMAGES.casual,
    title: 'CASUAL clothes (Cotton)',
    price: '$199',
    discount: '$112',
    offer: '70% OFF',
    brand: 'Skala',
    color: false,
    hascolor: true,
  },
  {
    id: '1',
    image: IMAGES.hoodietop,
    title: 'HOODIE top cotton(Pure)',
    price: '$149',
    discount: '$114',
    offer: '50% OFF',
    brand: 'Skala',
    color: false,
    hascolor: true,
  },
  {
    id: '2',
    image: IMAGES.greenhoodie,
    title: 'GREEN hoodie (Bluetooth)',
    price: '$299',
    discount: '$116',
    offer: '70% OFF',
    color: false,
    brand: 'Skala',
    hascolor: true,
  },
  {
    id: '3',
    image: IMAGES.jersey,
    title: 'JERSEY pure cotton (Bluetooth)',
    price: '$99',
    discount: '$118',
    offer: '70% OFF',
    color: true,
    brand: 'Skala',
    hascolor: true,
  },
];

const card2Data = [
  {
    id: '4',
    image: IMAGES.greenhoodie,
    title: 'Green hoodie ',
    price: '$199',
    discount: '$112',
    offer: '70% OFF',
    brand: 'Skala',
    hascolor: true,
  },
  {
    id: '5',
    image: IMAGES.hoodietop,
    title: 'Girls hoodies for sports',
    price: '$149',
    discount: '$114',
    offer: '50% OFF',
    brand: 'Skala',
    hascolor: true,
  },
  {
    id: '6',
    image: IMAGES.jersey,
    title: 'Jersey for man`s',
    price: '$299',
    discount: '$116',
    offer: '70% OFF',
    brand: 'Skala',
    hascolor: true,
  },
  {
    id: '7',
    image: IMAGES.casual,
    title: 'APPLE iPhone 15 (Bluetooth)',
    price: '$99',
    discount: '$118',
    offer: '70% OFF',
    brand: 'Skala',
    hascolor: true,
  },
];

const card3Data = [
  {
    id: '8',
    image: IMAGES.greenhoodie,
    title: 'Green hoodie for man`s',
    price: '$199',
    discount: '$112',
    offer: '70% OFF',
    hascolor: true,
  },
  {
    id: '9',
    image: IMAGES.hoodietop,
    title: 'Hoodie for Girls Comfortable',
    price: '$149',
    discount: '$114',
    offer: '50% OFF',
    hascolor: true,
  },
  {
    id: '10',
    image: IMAGES.tshirt,
    title: 'Man`s T-Shirt (Flexible)',
    price: '$299',
    discount: '$116',
    offer: '70% OFF',
    color: false,
    hascolor: true,
  },
  {
    id: '11',
    image: IMAGES.casual,
    title: 'Party Jacke for man`s (Fully Cotton)',
    price: '$99',
    discount: '$118',
    offer: '70% OFF',
    hascolor: true,
  },
  {
    id: '12',
    image: IMAGES.item05,
    title: 'Polka dot wrap blouse dress',
    price: '$99',
    discount: '$118',
    offer: '70% OFF',
    hascolor: true,
  },
  {
    id: '13',
    image: IMAGES.item06,
    title: 'Pleated high-waisted is',
    price: '$99',
    discount: '$118',
    offer: '70% OFF',
    hascolor: true,
  },
  {
    id: '14',
    image: IMAGES.kidshoodies,
    title: 'Full Sleve T-Shirt for kids',
    price: '$99',
    discount: '$118',
    offer: '70% OFF',
    hascolor: true,
  },
  {
    id: '15',
    image: IMAGES.jersey,
    title: 'Skala Jersey for Man`s',
    price: '$99',
    discount: '$118',
    offer: '70% OFF',
    hascolor: true,
  },
  {
    id: '16',
    image: IMAGES.orangehoodie,
    title: 'Orange hoodie for Girls',
    price: '$99',
    discount: '$118',
    offer: '70% OFF',
    hascolor: true,
  },
  {
    id: '17',
    image: IMAGES.tshirt,
    title: 'T-Shirt for Man`s (Flexible)',
    price: '$99',
    discount: '$118',
    offer: '70% OFF',
    hascolor: true,
  },
  {
    id: '18',
    image: IMAGES.hoodietop,
    title: 'Hoodie top for Girls (Flexible)',
    price: '$99',
    discount: '$118',
    offer: '70% OFF',
    hascolor: true,
  },
  {
    id: '19',
    image: IMAGES.greenhoodie,
    title: 'Green hoodie for Man`s',
    price: '$99',
    discount: '$118',
    offer: '70% OFF',
    hascolor: true,
  },
];

const swiperimageData = [
  {
    image: IMAGES.frauentshirt,
    smallImage: IMAGES.frauentshirt,
  },
  {
    image: IMAGES.hoodietop,
    smallImage: IMAGES.hoodietop,
  },
  {
    image: IMAGES.frauentshirt,
    smallImage: IMAGES.frauentshirt,
  },
  {
    image: IMAGES.greenhoodie,
    smallImage: IMAGES.greenhoodie,
  },
];

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeScreenProps) => {
  const dispatch = useDispatch();

  const theme = useTheme();
  const {colors}: {colors: any} = theme;

  const moresheet2 = useRef<any>(null);

  const [Select, setSelect] = useState(offerData[0]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [banner1, setBanner1] = useState<any>([]);
  const [logo, setLogo] = useState<any>([]);
  

  const addItemToWishList = (data: any) => {
    dispatch(addTowishList(data));
  };

  async function Logo(){
    const res = await getData('v2/mobile-app-logo');
    setLogo(res?.result);
    const res1 = await getData('v2/mobile-home-banner');
    setBanner1(res1?.result);
  }

  useEffect(() => {
    Logo();
  }, []);

  return (
    <View style={{backgroundColor: colors.background, flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{height: 60, backgroundColor: COLORS.primary}}>
          <View style={[GlobalStyleSheet.container, {paddingHorizontal: 20}]}>
            <View
              style={[
                GlobalStyleSheet.row,
                {alignItems: 'center', justifyContent: 'space-between'},
              ]}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <TouchableOpacity
                  style={{margin: 5}}
                  onPress={() => dispatch(openDrawer())}>
                  <Image
                    style={{
                      height: 22,
                      width: 22,
                      tintColor: COLORS.card,
                      resizeMode: 'contain',
                    }}
                    source={IMAGES.grid5}
                  />
                </TouchableOpacity>
                <Image
                  style={{resizeMode: 'contain', width: 90, height: 25}}
                   //source={IMAGES.appname}
                source={logo?.logo ? {uri: logo?.logo} : require('../../assets/images/skalalogo.png')}
                />
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Search')}
                  style={{
                    height: 35,
                    width: 35,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{
                      height: 22,
                      width: 22,
                      tintColor: COLORS.card,
                      resizeMode: 'contain',
                    }}
                    source={IMAGES.search}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => moresheet2.current.openSheet('notification')}
                  style={{
                    height: 35,
                    width: 35,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{
                      height: 20,
                      width: 20,
                      tintColor: COLORS.card,
                      resizeMode: 'contain',
                    }}
                    source={IMAGES.ball}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 40,
            backgroundColor: theme.dark ? 'rgba(255,255,255,0.2)' : colors.card,
            marginBottom: 10,
          }}>
          <View
            style={[
              GlobalStyleSheet.container,
              {padding: 10, paddingHorizontal: 0},
            ]}>
            <View>
              <ScrollView
                horizontal
                contentContainerStyle={{paddingHorizontal: 20, flexGrow: 1}}
                showsHorizontalScrollIndicator={false}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                  {PopoulerData.map((data: any, index) => {
                    //  console.log(data)
                    return (
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Products')}
                        key={index}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 5,
                          }}>
                          {index == 1 ? (
                            <Image
                              style={{
                                height: 16,
                                width: 16,
                                resizeMode: 'contain',
                              }}
                              source={IMAGES.fire}
                            />
                          ) : null}
                          <Text
                            style={[
                              FONTS.fontMedium,
                              {fontSize: 13, color: colors.title},
                            ]}>
                            {data.title}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          </View>
        </View>

{bannerData && bannerData.length > 0 ?
        <Swiper
          autoplay={true}
          autoplayTimeout={5}
          height={'auto'}
          dotStyle={{
            height:6,
            width:6,
            backgroundColor:COLORS.card,
            opacity:0.2,
          }}
          activeDotStyle={{
            height: 6,
            width: 6,
            backgroundColor: COLORS.card,
          }}
          paginationStyle={{bottom: 10}}>
          {bannerData?.map((data: any, index: any) => {
            return (
              <LinearGradient
                key={index}
                start={{x: 0, y: 1}}
                end={{x: 0, y: 0}}
                colors={['black', 'grey']}
                style={{height: undefined, width: '100%'}}>
                <View
                  style={[
                    GlobalStyleSheet.container,
                    {paddingHorizontal: 30, overflow: 'hidden'},
                  ]}>
                  <View style={GlobalStyleSheet.row}>
                    <View
                      style={[
                        GlobalStyleSheet.col50,
                        {alignSelf: 'center', zIndex: 25},
                      ]}>
                      <View style={{paddingVertical: 10}}>
                        <Text
                          style={[
                            FONTS.fontSemiBold,
                            {fontSize: 35, color: '#fff'},
                          ]}>
                          {data?.title}
                        </Text>
                        <Text
                          style={[
                            FONTS.fontSemiBold,
                            {
                              fontSize: 16,
                              color: COLORS.secondary,
                              marginTop: -5,
                            },
                          ]}>
                          {data?.subtitle}
                        </Text>
                        <Text
                          style={[
                            FONTS.fontSemiBold,
                            {fontSize: 16, color: COLORS.white, marginTop: 10},
                          ]}>
                          {data?.price}*
                        </Text>
                        <View style={{width: '55%', marginTop: 15}}>
                          <Button
                            title="Buy Now"
                            size={'sm'}
                            color={COLORS.white}
                            text={COLORS.title}
                            onPress={() =>
                              navigation.navigate('ProductsDetails')
                            }
                          />
                        </View>
                      </View>
                    </View>
                    <View style={[GlobalStyleSheet.col50, {}]}>
                      <View
                        style={{
                          marginTop: -15,
                          marginBottom: -15,
                          marginLeft: -15,
                          marginRight: -15,
                          position: 'absolute',
                          alignItems: 'center',
                          bottom: index == 1 ? -10 : -50,
                          right: 15,
                          zIndex: 30,
                        }}>
                        <Image
                          style={{
                            height: 200,
                            width: 150,
                            resizeMode: index == 1 ? 'contain' : 'cover',
                          }}
                           source={data.image}
                          //source={{uri: data.image}}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={{position: 'absolute', right: -90, top: -100}}>
                    <Image
                      style={{
                        height: undefined,
                        width: '100%',
                        aspectRatio: 1 / 0.8,
                        resizeMode: 'contain',
                      }}
                      source={IMAGES.bannerborder2}
                    />
                  </View>
                  <View
                    style={{position: 'absolute', bottom: -100, left: -130}}>
                    <Image
                      style={{
                        height: undefined,
                        width: '100%',
                        aspectRatio: 1 / 0.5,
                        resizeMode: 'contain',
                      }}
                      source={IMAGES.bannerborder1}
                    />
                  </View>
                </View>
              </LinearGradient>
            );
          })}
        </Swiper>:null
}



        <View
          style={[
            GlobalStyleSheet.container,
            {paddingHorizontal: 0, backgroundColor: colors.card, marginTop: 10},
          ]}>
          <View>
            <ScrollView
              horizontal
              contentContainerStyle={{paddingHorizontal: 20, flexGrow: 1}}
              showsHorizontalScrollIndicator={false}>
              {brandData.map((data: any, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    key={index}
                    style={{alignItems: 'center', marginRight: 20}}
                    onPress={() => navigation.navigate('Products')}>
                    <View
                      style={{
                        height: 60,
                        width: 60,
                        borderRadius: 50,
                        borderWidth: 1,
                        borderColor: COLORS.primaryLight,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        style={{height: 40, width: 45, resizeMode: 'contain'}}
                        source={data.image}
                      />
                    </View>
                    <Text
                      style={[
                        FONTS.fontRegular,
                        {fontSize: 13, color: colors.title, marginTop: 10},
                      ]}>
                      {data?.title}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
        <View style={[GlobalStyleSheet.container, {paddingVertical: 0}]}>
          <View style={{marginHorizontal: -15, marginVertical: 10}}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{}}>
              {absData.map((data, index) => {
                return (
                  <View key={index} style={{marginRight: 10}}>
                    <Image
                      style={{width: 201, height: 110}}
                      source={data.image}
                    />
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
        <View
          style={[
            GlobalStyleSheet.container,
            {paddingHorizontal: 20, backgroundColor: colors.card},
          ]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={[
                  FONTS.fontMedium,
                  {fontSize: 18, color: colors.title, marginBottom: 5},
                ]}>
                Top Deals Of The Day
              </Text>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Text
                  style={[FONTS.fontMedium, {fontSize: 14, color: '#BF0A30'}]}>
                  Offer Ends in
                </Text>
                <View>
                  <StopWatch />
                </View>
              </View>
            </View>
            <View>
              <Image
                style={{resizeMode: 'contain', height: 65, width: 115}}
                source={IMAGES.ads1}
              />
            </View>
          </View>
        </View>
        <View style={[GlobalStyleSheet.container, {padding: 0}]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {cardData.map((data: any, index: any) => {
                return (
                  <View
                    style={[
                      {
                        marginBottom: 0,
                        width:
                          SIZES.width > SIZES.container
                            ? SIZES.container / 3
                            : SIZES.width / 2.3,
                      },
                    ]}
                    key={index}>
                    <Cardstyle1
                      id={data.id}
                      title={data.title}
                      image={data.image}
                      price={data.price}
                      offer={data.offer}
                      color={data.color}
                      brand={data.brand}
                      hascolor={data.hascolor}
                      discount={data.discount}
                      onPress={() => navigation.navigate('ProductsDetails')}
                      onPress3={() => addItemToWishList(data)}
                      // onPress2={() => moresheet2.current.openSheet('SkipLoginSheet')}
                    />
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
        <View
          style={[
            GlobalStyleSheet.container,
            {paddingHorizontal: -15, paddingVertical: 20, paddingBottom: 15},
          ]}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 20}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
              {offerData.map((data: any, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={[
                      {
                        padding: 10,
                        backgroundColor: theme.dark
                          ? 'rgba(255,255,255,.1)'
                          : colors.card,
                        borderRadius: 4,
                      },
                      Select === data && {
                        backgroundColor: COLORS.primary,
                      },
                    ]}
                    onPress={() => {
                      setSelect(data);
                      navigation.navigate('Products');
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                      }}>
                      <Image
                        style={{
                          height: 45,
                          width: 45,
                          tintColor:
                            Select === data ? COLORS.white : COLORS.primary,
                        }}
                        source={data.image}
                      />
                      <View>
                        <Text
                          style={[
                            FONTS.fontMedium,
                            {
                              fontSize: 15,
                              color:
                                Select === data ? COLORS.white : colors.title,
                            },
                          ]}>
                          {data.title}
                        </Text>
                        <Text
                          style={[
                            FONTS.fontRegular,
                            {
                              fontSize: 12,
                              color:
                                Select === data ? COLORS.white : colors.title,
                              opacity: 0.7,
                            },
                          ]}>
                          {data.text}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
        <View style={[GlobalStyleSheet.container, {padding: 0}]}>
          <Image
            style={{
              width: '100%',
              height: undefined,
              aspectRatio: 1 / 0.3,
              resizeMode: 'contain',
            }}
            source={require('../../assets/images/item2/offer2.png')}
          />
        </View>
        <View
          style={[
            GlobalStyleSheet.container,
            {paddingHorizontal: 0, paddingTop: 10},
          ]}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 20}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                marginRight: 10,
              }}>
              {ArrivalData.map((data: any, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Products')}
                    key={index}
                    style={{
                      backgroundColor: colors.card,
                      height: 35,
                      alignItems: 'center',
                      gap: 5,
                      //justifyContent: 'center',
                      flexDirection: 'row',
                      borderRadius: 34,
                      borderWidth: 1,
                      borderColor: colors.text,
                      //marginTop: 10,
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                      overflow: 'hidden',
                    }}>
                    <Image
                      style={{width: 44, height: 45, resizeMode: 'contain'}}
                      source={data.image}
                    />
                    <Text
                      style={{
                        ...FONTS.fontMedium,
                        fontSize: 13,
                        color: colors.title,
                      }}>
                      {data.title}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
        <View
          style={[
            GlobalStyleSheet.container,
            {
              paddingHorizontal: 20,
              backgroundColor: theme.dark
                ? 'rgba(255,255,255,.1)'
                : colors.card,
              paddingVertical: 5,
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={[FONTS.fontMedium, {fontSize: 18, color: colors.title}]}>
              Party & Sports Essentials
            </Text>
            <View style={{marginTop: -10, marginRight: -25}}>
              <Image
                style={{resizeMode: 'contain', height: 60, width: 145}}
                source={IMAGES.casual}
              />
            </View>
          </View>
        </View>
        <View style={[GlobalStyleSheet.container, {padding: 0}]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {card2Data.map((data: any, index: any) => {
                return (
                  <View
                    style={[
                      {
                        marginBottom: 0,
                        width:
                          SIZES.width > SIZES.container
                            ? SIZES.container / 3
                            : SIZES.width / 2.3,
                      },
                    ]}
                    key={index}>
                    <Cardstyle1
                      id={data.id}
                      title={data.title}
                      image={data.image}
                      price={data.price}
                      offer={data.offer}
                      color={data.color}
                      brand={data.brand}
                      hascolor={data.hascolor}
                      discount={data.discount}
                      onPress={() => navigation.navigate('ProductsDetails')}
                      onPress3={() => addItemToWishList(data)}
                    />
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
        <View style={[GlobalStyleSheet.container, {paddingVertical: 5}]}>
          <View style={{marginHorizontal: -15, marginVertical: 10}}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{}}>
              {abs2Data.map((data, index) => {
                return (
                  <View key={index} style={{marginRight: 10}}>
                    <Image
                      style={{width: 201, height: 110}}
                      source={data.image}
                    />
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
        <View
          style={[
            GlobalStyleSheet.container,
            {
              paddingHorizontal: 20,
              backgroundColor: theme.dark
                ? 'rgba(255,255,255,.1)'
                : colors.card,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.primaryLight,
              paddingVertical: 10,
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={[FONTS.fontMedium, {fontSize: 18, color: colors.title}]}>
              Blockbuster deals
            </Text>
            <View style={{}}>
              <Text
                style={[
                  FONTS.fontRegular,
                  {fontSize: 12, color: colors.text, textAlign: 'right'},
                ]}>
                Offer Ends in{' '}
              </Text>
              <StopWatch2 />
            </View>
          </View>
        </View>
        <View
          style={[
            GlobalStyleSheet.container,
            {
              padding: 0,
              backgroundColor: theme.dark
                ? 'rgba(255,255,255,.1)'
                : colors.card,
            },
          ]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View
              style={{
                width: '65%',
                padding: 20,
                borderRightWidth: 1,
                borderRightColor: COLORS.primaryLight,
              }}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('ProductsDetails')}>
                <Text
                  style={[
                    FONTS.fontMedium,
                    {fontSize: 13, color: COLORS.primary},
                  ]}>
                  Man`s T-Shirts
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('ProductsDetails')}>
                <Text
                  numberOfLines={1}
                  style={[
                    FONTS.fontRegular,
                    {fontSize: 15, color: colors.title, paddingRight: 45},
                  ]}>
                  Stretchable T-Shirts for man`s
                </Text>
              </TouchableOpacity>
              <Text
                style={[FONTS.fontMedium, {fontSize: 18, color: colors.title}]}>
                $105{' '}
                <Text
                  style={[
                    FONTS.fontJostLight,
                    {
                      fontSize: 11,
                      color: colors.title,
                      opacity: 0.6,
                      textDecorationLine: 'line-through',
                    },
                  ]}>
                  $112
                </Text>
              </Text>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('ProductsDetails')}>
                  <Image
                    style={{
                      height: undefined,
                      width: '100%',
                      aspectRatio: 1 / 0.8,
                      resizeMode: 'contain',
                    }}
                    source={swiperimageData[currentSlide].image}
                  />
                </TouchableOpacity>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingHorizontal: 15,
                    marginTop: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 10,
                    }}>
                    {swiperimageData.map((data: any, index) => {
                      return (
                        <TouchableOpacity
                          onPress={() => setCurrentSlide(index)}
                          key={index}
                          style={[
                            {
                              borderWidth: 1,
                              borderColor: theme.dark ? COLORS.card : '#DDDDDD',
                              height: 35,
                              width: 35,
                              borderRadius: 4,
                              alignItems: 'center',
                              justifyContent: 'center',
                            },
                          ]}>
                          <Image
                            style={{
                              height: 28,
                              width: 28,
                              resizeMode: 'contain',
                            }}
                            source={data.smallImage}
                          />
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </ScrollView>
              </View>
            </View>
            <View style={{width: '35%'}}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('ProductsDetails')}
                style={{
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: COLORS.primaryLight,
                  marginHorizontal: 0,
                  paddingBottom: 10,
                }}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    height: undefined,
                    width: '100%',
                    aspectRatio: 1 / 1,
                  }}
                  source={IMAGES.greenhoodie}
                />
                <Text
                  style={[
                    FONTS.fontMedium,
                    {
                      fontSize: 12,
                      color: colors.title,
                      paddingHorizontal: 15,
                      marginTop: -15,
                      textAlign: 'center',
                    },
                  ]}>
                  Green hoodie Pure Cotton
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('ProductsDetails')}
                style={{alignItems: 'center', paddingBottom: 10}}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    height: undefined,
                    width: '100%',
                    aspectRatio: 1 / 1,
                  }}
                  source={IMAGES.hoodietop}
                />
                <Text
                  style={[
                    FONTS.fontMedium,
                    {
                      fontSize: 12,
                      color: colors.title,
                      paddingHorizontal: 15,
                      marginTop: -10,
                      textAlign: 'center',
                    },
                  ]}>
                  Hooded zip-up hoodie
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={[
            GlobalStyleSheet.container,
            {paddingVertical: 5, padding: 0},
          ]}>
          <Image
            style={{
              width: '100%',
              height: undefined,
              aspectRatio: 1 / 0.3,
              resizeMode: 'contain',
            }}
            source={IMAGES.offer2}
          />
        </View>
        <View
          style={[
            GlobalStyleSheet.container,
            {
              paddingHorizontal: 20,
              backgroundColor: theme.dark
                ? 'rgba(255,255,255,.1)'
                : colors.card,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.primaryLight,
            },
          ]}>
          <Text style={[FONTS.fontMedium, {fontSize: 18, color: colors.title}]}>
            Home Wearing Clothes
          </Text>
        </View>
        <View
          style={[
            GlobalStyleSheet.container,
            {padding: 0, backgroundColor: colors.card, marginBottom: 10},
          ]}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: '35%',
                borderRightWidth: 1,
                borderRightColor: COLORS.primaryLight,
              }}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('ProductsDetails')}
                style={{
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: COLORS.primaryLight,
                  padding: 10,
                  paddingBottom: 23,
                }}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    height: undefined,
                    width: '100%',
                    aspectRatio: 1 / 1.1,
                  }}
                  source={IMAGES.jersey}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('ProductsDetails')}
                style={{alignItems: 'center', padding: 10, paddingBottom: 10}}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    height: undefined,
                    width: '100%',
                    aspectRatio: 1 / 1.1,
                  }}
                  source={IMAGES.kidshoodies}
                />
              </TouchableOpacity>
            </View>
            <View style={{width: '65%'}}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('ProductsDetails')}
                style={{
                  alignItems: 'center',
                  padding: 10,
                  paddingBottom: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: COLORS.primaryLight,
                }}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    height: undefined,
                    width: '100%',
                    aspectRatio: 1 / 0.6,
                  }}
                  source={IMAGES.frauentshirt}
                />
              </TouchableOpacity>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('ProductsDetails')}
                  style={{
                    alignItems: 'center',
                    padding: 10,
                    paddingBottom: 10,
                    width: '50%',
                    borderRightWidth: 1,
                    borderRightColor: COLORS.primaryLight,
                  }}>
                  <Image
                    style={{
                      resizeMode: 'contain',
                      height: undefined,
                      width: '100%',
                      aspectRatio: 1 / 1.2,
                    }}
                    source={IMAGES.greenhoodie}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('ProductsDetails')}
                  style={{
                    alignItems: 'center',
                    padding: 10,
                    paddingBottom: 10,
                    width: '50%',
                  }}>
                  <Image
                    style={{
                      resizeMode: 'contain',
                      height: undefined,
                      width: '100%',
                      aspectRatio: 1 / 1.2,
                    }}
                    source={IMAGES.hoodietop}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            GlobalStyleSheet.container,
            {
              paddingHorizontal: 20,
              backgroundColor: colors.card,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.primaryLight,
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={[FONTS.fontMedium, {fontSize: 18, color: colors.title}]}>
              Sponsored
            </Text>
            <Text
              style={[
                FONTS.fontRegular,
                {fontSize: 13, color: COLORS.success},
              ]}>
              Min. 30% Off
            </Text>
          </View>
        </View>
        <View
          style={[
            GlobalStyleSheet.container,
            {paddingHorizontal: 20, backgroundColor: colors.card},
          ]}>
          <View style={{marginHorizontal: -20, marginVertical: 10}}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingHorizontal: 15}}>
              {abs3Data.map((data, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('Products')}
                    key={index}
                    style={{marginHorizontal: 5}}>
                    <Image
                      style={{width: 320, height: 100, borderRadius: 4}}
                      source={data.image}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>

        <View style={[GlobalStyleSheet.container, {padding: 0}]}>
          <View
            style={[
              GlobalStyleSheet.row,
              {
                marginTop: 5,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.primaryLight,
                marginBottom: 15,
              },
            ]}>
            {card3Data.map((data: any, index) => {
              return (
                <View
                  style={[
                    GlobalStyleSheet.col50,
                    {marginBottom: 0, paddingHorizontal: 0},
                  ]}
                  key={index}>
                  <Cardstyle1
                    id={data.id}
                    title={data.title}
                    image={data.image}
                    price={data.price}
                    offer={data.offer}
                    color={data.color}
                    brand={data.brand}
                    discount={data.discount}
                    hascolor={data.hascolor}
                    onPress={() => navigation.navigate('ProductsDetails')}
                    onPress3={() => addItemToWishList(data)}
                  />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <BottomSheet2 ref={moresheet2} />
    </View>
  );
};

export default Home;
