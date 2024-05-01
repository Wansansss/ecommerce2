"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";


interface TextAreaProps {
  id: string;
  label: string;
  disabled?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  disabled,
  register,
  errors,
  required,
}) => {
  return (
    <div className=" w-full relative">
      <textarea
        id={id}
        disabled={disabled}
        {...register(id,{required})}
        placeholder=""
        className={`
        peer
        w-full
        p-4
        pt-6
        max-h-[150px]
        min-h-[150px]
        outline-none
        bg-white
        font-semibold
        border-2
        rounded-md
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed
        ${errors[id] ? "border-red-600" : "border-slate-300"}
        ${errors[id] ? "focus:border-red-600" : "focus:border-slate-300"}
              `}
      />
      <label htmlFor={id} 
      className={`absolute
      cursor-text
      text-md
      duration-150
      transform
      -translate-y-3
      top-5
      z-10
      origin-[0]
      left-4
      peer-placeholder-shown:scale-100
      peer-placeholder-shown:translate-y-0
      peer-focus:scale-75
      peer-focus:-translate-y-4
      ${errors[id] ? "text-rose-500": "text-slate-500"}
      `}
      >{label}</label>
    </div>
  );
};

export default TextArea;
