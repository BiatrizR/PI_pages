import React, { useState, useRef } from 'react';
import {View, ScrollView, Text, StyleSheet, Dimensions, ImageBackground,
TextInput, TouchableOpacity, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons'


const {width: screenWidth, height: screenHeight} = Dimensions.get('window');



export default function App(){
   const carouselRef =  useRef(null);

  const [lista, setLista] = useState([

    {
      title: "Infanto Juvenil",
      Autor: "Maria José Dupré",
      resumo: "Coleção Infanto Juvenil. A Ilha Perdida é uma obra literária de Maria José Dupré, publicada em 1944, pela editora Brasiliense.",
      img: 'https://images-na.ssl-images-amazon.com/images/I/51vCTvX78kL.jpg'
    },
    {
      title: "Romance",
      Autor: "Lannoy Dorin",
      resumo: "Coleção Infanto Juvenil, da biblioteca Municipal de Rio das Pedras.",
      img: 'https://img.skoob.com.br/83LDajpy8EmUzzGimH50WWR1caQ=/300x0/center/top/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/18959/UMA_LEVE_ESPERANCA_1236965102B.jpg'
    },
    {
      title: "Clássicos",
      Autor: "Julio Emilio Brás",
      resumo: "Coleção Infanto Juvenil.da biblioteca Municipal de Rio das Pedras",
      img:'https://http2.mlstatic.com/D_NQ_NP_803200-MLB29158562451_012019-O.jpg'
    },
  ]);

  const [background, setBackground] = useState(lista[0].img);

  
  const _renderItem = ({item, index}) => {
      return(
        <View>

          <TouchableOpacity>
            <Image
            source={{uri: item.img}}
            style={styles.carouselImg}
            />
            <Text style={styles.carouselText}>
              {item.title}
            </Text>
          </TouchableOpacity>

        </View>
      );
  }
  return(

  <ScrollView style={styles.container}>
     
      <View style={{flex:1, height: screenHeight}}>
         
          <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
           
            <ImageBackground
                source = {{ uri: background }}
                style={styles.imgBg}
                blurRadius={8}
            >
                <View style={styles.viewSearch}>

                    <TextInput 
                      style={styles.input}
                      placeholder="Buscar Livro"
                    />

                    <TouchableOpacity style={styles.icon}>

                      <Icon name="search" color="#FF8C00" size={42} />
                    </TouchableOpacity>

                </View>

                <Text style={{color:'#FFF', fontSize:25, fontWeight:'bold', marginLeft:10,
                  MarginVertical:10,}}>
                  Conheça nosso Acervo
                </Text>


                <View style={styles.slideView}>

                    <Carousel
                     style={styles.carousel}
                     ref={carouselRef}
                     data={lista}
                     renderItem={_renderItem}
                     sliderWidth={screenWidth}
                     itemWidth={200}
                     inactiveSlideOpacity={0.5}>
                                       
                    </Carousel>
                </View>


            </ImageBackground>

          </View>

      </View>
  
  </ScrollView>

  );

}

const styles = StyleSheet.create({

  container:{
    flex:1,
  },

  imgBg:{
    flex: 1,
    width: null,
    height:null,
    opacity:1,
    justifyContent: "flex-start",
    backgroundColor: '#000'

  },

  viewSearch: {
    marginTop:20,
    backgroundColor: '#F0F8FF',
    elevation:10,
    borderRadius: 10,
    marginVertical:10,
    width: '95%',
    height: '10%',
    flexDirection: 'row',
    paddingLeft: 20,
    alignSelf:'center'
  },

  input:{
    width: '95%',
    padding: 13,
    paddingLeft: 10,
    fontSize: 20,
  },

  icon:{
    psoition:'absolute',
    right:30,
    top:15
  },

  slideView:{
    flex:1,
    width: '100%',
    height: 350,
    paddingTop:50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  carouselImg:{
    alignSelf: 'center',
    width: 200,
    height: 300,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0,5)'
  },

  carouselText:{
  
    fontSize: 22,
    padding: 15,
    paddingTop: 30,
    color: '#FFF',
    bottom: 10,
    left:2,
    fontWeight: 'bold'

  },



})