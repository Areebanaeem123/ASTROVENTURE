import { StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Text, View, ImageBackground, Image } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';
export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('@/app/images/WhatsApp Image 2024-08-14 at 05.28.46_1523892e.jpg')}
      style={styles.backgroundimage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>
          ASTROV
          <Text style={styles.wordE}>E</Text>
          NTURE
        </Text>
        <Text style={styles.subtitle}>To space and Beyond</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('explore')}>
        <Text style={styles.buttonText}>Get started !</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundimage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
   marginBottom:-6.5,
   marginTop:90,
    color: '#fff', // Adjust the color if needed
  },
  wordE: {
    color: '#530303', 
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom:550,
    textAlign: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#530303',
    borderRadius: 20,
    bottom: Platform.OS === 'web' ? 40 : 20,
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '70%', // Adjust width as necessary
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 80, // Adds shadow on Android
  },
  buttonText:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'light',
    lineHeight: 40, 
  },
});
