import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
  },
  container: {
    flex: 1,
  },
  drawer_container:{
    width: '100%',
    height:50,
    backgroundColor: 'grey',
  },
  Question_section_box:{
    width: '100%',
    height:'80%',
    borderColor: '#fff',
     zIndex: 2,
   // borderWidth:1
  },
  chat_box:{
    width: '100%',
    borderColor: '#000',
    //borderWidth:4,
    //borderColor: 'orange',
    //paddingVertical: 10,
    overflow: 'scroll'
  },
  user_chat:{
    alignSelf: 'flex-start',
    width:'100%',           
    minHeight: 80,
  },
  user_info:{
    width:'100%',
    height:34,
    flexDirection:'row',
    gap:10,
    paddingLeft:40
  },
  user_logo:{
    width:34,
    height:34,
    borderRadius:17,
    overflow: 'hidden',
  },
  user_name:{
    height:26,
    justifyContent:'center',
    top:4
  },
  user:{
    fontSize:16,
    fontWeight:'700',
    color:'#fff'
  },
  chatScrollView:{
    height: "100%"
  },
  chatContainer:{
    //backgroundColor: 'gray',
    //borderWidth: 2,
    //borderColor: 'orange',
    //marginTop: 60,
  },
  chat_text_box:{
       width: '68%',
       alignSelf: 'flex-end',
       top: 4,
       marginRight: 29,
       padding: 10,
      // backgroundColor: 'gray',
      // borderRadius: 10,
      //borderWidth:1,
      //borderColor:'#fff',
      maxWidth: '80%',
  },
  AI_options:{
    width : 155,
    height : 26,
   // borderWidth:1,
   // borderColor:'#fff',
    marginTop:20,
   // justifyContent: 'center',
    flexDirection:'row',
    gap:4,
   // marginBottom:20
    
  },
  alertContainer: {
    position: 'absolute',
    top: 40, // Position at the top of the screen
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertText: {
    color: '#ffffff',
    fontSize: 14,
  },
  AI_chat:{
    alignSelf: 'flex-start',
    width:'100%',
    //minHeight: 400,
     alignItems: 'flex-start',
  },
  AI_info:{
    width:'100%',
    height:34,
    flexDirection:'row',
    gap:10,
    paddingLeft:40
  },
  AI_logo:{
    width:34,
    height:34,
    borderRadius:17,
    overflow: 'hidden',
  },
  AI_name:{
    height:26,
    justifyContent:'center',
    top:4
  },
  AI:{
    fontSize:16,
    fontWeight:'700',
    color:'#fff'
  },
  AI_items:{
    width:'68%',
    height:20,
    alignSelf: 'flex-end',
    top:10,
    marginRight:29,
    gap:14,
    flexDirection:'row'
  },
  doctor_section_box:{
    width: '100%',
    height: '78%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  doc_img_box:{
    width: '100%',
    height:117,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_box:{
    width: '100%',
    height:30,
    justifyContent: 'center',
    alignItems: 'center',
    top:20
  },
  help_text:{
    color:'#ffffff',
    fontSize:20
  },
  FQA_section_box: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
   //borderWidth:1,
    borderColor:'#fff',
    top:55,
    
  },
  FQA_content_box: {
    width: '100%',
    height: '100%',
    flexDirection: 'row', 
    flexWrap: 'wrap',
    gap:5,
    marginLeft: '3%',
    paddingLeft:2
 // justifyContent: 'space-around',
  },
  text_FAQ_box: {
    width: '90%',
    height: 20,
    marginBottom: 10,
    marginLeft:'4%'
  },
  expandableView: {
    minHeight: height * .03, 
    paddingVertical: 8,  // Adjust padding for responsiveness
    paddingHorizontal: 15, // Add horizontal padding
    borderRadius: 90, 
    backgroundColor: '#363942', 
    maxWidth: '90%',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginLeft:'2%',
  },
  footer: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 8,
   // borderWidth:1,
    borderColor:'#fff',
    marginTop:30
  },
  footer_content:{
    width: '90%',
    height: '70%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap:10 ,
   // borderWidth:1,
    borderColor:'red',
  },
  chat_input_box: {
    width: '80%',
    borderWidth: 2,
    borderColor: '#363942',
    borderRadius: 80,
    flexDirection: 'row',
    alignItems: 'center', 
  },
  proceed_button_box: {
    width: 54,
    height: 54,
     zIndex: 1,
  },
  input_box: {
    width: '85%',
    overflow:'hidden',
  },
  textInput: {
    fontSize: 16,
    paddingVertical: 10, 
    paddingHorizontal: 8,
    overflow:'hidden',
    color: '#ffffff',
    marginLeft:19
  },
  voice_box: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shifted: {
    transform: [{ translateY: -50 }] 
  }
});

export default styles;