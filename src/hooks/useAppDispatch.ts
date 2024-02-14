import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";

export type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;