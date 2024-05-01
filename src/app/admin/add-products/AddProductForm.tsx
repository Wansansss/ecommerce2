"use client";

import Heading from "@/components/utils/Heading";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Input from "@/components/utils/inputusers/Input";
import TextArea from "@/components/utils/inputusers/TextArea";
import CustomCheckBox from "@/components/utils/inputusers/CustomCheckBox";
import { Categories } from "@/libs/categories";
import CategoryInput from "@/components/utils/inputusers/CategoryInput";
import SelectImage from "@/components/utils/inputusers/SelectImage";
import Button from "@/components/utils/Button";

export type ImageType = {
  image: File | null;
};
export type UploadedImageType = {
  image: string;
};
const AddProductForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      productName: "",
      description: "",
      categoryName: "",
      fileUrl: [],
      stockProduct: "",
      amount: "",
    },
  });
  const category = watch("category");
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };
  return (
    <>
      <Heading title="Add Product" center />
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="productName"
        label="ProductName"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="amount"
        label="Price"
        disabled={isLoading}
        register={register}
        errors={errors}
        type={"number"}
        required
      />
      <TextArea
        id="description"
        label="Description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="stockProduck"
        label="Jumlah Stock"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="number"
        required
      />
      {/* <CustomCheckBox id="stock" label="Stock Tersedia" register={register}/> */}
      <div className="w-full font-medium ">
        <div className="mb-2 font-bold ">Select a Category</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto ">
          {Categories.map((item) => {
            if (item.label === "All") {
              return null;
            }
            return (
              <div key={item.label} className="col-span">
                <CategoryInput
                  onClick={(category) => setCustomValue("category", category)}
                  label={item.label}
                  selected={category == item.label}
                  icon={item.icon}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col flex-wrap gap-4 ">
        <div className="col-span-2 text-center">
          <SelectImage
            addImageToState={() => {}}
            isProductCreated={false}
            removeImageFromState={() => {}}
          />
        </div>
      </div>
      <Button
        label={isLoading ? "Loading" : "Add Product"}
        onClick={() => {}}
      />
    </>
  );
};

export default AddProductForm;
