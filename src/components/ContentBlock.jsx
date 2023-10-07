import { View, Text } from '@lightningjs/solid';
import { withPadding } from '@lightningjs/solid-primitives';
import theme from 'theme';

const HeadlineStyles = {
  ...theme.typography.display2,
  width: 900,
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
  width: 900,
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
          style={{ y: 5, width: 30, height: 30, marginRight: -6 }}
        />
        <Text style={MetaTextStyle}>{reviews.rtCrit + '%'}</Text>
      </Show>
      <Show when={reviews?.rtFan && reviews?.rtFan !== '0'}>
        <View
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Rotten_Tomatoes_positive_audience.svg/80px-Rotten_Tomatoes_positive_audience.svg.png"
          title="Rotten Tomatoes Rating"
          style={{ y: 5, width: 24, height: 30, marginRight: -6 }}
        />
        <Text style={MetaTextStyle}>{reviews.rtFan + '%'}</Text>
      </Show>
    </>
  );
}

const Badge = (props) => {
  return (
    <node
      use:withPadding={[7, 15, 13, 15]}
      {...props}
      style={{
        color: '#00000099',
        borderRadius: 8,
        border: { width: 3, color: '#ffffff' },
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
      ...theme.flexRow,
      gap: 12,
      width: 900,
      height: 40,
    }}
  >
    <Text style={MetaTextStyle}>{props.metaText}</Text>
    <For each={props.badges}>{(item) => <Badge>{item}</Badge>}</For>
    {getReviews(props.reviews)}
  </View>
);

const ContentBlock = (props) => {
  return <View
      {...props}
      style={{
        ...theme.flexColumn,
        width: 933,
        height: 160,
        gap: 16,
      }}
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
