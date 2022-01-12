import styled from 'styled-components/native';


//Body
export const ViewAll = styled.View`




`

export const ViewGradiente = styled.View`
    height: 100%;
    width: 100%;
    borderBottomRightRadius: 10px;

`

//Header

export const ViewHeader = styled.View`
    height: 35%;
    width: 100%;
    borderBottomLeftRadius: 100;
    backgroundColor: white;
    display: flex;
    flexDirection: column;
    justifyContent: center;
    alignItems: center;

`

export const ImageHeader = styled.Image`


`

//Inputs/Buttons

export const ViewInputsLogin = styled.View`
    flex: 1;
    flexDirection: column;
    justifyContent: flex-start;
    alignItems: center;
    marginTop: 40;

`

export const InputLogin = styled.TextInput`
    height: 40px;
    width: 70%;
    margin: 20px;
    backgroundColor: white;
    borderRadius: 40;
    shadowColor: black;
    shadowOffset: {
	width: 0px,
	height: 8px,
    };
    shadowOpacity: 0.8;
    elevation: 16;

`


export const ButtonLogin = styled.TouchableOpacity`
    height: 40px;
    width: 50%;
    backgroundColor: #00bdfa;
    borderRadius: 40;
    marginTop: 20;
    display: flex;
    flexDirection: column;
    justifyContent: center;
    alignItems: center;

`
export const ButtonLoginRegister = styled.TouchableOpacity`
    height: 40px;
    width: 50%;
    borderRadius: 40;
    display: flex;
    flexDirection: column;
    justifyContent: center;
    alignItems: center;

`
export const TextButtonLogin = styled.Text`
    color: white;

`
export const TextButtonRegister = styled.Text`
    color: white;
    fontSize: 17;

`
export const TextViewRegister = styled.Text`
    color: white;
    marginTop: 20;

`
export const ViewRegister = styled.View`
    display: flex;
    flexDirection: column;
    justifyContent: center;
    alignItems: center;

`

