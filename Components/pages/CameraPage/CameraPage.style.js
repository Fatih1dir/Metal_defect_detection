import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      backgroundColor: '#fff',
      alignSelf: 'flex-end'
    },
    preview: {
      resizeMode:'contain',
      alignSelf: 'stretch',
      flex: 1
    },
    plot: {
      width: 300,
      height: 300,
      resizeMode: "contain",
    },
    bottomView: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', //Here is the trick
      bottom: 10, //Here is the trick
    },
    afterPicContainer: {
      flexDirection: 'column', // inner items will be added vertically
      flexGrow: 1,            // all the available vertical space will be occupied by it
      justifyContent: 'space-between', // will create the gutter between body and footer
      alignItems: 'center',
    },
    footerCont:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignSelf:'stretch',
      marginHorizontal:10
    }
  });