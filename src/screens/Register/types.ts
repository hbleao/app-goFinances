import { Dispatch, SetStateAction } from "react"
import { Control, FieldValues, FieldError } from "react-hook-form"

export type FormData = {
  [name: string]: any;
}

export type PresentationProps = {
  control: Control<FieldValues, object>;
  errors: FormData;
  transactionType: string;
  category: {
    name: string;
    key: string;
  };
  categoryModalOpen: boolean;
  handleTransactionType: (type: 'income' | 'outcome') => void;
  handleOpenCategoryModal: () => void;
  handleSubmit: any;
  handleSubmitRegister: any;
  handleCloseCategoryModal: () => void;
  setCategory: Dispatch<SetStateAction<{ key: string; name: string; }>>;
}