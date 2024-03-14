import { Button, Checkbox, Input, Select } from "@mui/material";
import React, { useState } from "react";
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import AddProductForm from "../../Components/AddProduct/AddForm";

const AddProduct = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const methods = useForm();

  const onSubmit = async (values: any) => {
    // if (values) {
    //   setIsSubmitting(true);
    //   const images: any = [];
    //   Promise.all(
    //     files?.map((file: Blob) =>
    //       uploadImageToStorage(file, (url) => images.push(url))
    //     )
    //   )
    //     .then(async () => {
    //       const newFlower = {
    //         ...values,
    //         images: values.images ? [...images, ...values.images] : [...images],
    //       };
    //       id
    //         ? await updateFlower(newFlower, id)
    //         : await createFlower(newFlower);
    //     })
    //     .finally(() => setIsSubmitting(false));
    // }
  };

  console.log(methods.getValues());
  return (
    <FormProvider {...methods}>
      <AddProductForm />
    </FormProvider>
  );
};

export default AddProduct;
