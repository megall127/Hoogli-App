import React, { useState } from "react";
import { KeyboardAvoidingView, PermissionsAndroid, ScrollView } from "react-native";
import { ButtonAddDenp, ButtonImage, HeaderButton, ImageHeaderButton, ImagePhoto, InputProfile, InputProfileCpf, NameText, TextImage, ViewBody, ViewBodyScroll, ViewInfosProfile, ViewPhoto } from "./styled";
import  { launchCamera ,  launchImageLibrary }  from 'react-native-image-picker';
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
    const [image, setImage] = useState();

    const navigation = useNavigation();

    async function openCamera(){
            await launchCamera({ mediaType: 'photo', quality: 1, includeBase64: true, saveToPhotos: true, maxHeight: 1000, maxWidth:600}, (res) => {
                try{
                    console.log(res)
                }catch(erro) {
                    console.log(erro)
                }
            })
      }
    async function openLibrary(){
            await launchImageLibrary({ mediaType: 'photo', quality: 1, includeBase64: true, saveToPhotos: true  }, (res) => {
                try{
                    setImage(res.assets[0].uri)
                } catch(erro) {
                    console.log(erro)
                }
            })
      }

    return( 
            <ViewBody>
            <ScrollView>
                <HeaderButton onPress={()=> navigation.navigate('HOME')}>
                    <ImageHeaderButton source={require('../../../img/setaAzul.png')}>
                    </ImageHeaderButton>
                </HeaderButton>
            <ViewBodyScroll
            behavior="position"
        >   
            <ViewPhoto>
                <ImagePhoto source={{uri: image}}>
                </ImagePhoto>
                <ButtonImage onPress={()=> openLibrary()}>
                    <TextImage>Carregar Foto</TextImage>
                </ButtonImage>
                <NameText>Carlos Alberto Paz</NameText>
            </ViewPhoto>
 

            <ViewInfosProfile>
                <InputProfileCpf placeholder="CPF" placeholderTextColor="#e3e3e3"></InputProfileCpf>
                <InputProfile placeholder="Email" placeholderTextColor="#e3e3e3"></InputProfile>
                <InputProfile placeholder="Telefone" placeholderTextColor="#e3e3e3"></InputProfile>
                <InputProfile placeholder="Endereço" placeholderTextColor="#e3e3e3"></InputProfile>
                <ButtonAddDenp onPress={()=> navigation.navigate('ADDDENPE')}>
                <TextImage>Adicionar</TextImage>
                <TextImage>Denpendentes</TextImage>
                </ButtonAddDenp>
            </ViewInfosProfile>
   
            </ViewBodyScroll>
            </ScrollView>
            </ViewBody>
        
        
    )
}

export default Profile;