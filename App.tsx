/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {

  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,

} from 'react-native';


function App(): React.JSX.Element {

  return (

    <>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <Image style={style.banner}
            source={require('./assets/img/bg.jpg')}
          />
        </View>
        <View style={style.contenedor}>
          <Text style={style.titulo}>Que hacer en Paris</Text>
          <ScrollView
            horizontal
          >
            <View>
              <Image style={style.ciudad}
                source={require('./assets/img/actividad1.jpg')}
              />
            </View>
            <View>
              <Image style={style.ciudad}
                source={require('./assets/img/actividad2.jpg')}
              />
            </View>
            <View>
              <Image style={style.ciudad}
                source={require('./assets/img/actividad3.jpg')}
              />
            </View>
            <View>
              <Image style={style.ciudad}
                source={require('./assets/img/actividad4.jpg')}
              />
            </View>
            <View>
              <Image style={style.ciudad}
                source={require('./assets/img/actividad5.jpg')}
              />
            </View>
          </ScrollView>
          <Text style={style.titulo}>Los mejores alojamientos</Text>
         
            <View>
              <Image style={style.mejores}
                source={require('./assets/img/mejores1.jpg')}
              />
            </View>
            <View>
              <Image style={style.mejores}
                source={require('./assets/img/mejores2.jpg')}
              />
            </View>
            <View>
              <Image style={style.mejores}
                source={require('./assets/img/mejores3.jpg')}
              />
            </View>

            <Text style={style.titulo}>Hospedaje en los angeles</Text>
             <View style={style.listado}>
             <View style={style.listadoItem}>
              <Image style={style.hospedaje}
                source={require('./assets/img/hospedaje1.jpg')}
              />
            </View>
             <View style={style.listadoItem}>
              <Image style={style.hospedaje}
                source={require('./assets/img/hospedaje2.jpg')}
              />
            </View>
             <View style={style.listadoItem}>
              <Image style={style.hospedaje}
                source={require('./assets/img/hospedaje3.jpg')}
              />
            </View>
             <View style={style.listadoItem}>
              <Image style={style.hospedaje}
                source={require('./assets/img/hospedaje4.jpg')}
              />
            </View>
          </View>
        </View>

      </ScrollView>
    </>

  );
}

const style = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20
  },
  contenedor: {
    marginHorizontal: 10
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,

  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listado: {
   flexDirection: 'row',
   flexWrap: 'wrap',
   justifyContent: 'space-between'

  },
  listadoItem: {
    flexBasis: '49%',
     
  },
  hospedaje:{ 
      height: 200,
      width : 300,
      marginVertical: 5
  }

})

export default App;
