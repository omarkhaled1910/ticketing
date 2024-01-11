import { Container } from "@mui/material";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useCallback, useState } from "react";
import SingleTodo from "../SingleTodo/SingleTodo";
import EditTodo from "../EditTodo/EditTodo";
import { useTodoColumns } from "../../hooks/useTodoColumns";
import { toast } from "react-toastify";

const TodoList = () => {
  const [editId, setEditId] = useState("");

  const { columns, onDragEnd, onDelete, handleEdit } = useTodoColumns();

  const onEdit = useCallback((id = "") => {
    setEditId(id);
  }, []);

  const saveAndCancelEdit = (newVal: string, id: string, parentId: string) => {
    onEdit();
    handleEdit(newVal, id, parentId);
    toast.success("item updated succefully")
  };

  return (
    <div className="py-5">
      <h1 style={{color:"cornflowerblue"}}>Availiable Todos</h1>
      <h5 style={{ color: "gray" }}>
        NOTE: want to edit a todo just Drag and Drop it !!
      </h5>
      <DragDropContext onDragEnd={(result) => onDragEnd(result, columns)}>
        <div
          style={{
            display: "flex",
            gap: 10,
            maxWidth: "100vw",
            paddingInline: 80,
          }}
          className="my-5"
        >
          {Object.entries(columns).map(([columnId, column], colIndex) => {
            return (
              <Droppable
                key={columnId}
                droppableId={columnId.toString()}
                isDropDisabled={!!editId}
              >
                {(provided, snapshot) => (
                  <Container
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={{
                      backgroundColor: column?.color,
                      paddingBlock: 20,
                      border: "2px solid rgb(216, 216, 216)",
                      paddingInline: 20,
                      minWidth: "350px",
                      minHeight: "500px",
                      maxWidth: 650,
                      maxHeight: "600px",
                      overflowY: "auto",
                    }}
                  >
                    <h2 style={{color:"gray"}}>{column?.title}</h2>

                    {column?.items.length === 0 ? (
                      <h3 style={{height:"60%" ,}} className="flex-center"> No TODOS </h3>
                    ) : (
                      column?.items.map((item: any, index: number) =>
                        editId === item.id ? (
                          <EditTodo
                            key={item.id}
                            todo={item}
                            savefn={saveAndCancelEdit}
                            cancelfn={onEdit}
                            parentId={columnId}
                          />
                        ) : (
                          <SingleTodo
                            key={item.id}
                            todo={item}
                            index={index}
                            onDelete={onDelete}
                            onEdit={onEdit}
                            parentId={columnId}
                          />
                        )
                      )
                    )}
                    {provided.placeholder}
                  </Container>
                )}
              </Droppable>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
};

export default TodoList;
