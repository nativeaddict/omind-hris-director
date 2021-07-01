import AsyncStorage from '@react-native-community/async-storage';

const deviceStorage = {
    async saveItem(key,value){
        try{
            await AsyncStorage.setItem(key,value);
        }
        catch(error){
            console.log('AsyncStorage Error: '+ error.message)
        }
    },

    async loadJWT(){
        try{
            const value = await AsyncStorage.getItem('token');
            if (value!==null){
                this.setState({
                    jwt: value,
                    loading: false
                });
            }
            else{
                this.setState({
                    loading: false
                });
            }
        }
        catch(error){
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    async deleteJWT(){
        try{
            await AsyncStorage.removeItem('token')
            .then(()=>{
                this.setState({
                    jwt: ''
                })
            });
        }
        catch(error){
            console.log('AsyncStorage Error: ' + error.message)
        }
    }
};

export default deviceStorage;