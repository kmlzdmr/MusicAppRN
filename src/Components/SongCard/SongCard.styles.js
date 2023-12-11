import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding:10,
        flexDirection: 'row',
    },
    inner_container: {
        padding: 10,
        flex:1,
        justifyContent: 'center',
    },
    info_container: {
        flex:1,
        
        
    },
    image: {
        width:100,
        height:100,
        borderRadius:50,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 26,
        color: 'black',
    },
    year: {
        marginLeft: 1,
        color: 'grey',
        fontWeight: 'bold',
    },
    soldout_title:{
        color:'red',
        fontWeight:'40'
    },
    soldout_container:{
        borderWidth:1,
        borderColor:'red',
        padding:5,
        borderRadius:5,
    },
    content_container: {
        flexDirection: 'row',
    }

})