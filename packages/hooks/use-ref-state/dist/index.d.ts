import { Dispatch, SetStateAction, MutableRefObject } from 'react';

type CurrentStateType<S> = [S, Dispatch<SetStateAction<S>>, MutableRefObject<S>];
interface UseUseRefStateProps {
}
declare function useRefState<S>(initialState: S | (() => S)): CurrentStateType<S>;
type UseRefStateReturn = ReturnType<typeof useRefState>;

export { type CurrentStateType, type UseRefStateReturn, type UseUseRefStateProps, useRefState };
