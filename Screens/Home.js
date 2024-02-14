import React ,{Component} from 'react';
import {Text, View} from 'react-native';

export default class Screen extends Component{
render(){
    return (
        <View
        style={style.container}>
            <View style={style.droidSafeArea} /> 
           <Text style={style.titleText}>Aplicacion</Text>
           <Text style={style.titleText}>Estelar</Text>  
        </View>,
        <TouchableOpacity style={styles.routeCard}>
        <Text style={styles.routeText}>Naves Espaciales</Text>
    </TouchableOpacity>,
    <TouchableOpacity style={styles.routeCard}>
    <Text style={styles.routeText}>Mapa Estelar</Text>
</TouchableOpacity>,
<TouchableOpacity style={styles.routeCard}>
            <Text style={styles.routeText}>Imagenes diarias</Text>
        </TouchableOpacity>
        );
   };
}