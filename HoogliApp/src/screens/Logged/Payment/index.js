import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Text } from "react-native";
import GlobalStateContext from "../../../globalState/GlobalStateContext";
import { ButtonHeader, HeaderListPage, ImageHeader, ImageNoPay, TextPay, TextPaymente, ViewBody, ViewMidInfos, ViewTopInfos } from "./styled";




const Paymente = () => {


    const navigation = useNavigation();


    const mensalidades = [

    ]

    const checkMensalidades = () => {
        if(mensalidades.length === 0){
            return(

                <TextPay> Nao tem nenhuma mensalidade pendente</TextPay>
            )
        } else if(mensalidades.length >= 1){
            return(
                <Text> Tem </Text>
            )
        }
    }

    return(
        <ViewBody>
            <HeaderListPage>
            <ButtonHeader onPress={()=> navigation.navigate('HOME')}>
                <ImageHeader source={require('../../../img/setaBranca.png')}></ImageHeader>
                </ButtonHeader>
            </HeaderListPage>
            <ViewTopInfos>
            <TextPaymente>Pagamento da sua</TextPaymente>
            <TextPaymente>mensalidade</TextPaymente>
            </ViewTopInfos>
            <ViewMidInfos>
                <ImageNoPay source={require('../../../img/icone-feliz.png')}></ImageNoPay>
                {checkMensalidades()}
            </ViewMidInfos>
        </ViewBody>
    )

}

export default Paymente;