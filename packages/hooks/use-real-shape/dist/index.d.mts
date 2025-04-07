import { RefObject } from 'react';
import { ShapeType } from '@heroui/react-utils';

type ShapeResult = [ShapeType, () => void];
declare function useRealShape<T extends HTMLElement>(ref: RefObject<T | null>): ShapeResult;
type UseRealShapeReturn = ReturnType<typeof useRealShape>;

export { type ShapeResult, type UseRealShapeReturn, useRealShape };
