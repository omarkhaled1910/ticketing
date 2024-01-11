export type Todo ={
    status: number;
    name: string;
    id: string;
}

export type ColumnType={
    color: string;
    title: string;
    items: Todo[];
    type:number
};


export type ColumnsContextType = {
    columns: Record<string, ColumnType>;
    onDragEnd: (result: any, columns: Record<string, ColumnType>) => void;
    onDelete: (id: string, parentId: string) => void;
    handleEdit:(newVal:string ,id: string, parentId: string) => void
    onAdd:(newTodo :Todo) =>void
  };

  export interface TodoForm {
    name: string;
    status: number;
  }