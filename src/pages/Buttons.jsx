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

  const RoundedRectangle = ['RoundedRectangle', { radius: 30 }];
  function Button(props) {
    return (
      <View {...props} forwardStates animate
        shader={RoundedRectangle}
        style={buttonStyles.container}>
        <Text style={buttonStyles.text}>{props.children}</Text>
      </View>
    );
  }

  const effects = {
    radius: { radius : 29 },
    border: { width: 15, color: '#00ffff' },
  };

  return (
    <>
      <Row x={100} style={RowStyles}>
        <Button autofocus onEnter={onEnter}>TV Shows</Button>
        <Button states={{ active: true, disabled: false }}>Movies</Button>
        <Button states={'active'}>Sports</Button>
        <Button effects={effects} states='disabled'>News</Button>
      </Row>
    </>
  );
};

export default ButtonsPage;
