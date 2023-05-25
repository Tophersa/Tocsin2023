import { View, Text, StyleSheet, FlatList, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import { MaterialIcons,MaterialCommunityIcons, Feather, Entypo, AntDesign, FontAwesome,Ionicons } from '@expo/vector-icons';
import InternalAlerts from '../../../../assets/data/InternalAlerts.json'
import Alerts from '../../../../assets/data/Alerts.json'

const InternalAlertsData = InternalAlerts.internalAlerts;
const AlertData = Alerts.alerts;

const LineAlertCard=(props)=>{
  return(
    <View style={lineAlertCardStyles.container}>
      <MaterialIcons name="notifications-on" size={20} color="#B9770E" />
      <View style={lineAlertCardStyles.right}>
        <Text style={lineAlertCardStyles.text} numberOfLines={1} ellipsizeMode={'tail'}>
          {props.message} 
          </Text>
        <Text style={lineAlertCardStyles.location}>{props.location}</Text>
      </View>
    </View>
  )
}

const InternalAlertCard=(props)=>{
  return(
    <View style={[internalAlertCardStyles.container, styles.shadowProp]}>
        <ImageBackground source={{uri: 'https://www.henryford.com/-/media/project/hfhs/henryford/henry-ford-blog/images/interior-banner-images/2020/04/er-still-safe.jpg?rev=75ba1d7ef71a48b883b4a5c455a22ba9'}} resizeMode="cover" imageStyle={{ borderRadius: 8}} style={internalAlertCardStyles.image}>
          <View style={internalAlertCardStyles.textCard}>
            <View style={[{flexDirection:"row", alignItems:"center"}]}>
              <Entypo name="location-pin" size={18} color="white" />
              <Text style={internalAlertCardStyles.location}>{props.location}</Text>
            </View>
            <Text numberOfLines={2} ellipsizeMode={'tail'} style={internalAlertCardStyles.message}>
            {props.message}
            </Text>
          </View>
        </ImageBackground>
    </View>
  )
}

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.pageContainer}>

      <Text style={styles.tittle}>Latest Alerts</Text>
      <View style={styles.latestAlertContainer}>
        <View style={styles.headerContainer}>
          <Feather name="bell" size={24} color="#FFBF00" />
        </View>
        <FlatList data={AlertData}
        renderItem={({item})=><LineAlertCard
                            location={item.location} 
                            message={item.message}
                            userID={item.userID}
                            images={item.images[0]}
                            category={item.category}
                            timeStamp={item.timestamp}
                            likes={item.likes}
                            comments={item.comments}
                              />
                  }
        keyExtractor={item => item.alertID}
        showsVerticalScrollIndicator={false}
        />
      </View>

      <Text style={styles.tittle}>Emergency Contacts</Text>
      <View style={[styles.emergencyCover, styles.shadowProp]}>
        <View style={[{marginHorizontal:10}]}>
          <FontAwesome name="phone" size={24} color="white" />
        </View>
        <Text style={styles.emergencyText}>Contacts</Text>
      </View>

      <View style={styles.emergencyColumn}>
        <View style={[styles.contactCard, styles.shadowProp]}>
          <MaterialCommunityIcons name="police-badge" size={30} color="#E74C3C" />
          <Text style={styles.contactName}>Police</Text>
          <View style={styles.break}/>
          <Text style={styles.contactNumber}>10111</Text>
        </View>
        <View style={[styles.contactCard, styles.shadowProp]}>
          <MaterialCommunityIcons name="ambulance" size={30} color="#E74C3C" />
          <Text style={styles.contactName}>Ambulance</Text>
          <View style={styles.break}/>
          <Text style={styles.contactNumber}>10177</Text>
        </View>
        <View style={[styles.contactCard, styles.shadowProp]}>
          <MaterialCommunityIcons name="fire-truck" size={30} color="#E74C3C" />
          <Text style={styles.contactName}>Fire Brigade</Text>
          <View style={styles.break}/>
          <Text style={styles.contactNumber}>112</Text>
        </View>
      </View>

      <View style={[{flexDirection: "row", justifyContent:"space-between",alignItems:"center"}]}>
        <Text style={styles.tittle}>Internal Alerts</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>

      <FlatList
        data={InternalAlertsData}
        renderItem={({item}) => <InternalAlertCard 
                                location={item.location} 
                                message={item.message}
                                userID={item.userID}
                                images={item.images[0]}
                                category={item.category}
                                timeStamp={item.timestamp}
                                likes={item.likes}
                                comments={item.comments}
                                />
                  }
        keyExtractor={item => item.alertID}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

    </SafeAreaView>
  )
}

export default HomeScreen

const lineAlertCardStyles = StyleSheet.create({
    container: {
      backgroundColor: '#FAD7A0',
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 10,
      height: 45,
      margin: 2,
      padding: 2
    },
    right:{
      marginHorizontal:10
    },
    text:{
      fontSize: 14
    },
    location:{
      fontWeight: "700",
      fontSize: 12
    }
  });


const internalAlertCardStyles = StyleSheet.create({
  container:{
    margin: 10,
    flex: 1,
    borderRadius: 10
  },
  image:{
    width: 250,
    height: 120,
    justifyContent: "flex-end",

  },
  location:{
    fontSize: 14,
    fontWeight: "bold",
    color: "white"
  },
  message:{
    fontSize: 16,
    color: "white"
  },
  textCard:{
    backgroundColor: "rgba(44, 62, 80 , 0.9)",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  }
})

const styles = StyleSheet.create({
    pageContainer:{
      backgroundColor: '#F9EBEA',
      flex: 1
    },
    tittle:{
      fontSize: 20,
      margin: 10
    },
    latestAlertContainer:{
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#FAD7A0',
      padding: 10,
      margin: 10,
      height: 250
    },
    headerContainer:{
      alignSelf: "center",
      alignItems: "center",
      flexDirection: 'row',
    },
    text:{
      fontSize: 18,
      color: 'black',
      fontWeight: "700"
    },
    emergencyCover:{
      height: 40,
      backgroundColor: "#E74C3C",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      margin: 10,
      flexDirection: "row",
      alignItems: "center"
    },
    emergencyText:{
      fontWeight: "bold",
      fontSize: 20,
      color: "white"
    },
    emergencyColumn:{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 10
    },
    contactCard:{
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 15,
      height: 120,
      width: 110,
    },
    contactName:{
      fontSize: 16,
      color: "#E74C3C"
    },
    break:{
      borderWidth: 1,
      width: 80,
      marginVertical:2,
      borderColor: "#FADBD8"
    },
    contactNumber:{
      fontSize: 20,
      fontWeight: "700",
      color: "#E74C3C"
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
});