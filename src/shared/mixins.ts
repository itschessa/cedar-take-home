import { css } from "styled-components";
import { Styles } from "./tokens";

enum TextSize {
  ExtraSmall = "extraSmall",
  Small = "small",
  Medium = "medium",
  Large = "large",
}

interface TextProps {
  $size: `${TextSize}`;
  $bold?: boolean;
}

const Text = css<TextProps>`
  font-family: ${Styles.fontFamily.Arial};
  color: ${Styles.color.primaryText};

  font-weight: ${({ $bold }) =>
    $bold ? Styles.fontWeight.bold : Styles.fontWeight.normal};

  ${({ $size }) => {
    switch ($size) {
      case TextSize.ExtraSmall:
        return css`
          font-size: ${Styles.fontSize.extraSmall};
          line-height: ${Styles.lineHeight.small};
        `;
      case TextSize.Small:
        return css`
          font-size: ${Styles.fontSize.small};
          line-height: ${Styles.lineHeight.medium};
        `;
      case TextSize.Medium:
        return css`
          font-size: ${Styles.fontSize.medium};
          line-height: ${Styles.lineHeight.medium};
        `;
      case TextSize.Large:
        return css`
          font-size: ${Styles.fontSize.large};
          line-height: ${Styles.lineHeight.large};
        `;
    }
  }};
`;

const HeadingText = css`
  font-family: ${Styles.fontFamily.Georgia};
  font-weight: ${Styles.fontWeight.bold};
  color: ${Styles.color.secondaryText};
  font-size: ${Styles.fontSize.large};
  line-height: ${Styles.lineHeight.large};
`;

const FlexColumn = css`
  display: flex;
  flex-direction: column;
`;

export { TextSize, Text, HeadingText, FlexColumn };
export type { TextProps };
