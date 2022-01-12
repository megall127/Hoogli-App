import styled from 'styled-components/native';


export const ViewBody = styled.View`
    display: flex;
    flexDirection: column;
    alignItems: center;
    justifyContent: space-between;

`

export const ViewBodyScroll = styled.KeyboardAvoidingView`
    flex: 1;

`

export const HeaderListPage = styled.View`
    backgroundColor: #225499;
    height: 50px;
    width: 100%;
    float: right;
    display: flex;
    flexDirection: row;
`

export const InputRegister = styled.TextInput`
    height: 50px;
    width: 250px;
    backgroundColor: white;
    marginTop: 50;
    borderRadius: 10px;
    shadowColor: black;
    shadowOffset: {
	width: 0px,
	height: 8px,
    };
    shadowOpacity: 0.8;
    elevation: 16;
`

export const ViewInputs = styled.View`
    display: flex;

`


export const Button = styled.TouchableOpacity`
    width: 130px;
    height: 50px;
    backgroundColor: #225499;
    display: flex;
    flexDirection: column;
    justifyContent: center;
    borderRadius: 10px;
    alignItems: center;
    marginTop: 10;
`
export const ButtonEnter = styled.TouchableOpacity`

`

export const ViewTextRegister = styled.View`
    marginTop: 15%;
    display: flex;
    alignItems: center;


`

export const TextRegister =styled.Text`
    fontSize: 17px;
    font-family: 'Poppins-Light';
    color: black;


`

export const ViewEnter = styled.View`
    margin: 20px;
    marginTop: 20%;
    display: flex;
    flexDirection: column;
    alignItems: center;

`
export const Linha = styled.View`
    backgroundColor: #01c0f8;
    height: 2px;
    width: 150px;

`

export const TextButton = styled.Text`
    color: white;
`
export const TextButton2 = styled.Text`
    color: #225499;
`
export const TextSubEnter = styled.Text`
    color: black;
`


