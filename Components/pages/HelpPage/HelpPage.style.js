import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container:{
        padding:10,
        margin:5,

    },
    helpText:{
        fontSize:15,
        fontWeight:'bold',
        fontStyle:'italic'
    },
    textStyle:{
        fontSize:17
      },
      sendFeedbackBtn: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius: 5,
        padding: 10,
        marginTop: 20,
        borderWidth:1,
      },
      sendIconContainer:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right:0,
        justifyContent: 'center',
        paddingRight: 10,
      },
});