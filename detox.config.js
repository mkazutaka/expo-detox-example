const app = 'expodetox'
const simulator = "iPhone 14"
const emulator = "Pixel_3a_API_30"

module.exports = {
  testRunner: "jest",
  runnerConfig: "e2e/config.json",
  skipLegacyWorkersInjection: true,
  apps: {
    "ios": {
      type: "ios.app",
      binaryPath: `ios/build/Build/Products/Release-iphonesimulator/${app}.app`,
      build: `xcodebuild -workspace ios/${app}.xcworkspace -scheme ${app} -configuration Release -sdk iphonesimulator -derivedDataPath ios/build -UseModernBuildSystem='NO' | npx excpretty ./`
    },
    "android": {
      type: "android.apk",
      binaryPath: "android/app/build/outputs/apk/release/app-release.apk",
      build: "pushd android; ./gradlew app:assembleRelease app:assembleAndroidTest -DtestBuildType=release; popd"
    }
  },
  devices: {
    simulator: {
      type: "ios.simulator",
      device: {
        type: `${simulator}`
      }
    },
    emulator: {
      type: "android.emulator",
      device: {
        avdName: `${emulator}`
      }
    }
  },
  configurations: {
    "ios": {
      device: "simulator",
      app: "ios"
    },
    "android": {
      device: "emulator",
      app: "android"
    }
  }
}
