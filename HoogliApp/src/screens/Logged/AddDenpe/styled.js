import styled from "styled-components/native";



export const ViewBody = styled.View`
    display: flex;
    flexDirection: column;
    justifyContent: center;
    alignItems: center;


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
export const ViewForm = styled.View`
    display: flex;
    flexDirection: column;
    justifyContent: space-between;
    marginTop: 20;
`
export const InputForm = styled.TextInput`
    height: 60;
    width: 270;
    borderRadius: 10px;
    backgroundColor: white;
    marginTop: 50;
    shadowColor: black;
    shadowOffset: {
	width: 0px,
	height: 8px,
    };
    shadowOpacity: 0.8;
    elevation: 16;

`

export const ViewTextTittle = styled.View`
    display: flex;
    flexDirection: column;
    justifyContent: center;
    alignItems: center;
    margin: 30px;

`
export const TextTittle = styled.Text`
    fontSize: 20;

`
export const TextInput = styled.Text`
    fontSize: 10;

`
export const ViewButton = styled.View`


`
export const TextButton = styled.Text`
    color: white;

`
export const ButtonRegister = styled.TouchableOpacity`
    height: 50;
    width: 150;
    backgroundColor: #225499;
    borderRadius: 10px;
    display: flex;
    flexDirection: column;
    justifyContent: center;
    alignItems: center;
    marginTop: 40;

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