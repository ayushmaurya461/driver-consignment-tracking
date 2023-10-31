import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.driver.app',
  appName: 'driver-app',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
};

export default config;
