import { createContext, useContext } from "react";
import { OptionProps } from "../../types";

export const ListContext = createContext<OptionProps[] | undefined>(undefined);

export function useOptionsContext() {
  const options = useContext(ListContext);

  if (options === undefined) {
    throw new Error(
      "useOptionsContext must always have a ListContext.Provider"
    );
  }
  return options;
}
