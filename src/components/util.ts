import { toast } from "react-toastify";

export enum Method {
  "success" = "success",
  "warning" = "warning",
}
const position = { position: toast.POSITION.BOTTOM_LEFT };
export const displayToast = (method: Method, message: string) => {
  toast[method](message, position);
};
