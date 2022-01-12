import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Text } from "react-native";
import GlobalStateContext from "../../../globalState/GlobalStateContext";
import { ButtonHeader, ButtonUnits, HeaderListPage, ImageHeader, ImageUnits, TextUnits, ViewBody, ViewMid } from "./styled";



const UnitsList = () => {
    const { listaClinicas, setIdClinic } = useContext(GlobalStateContext);

    const navigation = useNavigation();


    const buttonClinic = (id) => {
        setIdClinic(id)
        navigation.navigate('UNITS')
    }

    return(
        <ViewBody>
            <HeaderListPage>
                <ButtonHeader onPress={()=> navigation.navigate('HOME')}>
                <ImageHeader source={require('../../../img/setaBranca.png')}></ImageHeader>
                </ButtonHeader>
            </HeaderListPage>
            <TextUnits>Unidades</TextUnits>
            <ViewMid>
                {listaClinicas.map((itens) => {
                        return(
                            <ButtonUnits onPress={()=> buttonClinic(itens.id)}>
                            <ImageUnits source={{uri:itens.logo}}>
                            </ImageUnits>
                            <Text>{itens.local}</Text>
                            </ButtonUnits>
                        )
                })}
            </ViewMid>
        </ViewBody>
    )
}


export default UnitsList;