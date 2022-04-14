import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ChargerReviews({ route }) {
  const chargerId = route.params.charger.id;
  const currentUserId = route.params.currentUserId;
  const [ currentChargerReviews, setCurrentChargerReviews ] = useState(null);
  const [ newReview, setNewReview ] = useState(null);

  console.log('route.params - chargerReviews ', route.params)

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
    if (currentChargerReviews !== null){
      const showingReviewsInfo = currentChargerReviews.map( r => {
        console.log('r', r);
       return <View key = {r.reviewId} style = {{ marginBottom: 20 }}>
          <View style = {{ marginBottom: 5, }}>
            <Image style={styles.tinyLogo} source={{ url: r.userAvatar }} />
            <Text>{r.userUsername}</Text>
          </View>
          <Text>{r.review}</Text>
        </View>
       } );

      return showingReviewsInfo;
    }//style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  }

  async function handleSubmit() {
    console.log('submit', newReview);
    const newReviewObj = {
      review: newReview,
      charger_id: chargerId,
      user_id: currentUserId
    };

    axios.post(`http://localhost:3000/reviews`, newReviewObj)
      .then(res => { 
          console.log('res.data ', res.data);

    //       "review": "Blabla",
    // "reviewId": 6,
    // "userAvatar": "https://randomuser.me/api/portraits/thumb/women/3.jpg",
    // "userId": 13,
    // "userUsername": "mmarks",

          const addedReview = {
            review: res.data.review,
            reviewId: res.data.id,
            userAvatar: res.data.user.avatar,
            userId: res.data.id,
            userUsername: res.data.user.userUserName
          };
          //const addedReview = res.data;
          setCurrentChargerReviews(prevReviews => {
            return ([...prevReviews, addedReview])
          });
          //setNewChargerId(res.data);
          //onAddCharger(res.data) 
      })
      .catch(function(error){
          if (error.response) {
              console.log(error.response.data.errors);
          }
      });

      setNewReview(null);
    }
console.log('currentChargerReviews', currentChargerReviews)

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View >
        { displayReviewInfo() }
      </View>
      <View style = {styles.footer}>
        <View style={styles.inputContainer}>
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
            color = 'green'
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
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
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
  }
});