export type CategoryProps = {
  key: string;
  name: string;
}

export type CategoryActive = {
  isActive: boolean;
}

export type CategorySelectProps = {
  category: CategoryProps;
  setCategory: (category: CategoryProps) => void;
  closeSelectCategory: () => void;
}