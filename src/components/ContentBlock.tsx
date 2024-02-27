import { View, Text, Show, IntrinsicNodeStyleProps, For } from '@lightningjs/solid';
import { withPadding } from '@lightningjs/solid-primitives';
import theme from 'theme';
withPadding;

const blockWidth = 1100;
const HeadlineStyles = {
  ...theme.typography.display2,
  width: blockWidth,
  height: 58,
  contain: 'both',
};
const Headline = (props) => (
  <Text {...props} style={HeadlineStyles}>
    {props.children}
  </Text>
);

const DescriptionStyles = {
  ...theme.typography.body1,
  width: blockWidth,
  height: 72,
  contain: 'both',
};

const BadgeStyle = {
  fontSize: 20,
  lineHeight: 20,
};

const Description = (props) => (
  <Text {...props} style={DescriptionStyles}>
    {props.children}
  </Text>
);

function getReviews(reviews) {
  return (
    <>
      <Show when={reviews?.rtCrit && reviews?.rtCrit !== '0'}>
        <View
          src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png"
          title="Rotten Tomatoes Rating"
          style={{ width: 30, height: 30, marginRight: -6 }}
        />
        <Text style={MetaTextStyle}>{reviews.rtCrit + '%'}</Text>
      </Show>
      <Show when={reviews?.rtFan && reviews?.rtFan !== '0'}>
        <View
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Rotten_Tomatoes_positive_audience.svg/80px-Rotten_Tomatoes_positive_audience.svg.png"
          title="Rotten Tomatoes Rating"
          style={{ width: 24, height: 30, marginRight: -6 }}
        />
        <Text style={MetaTextStyle}>{reviews.rtFan + '%'}</Text>
      </Show>
    </>
  );
}

const Badge = (props) => {
  return (
    <node
      use:withPadding={[8, 15, 13, 15]}
      {...props}
      style={{
        color: '0x00000099',
        borderRadius: 8,
        border: { width: 3, color: '0xffffffff' },
      }}
    >
      <Text style={BadgeStyle}>{props.children}</Text>
    </node>
  );
};

const MetaTextStyle = theme.typography.body2;

const Metadata = (props) => (
  <View
    style={{
      display: 'flex',
      flexDirection: 'row',
      gap: 12,
      width: blockWidth,
      height: 48,
    }}
  >
    <Text style={MetaTextStyle}>{props.metaText}</Text>
    <For each={props.badges}>{(item) => <Badge y={-5}>{item}</Badge>}</For>
    {getReviews(props.reviews)}
  </View>
);

const ContentBlock = (props) => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    width: blockWidth,
    height: 160,
    gap: 16,
  };
  return <View
      {...props}
      style={style}
    >
      <Headline>{props.title}</Headline>
      <Description>{props.description}</Description>
      <Metadata
        metaText={props.metaText}
        badges={props.badges}
        reviews={props.reviews}
      />
    </View>;
};

export default ContentBlock;
