import { useState, useCallback } from "react";

// Custom Hook for Undo/Redo functionality
export function useUndoRedo<T>(initialState: T) {
  const [present, setPresent] = useState(initialState);
  const [past, setPast] = useState<T[]>([]);
  const [future, setFuture] = useState<T[]>([]);

  const set = useCallback(
    (newState: T) => {
      setPast([...past, present]);
      setPresent(newState);
      setFuture([]);
    },
    [past, present]
  );

  const undo = useCallback(() => {
    if (past.length === 0) return;

    const previous = past[past.length - 1];
    const newPast = past.slice(0, past.length - 1);

    setPast(newPast);
    setFuture([present, ...future]);
    setPresent(previous);
  }, [past, present, future]);

  const redo = useCallback(() => {
    if (future.length === 0) return;

    const next = future[0];
    const newFuture = future.slice(1);

    setPast([...past, present]);
    setFuture(newFuture);
    setPresent(next);
  }, [future, past, present]);

  const clearHistory = () => {
    setPast([]);
    setFuture([]);
  };

  return {
    present,
    set,
    undo,
    redo,
    clearHistory,
    canUndo: past.length > 0,
    canRedo: future.length > 0,
  };
}
