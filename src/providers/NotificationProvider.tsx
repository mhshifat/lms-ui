import React, { createContext, useEffect, useState } from "react";
import { IoShieldCheckmark, IoShieldSharp } from "react-icons/io5";
import { Message, Wrapper } from "../styles/notification";

interface NotificationContextProps {
  notify: {
    success: (message: string) => void;
    error: (message: string) => void;
  };
}

export const NotificationContext = createContext<NotificationContextProps | null>(
  null
);

const NotificationProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (messages.length > 0) {
      interval = setInterval(() => {
        const notificationsEl = document.getElementById("notifications");
        if (
          notificationsEl &&
          notificationsEl.children[0]?.getAttribute("data-notify")
        ) {
          notificationsEl.removeChild(notificationsEl.children[0]);
        }
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [messages]);

  const showNotification = (type: "success" | "error", message: string) => {
    setMessages((messages) => [
      ...messages,
      `${type === "success" ? "success" : "error"}:${message}`,
    ]);
  };

  return (
    <NotificationContext.Provider
      value={{
        notify: {
          success: (message) => showNotification("success", message),
          error: (message) => showNotification("error", message),
        },
      }}
    >
      <Wrapper {...(messages.length ? { id: "notifications" } : {})}>
        {messages.map((message, i) => (
          <Message
            type={message.split(":")[0] === "success" ? "success" : "error"}
            data-notify={true}
            key={i}
          >
            {message.split(":")[0] === "success" ? (
              <IoShieldCheckmark />
            ) : (
              <IoShieldSharp />
            )}
            <span>
              <span>
                {message.split(":")[0] === "success" ? "Success" : "Error"}
              </span>{" "}
              <br /> {message.split(":")[1]}
            </span>
          </Message>
        ))}
      </Wrapper>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
