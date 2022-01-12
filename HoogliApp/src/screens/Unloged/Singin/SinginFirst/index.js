import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { Button, ButtonEnter, HeaderListPage, InputRegister, Linha, TextButton, TextButton2, TextRegister, TextSubEnter, ViewBody, ViewBodyScroll, ViewEnter, ViewInputs, ViewTextRegister } from "./styled";


const SinginFirst = () => {

    const navigation = useNavigation();

   return(
    <ViewBodyScroll
    behavior="position"
    >
       <ViewBody>
           <HeaderListPage>

           </HeaderListPage>
           <ViewTextRegister>
           <TextRegister>Vamos fazer seu cadastro</TextRegister>
           <TextRegister>Digite suas informações</TextRegister>
           </ViewTextRegister>
           <ViewInputs>
                <InputRegister placeholder='CPF' placeholderTextColor="#c4bebe">
                </InputRegister>
                <InputRegister placeholder='Email' placeholderTextColor="#c4bebe">
                </InputRegister>
           </ViewInputs>
           <ViewEnter>
               <Linha></Linha>
                <TextSubEnter>Ja tem conta?</TextSubEnter>
                <ButtonEnter onPress={()=> navigation.navigate('LOGINN')}>
                <TextButton2>ENTRAR</TextButton2>
                </ButtonEnter>
           </ViewEnter>
           <Button onPress={()=> navigation.navigate('SINGINSECOND')}>
               <TextButton>Seguir</TextButton>
           </Button>
           
       </ViewBody>
       </ViewBodyScroll>
   )    
}

export default SinginFirst;
