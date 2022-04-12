import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function ChargerReviews({ route }) {
  const chargerId = route.params.charger.id;
  const [ currentChargerReviews, setCurrentChargerReviews ] = useState(null);

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
              userUsername: review.user.username
            };
          });
          
          setCurrentChargerReviews(reviewsUsers);
      } catch (e) {
          console.log(e);
      }
    }, []);

  function displayReviewInfo() {
    if (currentChargerReviews !== null){
      const showingReviewsInfo = currentChargerReviews.map( r => 
        <View key = {r.reviewId} style = {{ marginBottom: 20 }}>
          <View style = {{ marginBottom: 5, }}>
            <Image style={styles.tinyLogo} source={{ url: r.userAvatar }} />
            <Text>{r.userUsername}</Text>
          </View>
          <Text>{r.review}</Text>
        </View>
      );

      return showingReviewsInfo;
    }
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      { displayReviewInfo() }
    </View>
  )
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
});