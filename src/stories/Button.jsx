import { View, Text } from '@lightningjs/solid';
import { buttonStyles } from '../styles';

/**
 * Primary UI component for user interaction
 */
export function Button(props) {
  return (
    <View {...props} forwardStates animate
      style={buttonStyles.container}>
      <Text style={buttonStyles.text}>{props.children}</Text>
    </View>
  );
}
