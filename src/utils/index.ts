import { TODO_OPTIONS } from "../Constants";

export const getCurrentStatus= (id :number) => TODO_OPTIONS.find((opt)=> opt.id === id)?.option
