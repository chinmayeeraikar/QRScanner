import { Text, View, StyleSheet, SafeAreaView, Pressable, StatusBar } from 'react-native';
import { Link, Stack } from 'expo-router';
import { useCameraPermissions } from 'expo-camera';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';

export default function Index() {
  const [permission, requestPermission] = useCameraPermissions();
  const [isLoading, setIsLoading] = useState(false);
  const isPermissionGranted = Boolean(permission?.granted);

  // Simulate loading state when requesting permissions
  const handleRequestPermission = async () => {
    setIsLoading(true);
    await requestPermission();
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Stack.Screen options={{ headerShown: false }} />
      
      <View style={styles.header}>
        <MaterialCommunityIcons name="qrcode-scan" size={64} color="#5D8BF4" />
        <Text style={styles.title}>QR Scanner</Text>
        <Text style={styles.subtitle}>Fast, simple QR code scanning</Text>
      </View>

      <View style={styles.content}>
        {isPermissionGranted ? (
          <View style={styles.permissionGranted}>
            <MaterialCommunityIcons name="check-circle-outline" size={24} color="#5D8BF4" />
            <Text style={styles.permissionText}>Camera access granted</Text>
          </View>
        ) : (
          <View style={styles.permissionDenied}>
            <MaterialCommunityIcons name="alert-circle-outline" size={24} color="#FF7777" />
            <Text style={styles.permissionText}>Camera permission needed</Text>
          </View>
        )}

        <View style={styles.actionContainer}>
          {/* Main scan button with highlight effect */}
          <View style={styles.scanButtonOuterGlow}>
            <Link href={"/scanner"} asChild>
              <Pressable 
                style={[
                  styles.scanButton,
                  !isPermissionGranted && styles.disabledScanButton
                ]}
                disabled={!isPermissionGranted}
              >
                <MaterialCommunityIcons name="qrcode-scan" size={28} color="#FFFFFF" />
                <Text style={styles.scanButtonText}>SCAN NOW</Text>
                <MaterialCommunityIcons name="arrow-right" size={28} color="#fff" />
              </Pressable>
            </Link>
          </View>

          {/* Permission button */}
          {!isPermissionGranted && (
            <Pressable 
              style={styles.permissionButton} 
              onPress={handleRequestPermission}
              disabled={isLoading}
            >
              <MaterialCommunityIcons name="camera" size={20} color="#FFFFFF" />
              <Text style={styles.permissionButtonText}>
                {isLoading ? "Requesting access..." : "Grant Camera Access"}
              </Text>
            </Pressable>
          )}

          {/* About button */}
          <Link href="/about" asChild>
            <Pressable style={styles.aboutButton}>
              <Text style={styles.aboutButtonText}>About</Text>
              <MaterialCommunityIcons name="chevron-right" size={20} color="#888888" />
            </Pressable>
          </Link>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>v1.0</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#AAAAAA',
    marginTop: 4,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  permissionGranted: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(93, 139, 244, 0.1)',
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  permissionDenied: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 119, 119, 0.1)',
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  permissionText: {
    color: '#FFFFFF',
    marginLeft: 12,
    fontSize: 16,
  },
  actionContainer: {
    gap: 16,
    marginHorizontal: 5,
  },
  // Outer glow effect container
  scanButtonOuterGlow: {
    backgroundColor: '#5D8BF4',
    borderRadius: 30,
    padding: 12,
    marginVertical: 16,
  },
  scanButton: {
    backgroundColor: '#5D8BF4',
    borderRadius: 28,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  disabledScanButton: {
    backgroundColor: '#2A3142',
    opacity: 0.7,
  },
  scanButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  permissionButton: {
    backgroundColor: '#505A75',
    borderRadius: 8,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  permissionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  aboutButton: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  aboutButtonText: {
    color: '#888888',
    fontSize: 16,
  },
  footer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  footerText: {
    color: '#555555',
    fontSize: 14,
  }
});