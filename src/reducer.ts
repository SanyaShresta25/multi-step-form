
export interface State {
  step: number;
  data: any;
}

export type Action =
  | { type: "NEXT"; payload: any }
  | { type: "BACK" }
  | { type: "RESET" };

export const initialState: State = {
  step: 1,
  data: {},
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "NEXT":
      return {
        ...state,
        step: state.step + 1,
        data: { ...state.data, ...action.payload },
      };
    case "BACK":
      return { ...state, step: state.step - 1 };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
