import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    useWindowDimensions,
} 
from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import DetailNotificationsScreen from './DetailNotifications';

const NotifRoute = () => (
    <DetailNotificationsScreen/>
  );
  
const renderTabBar = props => (
    <TabBar
      {...props} 
      labelStyle={{fontFamily: 'Poppins-Bold', fontSize: 12}}   
      indicatorStyle={{ backgroundColor: '#ffff', }}
      style={{ backgroundColor: '#099f84', marginTop: 20, justifyContent: 'center', elevation: 3, width: 310, borderTopLeftRadius: 20, borderTopRightRadius: 20, fontFamily: 'Poppins-Bold', fontSize: 12}}
    />
  );

  export default function TabViewExample({ navigation }) {

    const layout = useWindowDimensions();
  
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'notif', title: 'Notification' },
    ]);
  
    const renderScene = SceneMap({
      notif: NotifRoute,
    });

    return (
        <View style={styles.container}>
            <View style={{flex: 0.1}}>
                {/* Navbar */}
                <Text style={styles.textMenuActivity} onPress={() => navigation.navigate('News')}>News</Text>
                <Text style={styles.textMenuHome} onPress={()=>navigation.navigate('Home')}>Home</Text>
                <View style={styles.selectionMenuNotification}>
                    <Text style={styles.textMenuNotification} onPress={()=>navigation.navigate('Notification')} >Notification</Text>
                </View>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
                <TabView
                    renderTabBar={renderTabBar}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                />
            </View>
        </View>
    );
  }

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f9f9fb',
    },
    textMenuActivity:{      
        position: 'absolute',
        left: 55,
        top : 22,
        color: 'rgba(38, 39, 52, 0.4)',
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21
    },
    textMenuHome:{
        position: 'absolute',
        left: 158,
        top : 22,
        color: 'rgba(38, 39, 52, 0.4)',
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21
    },
    textMenuNotification:{     
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21,
        color: '#f9f9fb',
        textAlign: 'center',
    },
    selectionMenuNotification:{
        justifyContent: 'center',
        position: 'absolute',
        width: 98,
        height: 16,
        left: 237,
        top: 25,
        backgroundColor: '#099f84',
        borderRadius: 50,
    },
});