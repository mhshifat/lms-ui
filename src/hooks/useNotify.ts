import { useContext } from "react";
import { NotificationContext } from "../providers/NotificationProvider";

const useNotify = () => {
  const notify = useContext(NotificationContext);
  if (!notify)
    throw new Error("Please wrap root component with NotificationProvider");
  return notify;
};

export default useNotify;
