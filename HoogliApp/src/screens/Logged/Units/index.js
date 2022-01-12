import React, { useContext, useState } from "react";
import MapView from 'react-native-maps'
import { ButtonCard, ButtonHeader, CardMaps, HeaderListPage, ImageHeader, TextCard, TextCardTittle, ViewBody, ViewCarrosel } from "./styled";
import Carousel from "react-native-snap-carousel";
import { Text } from "react-native";
import GlobalStateContext from "../../../globalState/GlobalStateContext";
import { useNavigation } from "@react-navigation/native";



const Units = () => {

    const { listaClinicas, idClinic } = useContext(GlobalStateContext);
    const result = listaClinicas.find(clinics => clinics.id === idClinic) 

    const navigation = useNavigation();
    

    return(
        <ViewBody>
            <HeaderListPage>
                <ButtonHeader onPress={()=> navigation.navigate('UNITSLIST')}>
                    <ImageHeader source={require('../../../img/setaBranca.png')}></ImageHeader>
                </ButtonHeader>
            </HeaderListPage>
        <MapView
            initialRegion={{
                latitude: result.latitude,
                longitude: result.longitude,
                latitudeDelta: 0.0042,
                longitudeDelta: 0.0031,

            }}
            style={{height: '100%', width: '100%'}}
        >
            <MapView.Marker
                coordinate={{
                    latitude:result.latitude,
                    longitude:result.longitude
                    
                }}
            />
        </MapView>
        </ViewBody>
    )
}

export default Units;