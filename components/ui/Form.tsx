"use client";

import { useRef, ReactNode } from "react";

interface formProps {
  children: ReactNode;
  action: (FormData: FormData) => Promise<void | boolean>;
  className?: string;
  onSubmit?: () => void;
}

const Form = ({ children, action, className, onSubmit }: formProps) => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      className={className}
      onSubmit={onSubmit}
      ref={ref}
      action={async (FormData) => {
        await action(FormData);
        ref.current?.reset();
      }}
    >
      {children}
    </form>
  );
};

export default Form;
