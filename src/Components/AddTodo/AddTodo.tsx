import { Button, TextField } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { TODO_OPTIONS } from "../../Constants";
import { useTodoColumns } from "../../hooks/useTodoColumns";
import { toast } from "react-toastify";
import { getCurrentStatus } from "../../utils";

interface TodoForm {
  name: string;
  status: number;
}

const AddTodo = () => {
  const { onAdd } = useTodoColumns();
  const { control, handleSubmit, formState: { errors } ,reset } = useForm<TodoForm>();

  const onSubmit: SubmitHandler<TodoForm> = (data) => {
    onAdd({ ...data, id: uuidv4() });
    reset()
    toast.success(`item added to the ${getCurrentStatus(Number(data.status))} Category`);
  };

  return (
    <div style={{ borderBottom: "2px solid #d8d8d8", paddingBlock: 20 }}>
      <h3 className=" text-xl">Add a New Todo</h3>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex-center-col" style={{ gap: 20 }}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                style={{
                  width: 450,
                }}
                label="TODO Name *"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />

          <FormControl>
            <FormLabel id="status">Status</FormLabel>
            <Controller
              name="status"
              control={control}
              defaultValue={1}
              render={({ field }) => (
                <RadioGroup aria-labelledby="status" {...field} row>
                  {TODO_OPTIONS.map((opt) => (
                    <FormControlLabel
                      value={opt.id}
                      control={<Radio />}
                      label={opt.option}
                      key={opt.id}
                    />
                  ))}
                </RadioGroup>
              )}
            />
          </FormControl>
          <Button type="submit" style={{ border: "2px solid #d8d8d8" }}>
            ADD Todo
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
