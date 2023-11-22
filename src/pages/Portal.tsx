import { createSignal, createSelector, For } from "solid-js";
import { ElementNode, View, Text, activeElement } from '@lightningjs/solid';
import { Column, Row } from '@lightningjs/solid-primitives';
import { useNavigate, useParams } from "@solidjs/router";
import styles from '../styles';
import { assertTruthy } from "@lightningjs/renderer/utils";

const Portal = () => {
  const navigate = useNavigate();
  const isFirst = createSelector(() => {
    return 0;
  });


  function onEnter(this: ElementNode) {
    let entity = this.children.selected;
    assertTruthy(entity && entity.id);
    navigate('/' + entity.id)
  };

  const demos = [
    {
      title: 'Flex Row',
      id: 'flex',
      description: 'Flex Row Implementation',
    },
    {
      title: 'Flex Column',
      id: 'flexcolumn',
      description: 'Flex Column Implementation',
    },
    {
      title: 'Flex Row Vertical Align',
      id: 'flexsize',
      description: 'Flex Row Vertical Align Implementation',
    },
    {
      title: 'Flex Column Vertical Align',
      id: 'flexcolumnsize',
      description: 'Flex Column Vertical Align Implementation',
    },
    {
      title: 'Buttons',
      id: 'buttons',
      description: 'Demo a few buttons',
    },
    {
      title: 'Text',
      id: 'text',
      description: 'Text layout with flexbox',
    },
    
  ]

  function DemoTile(props) {
    const Container = {
      width: 370,
      height: 320,
      borderRadius: 6,
      scale: 1,
      color: 0x182b44ff,
      focus: {
        scale: 1.1,
        color: 0xffffffff,
      },
    };
    const [color, setColor] = createSignal(0xffffffff);

    return <View {...props} onFocus={() => setColor(0x000000ff)} onBlur={() => setColor(0xffffffff)} animate style={Container}>
      <View x={30}>
        <Text y={30} fontSize={84} color={color()}>{props.index}</Text>
        <Text y={140} fontSize={42} width={340} height={42} contain="both" color={color()}>{props.title}</Text>
        <Text y={200} fontSize={28} width={330} contain="width" color={color()}>{props.description}</Text>
      </View>    
    </View>
  }

  const [rowX, setRowX] = createSignal(140);

  function moveRow(row) {
    setRowX(row.selected * -400 + 140);
  }

  return (
    <View colorTop={0x446b9eff} colorBottom={0x2c4f7cff}>
      <View x={120}>
        <View src="/assets/solidjs.png" width={101} height={90} y={40} />
        <Text fontSize={90} x={110} y={40}>Examples</Text>
        <View y={140} height={1} width={1800} color={0xe8d7f9ff} />
      </View>
      <Row onSelectedChanged={moveRow} onEnter={onEnter}
        animationSettings={{delay: 20, duration: 300}}
        animate x={rowX()} y={300} width={4400} style={styles.Row} justifyContent={'flexStart'} gap={40}>
        <For each={demos}>
            {(demo, i) =>
              <DemoTile autofocus={isFirst(i())} index={i()} {...demo} />
            }
        </For>
      </Row>
    </View>
  );
};

export default Portal;
