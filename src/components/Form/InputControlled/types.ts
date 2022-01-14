import { Control } from "react-hook-form";
import { TextInputProps } from "react-native";

export type InputControlledProps = TextInputProps & {
  control: Control;
  name: string;
  error: string;
}