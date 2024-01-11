/* eslint-disable react-hooks/exhaustive-deps */
import { COLUMNS } from "../Constants";
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ColumnType, ColumnsContextType, Todo } from "../types";

export const ColumnsContext = createContext<ColumnsContextType | null>(null);

export const ColumnsProvider = ({ children }: any) => {
  const [columns, setColumns] = useState<Record<string, ColumnType>>(COLUMNS);
  const onDragEnd = (result: any, columns: any) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  const onDelete = useCallback((id: string, parentId: string) => {
    setColumns((oldCols: any) => {
      const parent = oldCols[parentId];
      const newItems = parent.items.filter((item: any) => item.id !== id);

      return { ...oldCols, [parentId]: { ...parent, items: [...newItems] } };
    });
  }, []);
  const handleEdit = useCallback(
    (newVal: string, id: string, parentId: string) => {
      setColumns((oldCols: any) => {
        const parent = oldCols[parentId];
        const newItems = parent.items.map((item: any) =>
          item.id === id ? { ...item, name: newVal } : item
        );

        return { ...oldCols, [parentId]: { ...parent, items: [...newItems] } };
      });
    },
    []
  );

  const onAdd = useCallback((todo:Todo) => {
    setColumns((oldCols) => {
      const [columnId, column] = Object.entries(oldCols || {}).find(
        ([_, column]) => column.type === Number(todo.status)
      );
      return { ...oldCols, [columnId]: { ...column, items: [...column.items ,{...todo }] } };
    });
  }, []);

  const values: ColumnsContextType = useMemo(
    () => ({
      columns,
      onDragEnd,
      onDelete,
      handleEdit,
      onAdd,
    }),
    [columns]
  );

  return (
    <ColumnsContext.Provider value={values}>{children}</ColumnsContext.Provider>
  );
};
export const useTodoColumns = () => {
  const context = useContext(ColumnsContext);
  if (!context) throw Error("useQuiz should be used within <QuizProvider />");
  return context;
};
