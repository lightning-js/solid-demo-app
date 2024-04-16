import { View, Text } from "@lightningjs/solid";

export const styles = {
  PageContainer: {
    width: 1920,
    height: 1080,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99,
  },
} as const;

export default () => (
  <View id="PageLoader" style={styles.PageContainer}>
    <Text>Batman</Text>
    <View autofocus autosize src="./assets/spinner.gif" />
    <Text>Under</Text>
  </View>
);
