import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { ButtonHeader, ImageHeader, ImagePartners, TextClinic, TextPartnes, ViewBody, ViewHeader, ViewImagensPart, ViewListPartner, ViewRow, ViewROw } from "./style";



const Partner = () => {

const navigation = useNavigation();

    return(
        <ViewBody>
            <ViewHeader>
                <ButtonHeader onPress={()=> navigation.navigate('HOME')}>
                <ImageHeader source={require('../../../img/setaBranca.png')}></ImageHeader>
                </ButtonHeader>
            </ViewHeader>
            <TextPartnes>Nossos Parceiros</TextPartnes>
            <ViewListPartner>
                <ViewRow>
                <ViewImagensPart>
                    <ImagePartners source={{uri:'https://image.freepik.com/vetores-gratis/coracao-do-molde-logo-hospital-shaped_1057-391.jpg'}}></ImagePartners>
                    <TextClinic>Clinic Name</TextClinic>
                </ViewImagensPart>
                <ViewImagensPart>
                    <ImagePartners source={{uri:'https://image.freepik.com/vetores-gratis/coracao-do-molde-logo-hospital-shaped_1057-391.jpg'}}></ImagePartners>
                    <TextClinic>Clinic Name</TextClinic>
                </ViewImagensPart>
                <ViewImagensPart>
                    <ImagePartners source={{uri:'https://image.freepik.com/vetores-gratis/coracao-do-molde-logo-hospital-shaped_1057-391.jpg'}}></ImagePartners>
                    <TextClinic>Clinic Name</TextClinic>
                </ViewImagensPart>
                <ViewImagensPart>
                    <ImagePartners source={{uri:'https://image.freepik.com/vetores-gratis/coracao-do-molde-logo-hospital-shaped_1057-391.jpg'}}></ImagePartners>
                    <TextClinic>Clinic Name</TextClinic>
                </ViewImagensPart>
                </ViewRow>
            </ViewListPartner>
        </ViewBody>
    )
}

export default Partner;