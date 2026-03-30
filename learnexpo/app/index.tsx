import { Text, View, Button,Alert,Switch, ScrollView, TextInput, Pressable, Image, ImageBackground, StyleSheet, StatusBar,FlatList } from "react-native";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


function HomeScreen(){


  const pressMe = () => {
    Alert.alert("Button Pressed");
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const [text, setText] = useState("");
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  }
  
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
  return(
    // <ScrollView>
    //   {
    //     [...Array(30)].map((_,i)=><Text key={i} style={{fontSize:24}}>Hello From Home Screen {i+1}</Text>)
    //   }
    //   <Button 
    //   title="Click Me"
    //   onPress={pressMe}
    //   />
    //   <Switch value={isEnabled} onValueChange={toggleSwitch} />
    // </ScrollView>

//     <>
//     <TextInput 
//     style={{borderWidth:1, borderColor:"black", padding:10, margin:10}}
//     placeholder="Enter your name"
//     value={text}
//     onChangeText={setText} 
//     multiline
//     numberOfLines={4}
//     />


// {/* onlongpress, onpressin, onpressout */}
// <Pressable
// style={{backgroundColor:"#50C878", padding:10, margin:10}}
// onPress={pressMe}
// >
//   <Text style={{fontSize:24, margin:10}}>Hello {text}</Text>
// </Pressable>
    
//     <Image
    
//     // resize mode: cover, contain, stretch, repeat, center
//     source={{uri:"https://reactnative.dev/img/tiny_logo.png"}}
//     style={{width:100, height:100}}
//     />

//     <ImageBackground
//     source={{uri:"https://reactnative.dev/img/tiny_logo.png"}}
//     style={{width:200, height:200, justifyContent:"center", alignItems:"center"}}
//     >
//       <Text style={{color:"white", fontSize:18}}>Image Background</Text>
//     </ImageBackground>
//     </>


  // <SafeAreaProvider>
  // <SafeAreaView
  // style={{flex:1, justifyContent:"center", alignItems:"center"}} edges={['top', 'bottom']}>
  //  <ScrollView>
  //   {[...Array(30)].map((_,i)=><Text key={i} style={{fontSize:24}}>Hello From Home Screen {i+1}</Text>)}
  //   <Button 
  //   title="Click Me"
  //   onPress={pressMe}
  //   />
  //   <Switch value={isEnabled} onValueChange={toggleSwitch} />
  //  </ScrollView>
  // </SafeAreaView>
// </SafeAreaProvider> 

<SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
  )
}

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
