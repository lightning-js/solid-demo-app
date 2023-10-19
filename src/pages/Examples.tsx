import { Text } from '@lightningjs/solid';
import styles from '../styles';

const HelloWorld = () => {
  return <>
      <Text autofocus style={styles.headlineText}>Learn more about Solid + Lightning through other pages:</Text>
      <Text style={styles.headlineSubText}>
        Press B for buttons, T for Text pages, M for Browse,
        F for Flex, C for Column Flex
      </Text>
    </>
};

export default HelloWorld;
