import { StyleSheet } from "react-native";
export default StyleSheet.create({
  input: {
    height: 100,
    margin: 15,
    borderWidth: 1,
    padding: 5,
    borderRadius:10,
  },
  buttonContainer:{
    justifyContent: "center",
    alignItems: "center",
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
  sendFeedbackBtnContainer:{
    margin:50
  }
});
