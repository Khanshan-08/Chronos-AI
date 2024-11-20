import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
    },
    carousel_container:{
        width: '100%',
        height:'70%',
        justifyContent:"center",
        alignItems: 'center',
    },
    carousel_container_content:{
        width: '100%',
        height:40,
        flexDirection:"row",
        justifyContent:"center",
        alignItems: 'center',
    },
    carousel_slide: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: width,
      flexDirection:"row"
    },
    text_cont:{
        height:40,
        justifyContent:"center",
        alignItems: 'center',
        marginRight:10
    },
    break_text:{
        fontSize:30
    },
    img_cont:{
        width:40,
        height:40,
    },
    footer_container:{
        width: '100%',
        height:'40%',
        backgroundColor:"#20242D",
        borderTopLeftRadius: 30, 
        borderTopRightRadius: 30,
        marginTop:-30
    },
    google_container:{
        width: '100%',
        height:53,
        top:40,
         justifyContent:"center",
         alignItems: 'center',
    },
    google_box:{
        width: '90%',
        height:53,
        backgroundColor:"#fff",
        borderRadius:80,
        justifyContent:"center",
        alignItems: 'center',
    },
    google_content_box:{
        width:200,
        height:30,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    google_img_box:{
        width:24,
        height:24,
    },
    text_box:{
        height:30,
    },
    google_text:{
        fontSize:17,
    }
  });

  export default styles;