import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "./stack/StackParamList";

export type NavigatorRootProps<T extends keyof StackParamList> =
  StackScreenProps<StackParamList, T>;
