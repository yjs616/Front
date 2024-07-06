import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export const IdCheckBtn = () => {
    return(
        <TouchableOpacity style={styles.checkBtn}>
            <Text style={styles.checkBtnText}>확인</Text>
        </TouchableOpacity>
    );
}

export const PWNextBtn = (props) => {
    return(
        <TouchableOpacity style={styles.checkBtn} onPress={()=>props.setPwNextCheck(true)}>
            <Text style={styles.checkBtnText}>다음</Text>
        </TouchableOpacity>
    );
}

export const PWCheckBtn = () => {
    return(
        <TouchableOpacity style={styles.checkBtn}>
            <Text style={styles.checkBtnText}>확인</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    checkBtn:{
        width:"100%",
        backgroundColor:"#032661",
        alignItems:"center",
        justifyContent:"center",
        height:50,
        bottom: -200,
        borderRadius:10
    },
    checkBtnText:{
        color:"#fff",
    }
})