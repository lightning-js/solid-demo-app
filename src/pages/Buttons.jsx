import { Row, View, Text, withPadding } from '@lightningjs/solid';
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

  const Badge = (props) => {
    return <node
          use:withPadding={[10, 15]}
          {...props}
          style={{
            color: '#000000be',
            borderRadius: 8,
            border: { width: 2, color: '#ffffff' },
          }}>
          <Text style={{
              fontSize: 20,
              lineHeight: 20,
            }}>
            {props.children}
          </Text>
        </node>;
    };
  return (
    <>
      <Row x={100} y={200} gap={5} style={RowStyles}>
        <Badge>HD</Badge>
        <Badge>PG13</Badge>
        <Badge>NC17</Badge>
        <Text fontSize={30}>I like bananas</Text>
        <Badge>DOLBY</Badge>
      </Row>

      <Row x={100} gap={40} style={RowStyles}>
        <Button autofocus onEnter={onEnter}>TV Shows</Button>
        <Button states={{ active: true, disabled: false }}>Movies</Button>
        <Button states={'active'}>Sports</Button>
        <Button states='disabled'>News</Button>
      </Row>
    </>
  );
};

export default ButtonsPage;
