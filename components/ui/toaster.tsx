"use client";
import * as React from "react";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";   // ← or "@/hooks/use-toast" if you kept that path
import { useToast } from "@/hooks/use-toast";

export default function Toaster() {
  const { toasts } = useToast();            // realtime list from our store

  return (
    <ToastProvider swipeDirection="right">
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>

          {/* optional custom action (e.g. Undo button) */}
          {action ?? <ToastClose />}        {/* if no custom action, show default close */}
        </Toast>
      ))}

      {/* portal target for the toast list */}
      <ToastViewport />
    </ToastProvider>
  );
}
