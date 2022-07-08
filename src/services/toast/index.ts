import toast from "react-hot-toast";
import { getBestErrorMessage } from "./utils";

export const ToastService = {
  success: (
    message:
      | string
      | {
          header: string;
          content: string;
        }
  ) =>
    toast.success(message as string, {
      style: {
        boxShadow: "0 3px 8px rgba(0,0,0,0.175)",
        padding: "4px 8px",
        fontSize: "12px",
        borderRadius: "10px",
        background: "#E3FCEF",
        color: "#006644",
      },
      iconTheme: {
        primary: "#E3FCEF",
        secondary: "#006644",
      },
      duration: 3000,
    }),

  // TODO clean up
  error: (message: unknown) =>
    toast.error(getBestErrorMessage(message), {
      style: {
        boxShadow: "0 3px 8px rgba(0,0,0,0.175)",
        padding: "4px 8px",
        fontSize: "12px",
        borderRadius: "10px",
        // background: '#E3FCEF',
        // color: '#006644',
      },
      // iconTheme: {
      //   // primary: '#E3FCEF',
      //   // secondary: '#006644',
      // },
      duration: 3000,
    }),
};
