export { formReducer, initialState };
export type { FormState, FormAction };
import type { FormData } from './types'; 


interface FormState {
  currentStep: number;
  data: Partial<FormData>;
  completedSteps: number[];
}

type FormAction =
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'UPDATE_DATA'; payload: Partial<FormData> }
  | { type: 'COMPLETE_STEP'; step: number }
  | { type: 'RESET' };

const initialState: FormState = {
  currentStep: 1,
  data: {},
  completedSteps: []
};

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'NEXT_STEP':
      return { ...state, currentStep: Math.min(state.currentStep + 1, 3) };
    case 'PREV_STEP':
      return { ...state, currentStep: Math.max(state.currentStep - 1, 1) };
    case 'UPDATE_DATA':
      return { ...state, data: { ...state.data, ...action.payload } };
    case 'COMPLETE_STEP':
      return {
        ...state,
        completedSteps: state.completedSteps.includes(action.step)
          ? state.completedSteps
          : [...state.completedSteps, action.step]
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}
