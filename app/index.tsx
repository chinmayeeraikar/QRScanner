import { Text, View, StyleSheet, SafeAreaView, Pressable } from 'react-native';
 import { Link, Stack } from 'expo-router'; 
import { useCameraPermissions } from 'expo-camera';

export default function Index() {

  const [ permission, requestPermission] = useCameraPermissions();

  return (
    <SafeAreaView>
      <Stack.Screen options = {{ title: "Overview", headerShown: false}}/>
      <Text style={styles.text}>QR Code Scanner</Text>
      {/* <Link href="/about" style={styles.button}>
        Go to About screen
      </Link> */}
      <View style = {{ gap: 20 }}>
        <Pressable onPress={requestPermission}>
          <Text style = {styles.button}>Request Permissions</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
