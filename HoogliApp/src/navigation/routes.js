import React from "react";
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from "../screens/Unloged/Login";
import Home from "../screens/Logged/Home/home";
import ClinicList from "../screens/Logged/ClinicList";
import Dependents from "../screens/Logged/Dependents";
import ClinicInfo from "../screens/Logged/ClinicInfo";
import Historic from "../screens/Logged/Historic";
import Partner from "../screens/Logged/Partner";
import Units from "../screens/Logged/Units";
import especialitInfo from "../screens/Logged/EspecialitInfo";
import SinginFirst from "../screens/Unloged/Singin/SinginFirst";
import SinginSecond from "../screens/Unloged/Singin/SinginSecond";
import Paymente from "../screens/Logged/Payment";
import Profile from "../screens/Logged/Profile";
import AddDenpe from "../screens/Logged/AddDenpe";
import UnitsList from "../screens/Logged/UnitsList";
import Alert from "../components/Alert";
import BottomRoutes from "./bottomroutes";




const Routes = () => {

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator  screenOptions={{
                              headerShown: false }}
                               initialRouteName="LOGINN">

                <Stack.Screen  name="LOGINN" component={LoginPage}/>
                <Stack.Screen  name="BOTTON" component={BottomRoutes}/>
                <Stack.Screen  name="SINGINFIRST" component={SinginFirst}/>
                <Stack.Screen  name="SINGINSECOND" component={SinginSecond}/>
                <Stack.Screen  name="HOME" component={Home}/>
                <Stack.Screen  name="CLINICSLIST" component={ClinicList}/>
                <Stack.Screen  name="DEPENDENTS" component={Dependents}/>
                <Stack.Screen  name="CLINICINFO" component={ClinicInfo}/>
                <Stack.Screen  name="HISTORIC" component={Historic}/>
                <Stack.Screen  name="PARTNER" component={Partner}/>
                <Stack.Screen  name="UNITS" component={Units}/>
                <Stack.Screen  name="UNITSLIST" component={UnitsList}/>
                <Stack.Screen  name="ESPECIALIST" component={especialitInfo}/>
                <Stack.Screen  name="PAYMENTE" component={Paymente}/>
                <Stack.Screen  name="PROFILE" component={Profile}/>
                <Stack.Screen  name="ADDDENPE" component={AddDenpe}/>
                <Stack.Screen  name="ALERT" component={Alert}/>

            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Routes;