import React, { Component } from 'react';
import{
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
// Install this library
import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props}) => (
    <Text {...props} style={styles.skipText}>Skip</Text>
);

const Next = ({...props}) => (
    <TouchableOpacity {...props} style={styles.buttonNext}>
        <Text style={styles.buttonNextText}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity {...props} style={styles.buttonNext}>
        <Text style={styles.buttonNextText}>Done</Text>
    </TouchableOpacity>
);
export default class OnboardingScreen extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <Onboarding 
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}

            // Soon -> Change navigation to replace,
            onSkip={()=>this.props.navigation.navigate('Login')}
            onDone={()=>this.props.navigation.navigate('Login')}
            pages={[
                {
                    backgroundColor:'#099F84',
                    image: <Image style={styles.v_onboarding} source={require('../assets/images/V_Onboarding1.png')} />,
                    title: <Text style={styles.heading1Text}>Analyze</Text>,
                    subtitle: <Text style={styles.heading2Text}>We put a well thought out strategy behind every decision we make</Text>
                },
                {
                    backgroundColor: '#099F84',
                    image: <Image style={styles.v_onboarding2} source={require('../assets/images/V_Onboarding2.png')} />,
                    title: <Text style={styles.heading1Text2}>Quality</Text>,
                    subtitle: <Text style={styles.heading2Text}>We work with the intuition of integrity, honesty, and attention</Text>
                },
                {
                    backgroundColor: '#099F84',
                    image: <Image style={styles.v_onboarding3} source={require('../assets/images/V_Onboarding3.png')} />,
                    title: <Text style={styles.heading1Text3}>Magic</Text>,
                    subtitle: <Text style={styles.heading2Text}>Share your challenge with our team, and we will solve it
                    </Text>
                }
                
            ]}  
            />
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,        
        backgroundColor: '#099F84'
    },
    v_onboarding:{
        position: 'absolute',
        width: 235,
        height: 235,
        bottom: '50%',
        left: 63        
    },
    v_onboarding2:{
        position: 'absolute',
        width: 188,
        height: 270,
        bottom: '50%',
        left: 86,    
    },
    v_onboarding3:{
        position: 'absolute',
        width: 235,
        height: 235,
        bottom: '50%',
        left: 63,
    },
    heading1Text:{        
        position: 'absolute',
        width: 155,
        height: 54,
        left: 102,
        top: 369,
        fontFamily: 'Poppins-Black',
        fontSize: 36,
        lineHeight: 54,
        color: '#fff'
    },
    heading1Text2:{        
        position: 'absolute',
        width: 142,
        height: 54,
        left: 109,
        top: 369,
        fontFamily: 'Poppins-Black',
        fontSize: 36,
        lineHeight: 54,
        color: '#fff'
    },
    heading1Text3:{        
        position: 'absolute',
        width: 117,
        height: 54,
        left: 121,
        top: 369,
        fontFamily: 'Poppins-Black',
        fontSize: 36,
        lineHeight: 54,
        color: '#fff'
    },
    heading2Text:{  
        position: 'absolute',
        width: 255,
        height: 36,
        left: 52,
        top: 423,
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        textAlign: 'center',
        lineHeight: 18,
        color: '#fff',
    },
    buttonNext:{
        width: 57,
        height: 18,
        right: '15%',
        borderRadius: 10
    },
    buttonNextText:{
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        lineHeight: 18,
        color: '#fff'
    },
    skipText:{
        width: 57,
        height: 18,
        left: '15%',
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        lineHeight: 18,
        color: '#fff'
    }
})