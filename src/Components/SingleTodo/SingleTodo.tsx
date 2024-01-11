import { Draggable } from "react-beautiful-dnd";
import { Delete, Edit } from "@mui/icons-material";

const SingleTodo = ({ todo, onDelete, onEdit, index ,parentId }: any) => {
  return (
    <Draggable key={todo.id} draggableId={todo.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="static"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid black",
              alignItems: "center",
            }}

            className=" h-16"
          >
            <h3 style={{ color: "gray" }}>{todo.name}</h3>

            <div className="flex-center">
              <Edit   onClick={() => onEdit(todo.id)} style={{ cursor: "pointer" }} />
              <Delete
                onClick={() => onDelete(todo.id ,parentId)}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default SingleTodo;
