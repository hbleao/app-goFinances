import { TouchableOpacityProps } from "react-native";

type TypesProps = 'up' | 'down';

export type TypeProps = { 
  type : 'up' | 'down';
}

export type ContainerProps = TypeProps & {
  isActive: boolean;
}

export type TransactionTypeButtonProps = TouchableOpacityProps & {
  title: string;
  isActive: boolean;
  type: TypesProps;
}
