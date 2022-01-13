import { useReducer, useCallback } from "react";

enum ActionType2 {
  Open = "OPEN",
  Close = "CLOSE",
  CloseAndClearData = "CLOSE_AND_CLEAR",
}

type DataType = string | number | Record<string, unknown> | null | undefined;

type State<Type = DataType> = {
  data?: Type;
  isOpen: boolean;
};

type Action<Type = DataType> = {
  type: ActionType2;
  payload?: Type;
};

type Result<Type = DataType> = {
  isOpen: boolean;
  data?: Type;
  open: (modalData?: Type) => void;
  close: (clearData?: boolean) => void;
  closeAndClearData: () => void;
};

const defaultInitialState = {
  data: undefined,
  isOpen: false,
};

function reducer<Type>(state: State<Type>, action: Action<Type>): State<Type> {
  switch (action.type) {
    case ActionType2.Open:
      return {
        data: action ? action.payload : undefined,
        isOpen: true,
      };
    case ActionType2.Close:
      return {
        data: state.data,
        isOpen: false,
      };
    case ActionType2.CloseAndClearData:
      return {
        data: undefined,
        isOpen: false,
      };
    default:
      return state;
  }
}

export function useModalState<Type>(
  initialState: State<Type> = defaultInitialState
): Result<Type> {
  const [{ isOpen, data }, dispatch] = useReducer(reducer, initialState);

  const open = useCallback(
    (modalData): void =>
      dispatch({ type: ActionType2.Open, payload: modalData }),
    []
  );

  const close = useCallback(
    (clearData?: boolean) =>
      dispatch({
        type: clearData ? ActionType2.CloseAndClearData : ActionType2.Close,
      }),
    []
  );

  const closeAndClearData = useCallback(() => {
    close(true);
    setTimeout(() => {
      document.getElementsByTagName("html")[0].removeAttribute("style");
    }, 500);
  }, [close]);

  return {
    isOpen,
    data: data as Type,
    open,
    close,
    closeAndClearData,
  };
}

export default useModalState;
