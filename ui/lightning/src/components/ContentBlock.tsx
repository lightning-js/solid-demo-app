import {
  View,
  Text,
  Show,
  IntrinsicNodeStyleProps,
  For,
} from "@lightningjs/solid";
import { withPadding } from "@lightningjs/solid-primitives";
import { createEffect } from "solid-js/types/server/reactive.js";
import theme from "theme";
withPadding;

const blockWidth = 900;
const HeadlineStyles = {
  ...theme.typography.display2,
  maxLines: 1,
  width: blockWidth,
  contain: "width",
};
const Headline = (props) => <Text {...props} style={HeadlineStyles}></Text>;

const DescriptionStyles = {
  ...theme.typography.body1,
  lineHeight: 32,
  width: blockWidth,
  maxLines: 3,
  contain: "width",
};

const BadgeStyle = {
  fontSize: 16,
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
      <Show when={reviews?.rtCrit && reviews?.rtCrit !== "0"}>
        <View
          src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png"
          title="Rotten Tomatoes Rating"
          style={{ width: 30, height: 30, marginRight: -14 }}
        />
        <Text style={MetaTextStyle}>{reviews.rtCrit + "%"}</Text>
      </Show>
      <Show when={reviews?.rtFan && reviews?.rtFan !== "0"}>
        <View
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Rotten_Tomatoes_positive_audience.svg/80px-Rotten_Tomatoes_positive_audience.svg.png"
          title="Rotten Tomatoes Rating"
          style={{ width: 24, height: 30, marginRight: -14 }}
        />
        <Text style={MetaTextStyle}>{reviews.rtFan + "%"}</Text>
      </Show>
    </>
  );
}

const Badge = (props) => {
  return (
    <node
      use:withPadding={[8, 13, 11, 13]}
      {...props}
      style={{
        color: "0x00000099",
        borderRadius: 8,
        border: { width: 2, color: "0xffffffff" },
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
      display: "flex",
      flexDirection: "row",
      gap: 18,
      width: blockWidth,
      height: 48,
    }}
  >
    <View y={-4} src="./assets/stars.png" width={188} height={31}></View>
    <View
      y={-4}
      flexItem={false}
      clipping
      width={(188 * props.voteAverage) / 10}
      height={31}
    >
      <View src="./assets/stars-full.png" width={188} height={31}></View>
    </View>
    <Text style={MetaTextStyle}>{props.voteCount} reviews</Text>
    <Text style={MetaTextStyle}>{props.metaText}</Text>
    <For each={props.badges}>{(item) => <Badge y={-5}>{item}</Badge>}</For>
  </View>
);

const ContentBlock = (props) => {
  const style = {
    display: "flex",
    flexDirection: "column",
    width: blockWidth,
    height: 220,
    gap: 16,
  };

  return (
    <View {...props} style={style}>
      <Headline>{props.title}</Headline>
      <Description>{props.description}</Description>
      <Show when={props.voteCount}>
        <Metadata
          metaText={props.metaText}
          badges={props.badges}
          voteCount={props.voteCount}
          voteAverage={props.voteAverage}
        />
      </Show>
    </View>
  );
};

export default ContentBlock;
