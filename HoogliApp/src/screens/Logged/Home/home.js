import React, { useEffect, useState } from "react";
import { Image, Modal, ScrollView, StatusBar, Text, View } from "react-native";
import { BodyButtons, ButtonHeader, ButtonsHome, CardTextTittle, CardView, CardViewBottom, CardViewInfos, CardViewTittle, HeaderListPage, IconForm, ImageAlert, ImageHeader, ImageHeaderProfile, ImageList, ImageSpace, LinhaAlert, LinhaForm, MenuFooter, SpaceButtonMenu, SubTextUserEnter, TextAfazer, TextAlert, TextButtonInfo, TextCard, TextCardInfo, TextCardInfoTitle, TextCardNumber, TextCategoris, TexteIntoCardTittle, TexteIntoCardTittle1, TexteMidTittle, TextForm, TextSpace, TextSpaceName, TextUserEnter, ViewAlert, ViewAlertCenter, ViewAlertMod, ViewAll, ViewBody, ViewCardInfo, ViewCarousel, ViewForm, ViewHeader, ViewIcon, ViewInfosMid, ViewMenu, ViewMid, ViewPhoto, ViewSpace, ViewTextForm, ViewTextHeader } from "./styled";
import Carousel from "react-native-snap-carousel";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { showAlert } from "react-native-customisable-alert";

const Home = () => {
    const navigation = useNavigation();
    const [showWarning, setShowWarning] = useState(false);
    const [selectedId, setSelectedId] = useState(1);
    const [infoId, setInfoId] = useState();
    const [form , setForm] = useState([
        {
            id: 1,
            tipo:'Nome do Projeto',
            select: [
                {
                    id: 1,
                    info:'App Disk Cirurgia',
                    icone: 'https://img.icons8.com/ios/344/project.png'
                },
                {
                    id: 2,
                    info:'Site Disk Cirugia',
                    icone: 'https://img.icons8.com/ios/344/project.png'
                },

            ]
        },
        {
            id: 2,
            tipo:'Data de Início',
            select:[
                {
                    id: 1,
                    info: '24/01/2022',
                    icone: 'https://img.icons8.com/ios/344/calendar-16.png'
                },
                {
                    id: 2,
                    info: '02/04/2022',
                    icone: 'https://img.icons8.com/ios/344/calendar-16.png'
                },
            ]
        },
        {
            id: 3,
            tipo:'Prazo',
            select: [
                {
                    id: 1,
                    info: '23/03/2022',
                    icone: 'https://img.icons8.com/ios/344/policy-document.png'
                },
                {
                    id: 2,
                    info: '13/05/2022',
                    icone: 'https://img.icons8.com/ios/344/policy-document.png'
                },
            ]
        },
        {
            id: 4,
            tipo:'Tipo de Faturamento',
            select: [
                {
                    id: 1,
                    info:'Cartão',
                    icone: 'https://img.icons8.com/ios/344/cash-receipt.png'
                },
                {
                    id: 2,
                    info:'Dinheiro',
                    icone: 'https://img.icons8.com/ios/344/cash-receipt.png'
                },
            ]
        },
        {
            id: 5,
            tipo:'Status',
            select:[
                {
                    id:1,
                    info:'Rodando',
                    icone: 'https://img.icons8.com/ios/344/connection-status-off.png'
                },
                {
                    id:2,
                    info:'Offline',
                    icone: 'https://img.icons8.com/ios/344/connection-status-off.png'
                },
            ]
        },
    ])

    const result = form.find(tipo => tipo.id === selectedId)



    return(
        <ViewAll>
            <ViewSpace>
                <ViewMenu>
                    <SpaceButtonMenu>
                        <ImageSpace source={require('../../../img/Icone-menu.png')}></ImageSpace>
                    </SpaceButtonMenu>
                </ViewMenu>
                <ViewTextHeader>
                <TextSpace>Bem vindo de volta!</TextSpace>
                <TextSpaceName>Leandro Wilker Paulino Sousa</TextSpaceName>
                </ViewTextHeader>
            </ViewSpace>
            <ViewHeader>
                <ViewPhoto>
                    <ImageHeader source={require('../../../img/suricato-perfil.jpeg')}>
                    </ImageHeader>
                </ViewPhoto>
                <ViewMid>
                <CardViewTittle>
                    <CardTextTittle>Resumo dos Projetos</CardTextTittle>
                </CardViewTittle>
                <CardView>
                    <TextCard style={{color:'#8ecf84'}}>A fazer</TextCard>
                    <TextCardNumber> 0 </TextCardNumber>
                </CardView>
                <CardView>
                    <TextCard style={{color:'#788fff'}}>Em Progesso</TextCard>
                    <TextCardNumber> 0 </TextCardNumber>
                </CardView>
                <CardView>
                    <TextCard style={{color:'#ffb821'}}>Aguardando</TextCard>
                    <TextCardNumber> 0 </TextCardNumber>
                </CardView>
                <CardView>
                    <TextCard style={{color:'#ed472a'}}>Cancelado</TextCard>
                    <TextCardNumber> 0 </TextCardNumber>
                </CardView>
                <CardView>
                    <TextCard style={{color:'#01c0f8'}}>Concluido</TextCard>
                    <TextCardNumber> 0 </TextCardNumber>
                </CardView>
                    <CardViewInfos>
                        <Picker
                            selectedValue={selectedId} 
                            onValueChange={(itemValue) => setSelectedId(itemValue)}
                            style={{color:'black'}}
                            dropdownIconColor='black'
                        >
                             {form.map((itens) => {
                                return(
                                <Picker.Item key={itens.id} 
                                label={itens.tipo}
                                value={itens.id}
                                style={{color: 'black'}}
                                />
                                    )
                                })}
                        </Picker>
                        <ViewForm>
                            {result.select.map((itens)=> {  
                                return(
                                    <ViewTextForm>
                                    <ViewIcon>
                                    <IconForm source={{uri: itens.icone}}></IconForm>
                                    <TextForm>{itens.info}</TextForm>
                                    </ViewIcon>
                                    <LinhaForm></LinhaForm>
                                    </ViewTextForm>
                                )
                            })}
                        </ViewForm>
                    </CardViewInfos>
                </ViewMid>
            </ViewHeader>
        </ViewAll>
    )
}

export default Home;