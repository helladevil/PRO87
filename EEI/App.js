import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/stack';


import HomeScreen from "../Screens/Home";
import SpaceCraftScreen from "../Screens/SpaceCraft";
import StarMapScreen from '../Screens/StarMap';
import DailyPicScreen from '../Screens/DailyPic';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationConteiner>
            <Stack.Navigator initialRouteName="Home" ScreenOptions={{
                headerShown: false
            }}/>
           <Stack.Screen name= "Home" component={HomeScreen}/>
           <Stack.Screen name= "StarMap" component={StarMapScreen}/>
           <Stack.Screen name= "DailyPic" component={DailyPicScreen}/>
           <Stack.Screen name= "SpaceCraft" component={SpaceCraftScreen}/>     
           </Stack.Navigator>
            </NavigationContainer>
    );
}
 
export default App;