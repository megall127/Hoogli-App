import styled from "styled-components/native";

export const ViewBody = styled.View`
    flex: 1;
    flex-direction: column;
    justifyContent: space-between;

`

export const ViewHeader = styled.View`
    background-color: #225499;
    height: 50px;
    width: 100%;
    float: right;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

export const ImageBody = styled.Image`
    height: 30%;
    width: 100%;
    margin-bottom: 20px;

`
export const ViewCenterBody = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const TextTittle = styled.Text`
    font-family: 'Poppins-Italic';
    font-size: 25px;
    color: black;
    
`

export const ViewBodyInfo = styled.View`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-left: 30px;

`
export const ViewBodyInfoText = styled.View`
    display: flex;
    flex-direction: column;
    height: 100px;
    margin: 15px;
    background-color: white;
    borderRadius: 20px;
    shadowColor: black;
    shadowOffset: {
	width: 0px,
	height: 8px,
    };
    shadowOpacity: 0.2;
    elevation: 16;

`

export const TextInfos = styled.Text`
    font-size: 15px;
    color: black;

`
export const TextInfosText = styled.Text`
    font-size: 15px;
    margin: 10px;
    color: black;


`

export const ButtonHeader = styled.TouchableOpacity`
    margin-left: 5px;
`

export const ImageHeader = styled.Image`
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-right: 10px;
`

export const NextButton = styled.TouchableOpacity`
    width: 200px;
    height: 50px;
    background-color: #225499;
    border-radius: 10px;
    align-items: center;
`

export const ViewButton = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;

`

export const TextButtonNext = styled.Text`
    color: white;
    marginTop: 15px;
    font-family: 'Poppins-Light';
`