import React from "react";
import { Text, View } from "react-native";
import { Button, ButtonEnter, HeaderListPage, InputRegister, Linha, TextButton, TextButton2, TextRegister, ViewBody, ViewBodyScroll, ViewEnter, ViewInputs, ViewTextRegister } from "./styled";


const SinginSecond = () => {


   return(

       <ViewBody>
       
           <HeaderListPage>

           </HeaderListPage>

           <ViewTextRegister>
           <TextRegister>Agora forneça essas informações</TextRegister>
           <TextRegister>segue abaixo</TextRegister>
           </ViewTextRegister>
           <ViewBodyScroll
    behavior="position"
    >
           <ViewInputs>
                <InputRegister placeholder='Nome' placeholderTextColor="#c4bebe">
                </InputRegister>
                <InputRegister placeholder='Telefone' placeholderTextColor="#c4bebe">
                </InputRegister>
                <InputRegister placeholder='CEP' placeholderTextColor="#c4bebe">
                </InputRegister>
           </ViewInputs>
       
           </ViewBodyScroll>
           <Button>
               <TextButton>Concluir Cadastro</TextButton>
           </Button>
       </ViewBody>
  
   )    
}

export default SinginSecond;