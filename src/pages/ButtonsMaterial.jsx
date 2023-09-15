import { Row, View, Text } from '@lightningjs/solid';
import { MaterialButtonText } from '../styles';

const MaterialButtonsPage = () => {
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
    y: 400,
    x: 100
  }

  const MaterialButton = {
    width: 386,
    height: 136,
    color: '#715cab',
    focus: {
      color: '#5a39a2',
    },
    disabled: {
      color: '#291d43',
    }
  };
  const RoundedRectangle = ['RoundedRectangle', { radius: 65 }];
  function Button(props) {
    return (
      <View {...props} forwardStates animate
        style={MaterialButton} shader={RoundedRectangle}>
        <Text style={MaterialButtonText}>{props.children}</Text>
      </View>
    );
  }

  return (
    <Row style={RowStyles}>
      <Button autofocus onEnter={onEnter}>Focused</Button>
      <Button states={{ active: true, disabled: false }}>Normal</Button>
      <Button states='disabled'>Disabled</Button>
    </Row>
  );
};

export default MaterialButtonsPage;
