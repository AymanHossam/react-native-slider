import { Platform } from "react-native";

export const constants = {
  MARGIN_HORIZONTAL_PADDING: 0.05,
  STEP_NUMBER_TEXT_FONT_SMALL: 8,
  STEP_NUMBER_TEXT_FONT_BIG: 12,
  LIMIT_MIN_VALUE: Number.MIN_SAFE_INTEGER,
  LIMIT_MAX_VALUE: Number.MAX_SAFE_INTEGER,
  DEFAULT_STEP_RESOLUTION: Platform.OS === 'android' ? 128 : 1000,
};
