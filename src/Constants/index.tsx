import { v4 as uuidv4 } from "uuid";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export const TODO_OPTIONS = [
  {
    id: 1,
    option: "To-do",
  },

  {
    id: 2,
    option: "In Progress",
  },
  {
    id: 3,
    option: "Done",
  },
];

export const COLUMNS = {
  [uuidv4()]: {
    color: "rgb(255 207 207)",
    title: "To-do",
    type: 1,
    items: [
      {
        status: 1,
        name: "First task",
        id: uuidv4(),
      },
      {
        status: 1,
        name: "second task",
        id: uuidv4(),
      },
      {
        status: 1,
        name: "third task",
        id: uuidv4(),
      },
    ],
  },
  [uuidv4()]: {
    color: "#cfedff",
    title: "In Progress",
    type: 2,
    items: [],
  },
  [uuidv4()]: {
    color: "rgb(207 255 208)",
    title: "Done",
    type: 3,
    items: [],
  },
};

export const defaultCols: GridColDef[] = [
  { field: "id", headerName: "ID", width: 200 },
  {
    field: "firstName",
    headerName: "First name",
    width: 200,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 200,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

export const deafultRows = [
  { id:uuidv4(), lastName: "Snow", firstName: "Jon", age: 35 },
  { id:uuidv4(), lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id:uuidv4(), lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id:uuidv4(), lastName: "Stark", firstName: "Arya", age: 16 },
  { id:uuidv4(), lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id:uuidv4(), lastName: "Melisandre", firstName: null, age: 150 },
  { id:uuidv4(), lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id:uuidv4(), lastName: "Frances", firstName: "Rossini", age: 36 },
  { id:uuidv4(), lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id:uuidv4(), lastName: "Snow", firstName: "Jon", age: 35 },
  { id:uuidv4(), lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id:uuidv4(), lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id:uuidv4(), lastName: "Stark", firstName: "Arya", age: 16 },
  { id:uuidv4(), lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id:uuidv4(), lastName: "Melisandre", firstName: null, age: 150 },
  { id:uuidv4(), lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id:uuidv4(), lastName: "Frances", firstName: "Rossini", age: 36 },
  { id:uuidv4(), lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id:uuidv4(), lastName: "Snow", firstName: "Jon", age: 35 },
  { id:uuidv4(), lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id:uuidv4(), lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id:uuidv4(), lastName: "Stark", firstName: "Arya", age: 16 },
  { id:uuidv4(), lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id:uuidv4(), lastName: "Melisandre", firstName: null, age: 150 },
  { id:uuidv4(), lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id:uuidv4(), lastName: "Frances", firstName: "Rossini", age: 36 },
  { id:uuidv4(), lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id:uuidv4(), lastName: "Snow", firstName: "Jon", age: 35 },
  { id:uuidv4(), lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id:uuidv4(), lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id:uuidv4(), lastName: "Stark", firstName: "Arya", age: 16 },
  { id:uuidv4(), lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id:uuidv4(), lastName: "Melisandre", firstName: null, age: 150 },
  { id:uuidv4(), lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id:uuidv4(), lastName: "Frances", firstName: "Rossini", age: 36 },
  { id:uuidv4(), lastName: "Roxie", firstName: "Harvey", age: 65 },
];
