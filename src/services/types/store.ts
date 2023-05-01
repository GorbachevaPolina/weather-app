import { store } from "../..";
import { TCoordsActions } from "../actions/coords";
import { TypedUseSelectorHook, useDispatch as dispatchHook, useSelector as selectorHook } from 'react-redux';

export type RootState = ReturnType<typeof store.getState>;

export type TAppActions = TCoordsActions;

// export type AppDispatch = <TReturnType>(action: TAppActions) => TReturnType
export type AppDispatch = typeof store.dispatch

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export const useDispatch = () => dispatchHook<AppDispatch>()