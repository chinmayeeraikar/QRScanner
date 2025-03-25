import { Image, StyleSheet, Platform } from 'react-native';
//import { View, Text,  StyleSheet, Pressable, SafeAreaView } from 'react-native';
//import { Link, Stack } from 'expo-router';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useCameraPermissions } from "expo-camera";

export default function HomeScreen() {

  const [ permissions, requestPermission] = useCameraPermissions();

  return (
    // <SafeAreaView style={styles.container}>
    //   <Stack.Screen options={{ title: "Overview", headerShown: false }} />
    //   <Text style={styles.title}>QR Code Scanner</Text>
    //   <View style={{ gap: 20 }}>
    //     <Pressable onPress={requestPermission}>
    //       <Text style={styles.buttonStyle}>Request Permissions</Text>
    //     </Pressable>
    //     <Link href={"/scanner"} asChild>
    //       <Pressable disabled={!isPermissionGranted}>
    //         <Text
    //           style={[
    //             styles.buttonStyle,
    //             { opacity: !isPermissionGranted ? 0.5 : 1 },
    //           ]}
    //         >
    //           Scan Code
    //         </Text>
    //       </Pressable>
    //     </Link>
    //   </View>
    // </SafeAreaView>
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
