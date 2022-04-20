import { View, Text, Image, StyleSheet, TextInput, Button, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context';

// import AppLoading from 'expo-app-loading';
// import { useFonts, BalsamiqSans_400Regular } from '@expo-google-fonts/balsamiq-sans';
// import {
//   SourceSansPro_400Regular_Italic,
//   SourceSansPro_700Bold,
// } from '@expo-google-fonts/source-sans-pro';

import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import {
  Merienda_400Regular,
  Merienda_700Bold
} from "@expo-google-fonts/merienda";





export default function ChargerReviews({ route }) {
  const chargerId = route.params.charger.id;
  const currentUserId = route.params.currentUserId;
  const [ currentChargerReviews, setCurrentChargerReviews ] = useState(null);
  const [ newReview, setNewReview ] = useState(null);


  
  // let [fontsLoaded] = useFonts({
  //   BalsamiqSans_400Regular,
  //   SourceSansPro_400Regular_Italic,
  //   SourceSansPro_700Bold,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={[styles.text, { fontFamily: 'SourceSansPro_400Regular_Italic' }]}>
  //         Source Sans Pro Italic
  //       </Text>
  //       <Text style={[styles.text, { fontFamily: 'SourceSansPro_700Bold' }]}>
  //         Source Sans Pro Bold
  //       </Text>
  //       <Text style={[styles.text, { fontFamily: 'BalsamiqSans_400Regular' }]}>
  //         Balsamiq Sans Regular
  //       </Text>
  //       <Text style={[styles.text]}>Platform Default</Text>
  //     </View>
  //   );
  // }
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    Merienda_400Regular,
    Merienda_700Bold,

  });

  
  


  useEffect(async () => {
    try {
        const res = await axios.get(`http://localhost:3000/chargers/${chargerId}`);
        const reviews = await res.data;

        const reviewsUsers = reviews.map( review => { 
          return {
            review: review.review,
            reviewId: review.id,
            userId: review.user.id,
            userAvatar: review.user.avatar,
            userUsername: review.user.username,
            chargerId: chargerId
          };
        });
        
        setCurrentChargerReviews(reviewsUsers);
    } catch (e) {
        console.log(e);
    }
  }, []);

  function displayReviewInfo() {
    if (currentChargerReviews !== null) {
      const showingReviewsInfo = currentChargerReviews.map( r => {
        return (
          <View key = {r.reviewId} style = {{ marginBottom: 18 }}>
            <View style = {{ marginBottom: 5, flexDirection: 'row', }}>
              <Image style={[styles.tinyAvatar, {marginRight: 20}]} source={{ url: r.userAvatar }} />
              <Text style = {{ alignSelf: 'flex-end', color: '#20BE94', fontSize: 18, fontFamily: 'Inter_700Bold'}}>{r.userUsername}</Text>
            </View>
            <Text style = {{ color: '#edb', fontSize: 18, fontFamily: 'Merienda_400Regular'}}>{r.review}</Text>
          </View>
      )});
//style={{ fontFamily: 'Inter_500Medium'}}
      return showingReviewsInfo;
    }
  }

  async function handleSubmit() {
    const newReviewObj = {
      review: newReview,
      charger_id: chargerId,
      user_id: currentUserId
    };

    axios.post(`http://localhost:3000/reviews`, newReviewObj)
      .then(res => { 
        const addedReview = {
          review: res.data.review,
          reviewId: res.data.id,
          userAvatar: res.data.user.avatar,
          userId: res.data.id,
          userUsername: res.data.user.username
        };

        setCurrentChargerReviews( prevReviews => [ addedReview, ...prevReviews ]);
      })
      .catch(function(error){
          if (error.response) {
              console.log(error.response.data.errors);
          }
      });

    setNewReview(null);
  }

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView showsVerticalScrollIndicator = { false } style = {{ marginBottom: 50, width: '85%' }}>
        { displayReviewInfo() }
      </ScrollView>
      
      <View style = { styles.footer }>
        <View style = { styles.inputContainer }>
          <TextInput 
            placeholder = 'Add review' 
            onChangeText = { (e) => setNewReview(e) } 
            name = 'chargerType'
            value = { newReview } 
          />
        </View>
        <View >
          <Button  
            title="Add"
            color = '#20BE94'
            onPress = { () => handleSubmit() } 
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyAvatar: {
    width: 50,
    height: 50,
  },
  avatar: {
    width: 66,
    height: 58,
  },
  footer: {
    position: 'absolute', 
    bottom: 0,
    color: 'white',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: 'white',
    elevation: 40,
    width: '80%',
    flex: 1,
    height: 50,
    marginVertical: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 15,
    //marginBottom: 10,
  }
});