import { Row, View, Text } from '@lightningjs/solid';
import styles, { buttonStyles } from '../styles';

const ButtonsPage = () => {
  function onEnter(event, elm) {
    this.states.toggle('disabled');
  }

  const RowStyles = {
    display: 'flex',
    justifyContent: 'flexStart',
    width: 1500,
    height: 300,
    color: '00000000',
    gap: 26,
    y: 400
  }

  function Button(props) {
    return (
      <View {...props} forwardStates animate
        style={buttonStyles.container}>
        <Text style={buttonStyles.text}>{props.children}</Text>
      </View>
    );
  }

  return (
    <>
      <Row x={100} style={RowStyles}>
        <Button autofocus onEnter={onEnter}>TV Shows</Button>
        <Button states={{ active: true, disabled: false }}>Movies</Button>
        <Button states={'active'}>Sports</Button>
        <Button states='disabled'>News</Button>
      </Row>
    </>
  );
};

export default ButtonsPage;
