import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React from 'react';
import styles from './style';

export default function Home() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      {/* <StatusBar
        backgroundColor="#ddb784"
        barStyle="light-content"
        hidden={false}
      /> */}
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/background.png')}>
        <View style={{flexDirection: 'row', paddingHorizontal: 16}}>
          <Image
            style={styles.logoImg}
            resizeMode="contain"
            source={require('../assets/logo.png')}
          />
          <View style={{flex: 1, justifyContent: 'space-around'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}} />
              <Image
                style={{
                  width: 20,
                  height: 20,
                }}
                resizeMode="contain"
                source={require('../assets/notifications.png')}
              />

              <Image
                style={{
                  width: 20,
                  height: 20,
                  marginLeft: 24,
                }}
                resizeMode="contain"
                source={require('../assets/share.png')}
              />
            </View>
            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {[1, 2, 3, 4].map(index => (
                  <View key={index} style={styles.topScrollContainer}>
                    <Image
                      style={styles.topScrollImg}
                      resizeMode="contain"
                      source={require('../assets/image_circle.png')}
                    />
                    <Text numOfLines={1} style={{flex: 1}}>
                      Shri Mata Vaissdfsdafs
                    </Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </View>

        <View style={{flex: 1}}>
          <ScrollView
            style={{
              flex: 1,
            }}
            contentContainerStyle={{marginHorizontal: 20, paddingBottom: 40}}>
            <View style={styles.card}>
              <View>
                <Image
                  style={styles.cardImg}
                  resizeMode="cover"
                  source={require('../assets/centerImg.png')}
                />

                <Image
                  style={styles.topFrame}
                  resizeMode="contain"
                  source={require('../assets/topFrame.png')}
                />

                <Image
                  style={styles.bottomShadow}
                  resizeMode="contain"
                  source={require('../assets/bottomShadow.png')}
                />
              </View>

              <View style={styles.bottomContainer}>
                <Image
                  style={styles.bottomLImg}
                  resizeMode="contain"
                  source={require('../assets/leftImage.png')}
                />
                <Text style={{flex: 1, color: '#8C330D'}}>
                  हिन्दू धर्म में एक महत्वपूर्ण सिद्धांत है 'कर्म'. इसके अनुसार,
                  हमें केवल कर्म करना चाहि{' '}
                  <Text style={{fontWeight: 'bold'}}>..Read more</Text>
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
