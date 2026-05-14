import { useId } from "react";
import Svg, { Circle, Rect, Defs, ClipPath, G } from "react-native-svg";

interface Props {
  size?: number;
}

export default function NaataiMark({ size = 80 }: Props) {
  const uid = useId().replace(/:/g, "");
  const clipId = `nc_${uid}`;

  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      <Defs>
        <ClipPath id={clipId}>
          <Circle cx="50" cy="50" r="49" />
        </ClipPath>
      </Defs>

      <Circle cx="50" cy="50" r="50" fill="#2B2929" />

      <G clipPath={`url(#${clipId})`}>
        <G rotation="-50" origin="50, 50">
          <Rect x="6"  y="-70" width="27" height="240" fill="#FFFFFF" />
          <Rect x="37" y="-70" width="27" height="240" fill="#FFFFFF" />
          <Rect x="68" y="-70" width="27" height="240" fill="#FFFFFF" />
        </G>
      </G>
    </Svg>
  );
}
