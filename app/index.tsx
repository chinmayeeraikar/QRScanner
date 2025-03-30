import { Text, View, StyleSheet, SafeAreaView, Pressable } from 'react-native';
 import { Link, Stack } from 'expo-router'; 
import { useCameraPermissions } from 'expo-camera';

export default function Index() {

  const [ permission, requestPermission] = useCameraPermissions();

  const isPermissionGranted = Boolean(permission?.granted)

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
        <Link href={"/scanner"} asChild>
          <Pressable disabled={!isPermissionGranted}>
            <Text style={[
              styles.button,
              {opacity: !isPermissionGranted ? 0.5 : 1}
            ]}>
              Scan Code
            </Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
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
