import React, { useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";



const Alert = () => {

    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
      };


    return(
        <View>
             <CustomisableAlert
                    titleStyle={{
                        fontSize: 18,
                        fontWeight: "bold"
                    }}
                />
        </View>
    )
}

export default Alert;