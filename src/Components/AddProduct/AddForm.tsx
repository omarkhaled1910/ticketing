import React, { useState } from "react";
import { Button, Checkbox, TextField, Select } from "@mui/material";

import { Controller, useFormContext } from "react-hook-form";
import CustomSelect from "../../Components/CustomSelect";
import { ImageNotSupportedSharp } from "@mui/icons-material";
import UploadImages from "../../Components/ImagesDragDrop/ImagesDragDrop";
import { useAddProduct } from "../../Hooks/useAddProduct";

const AddProductForm = ({ id }: { id?: string }) => {
  const { handleDrag, items, files, setFiles, setItems, handleDeleteImage } =
    useAddProduct();
  //   const { createFlower, updateFlower } = useFlower();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = async (values: any) => {
    if (values) {
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
    }
  };
  const {
    handleSubmit,
    formState: { isValidating, isLoading },
    getValues,
  } = useFormContext();
  console.log(getValues(), files);
  return (
    <form className="w-full m-auto p-10 ">
      {/* {isSubmitting && <Loader overlay />} */}
      <div className="-mx-3 mb-6 flex flex-wrap gap-4">
        <div className="w-full ">
          <Controller
            render={({ field, fieldState: { error }, formState }) => (
              <TextField
                error={!!error}
                placeholder="Name"
                {...field}
                fullWidth
              />
            )}
            name="name"
            rules={{ required: true }}
          />
        </div>
        <div className="w-full ">
          <Controller
            render={({ field, fieldState: { error }, formState }) => (
              <TextField
                error={!!error}
                placeholder="Description"
                {...field}
                fullWidth
              />
            )}
            name="desc"
            rules={{ required: true }}
          />
        </div>
      </div>
      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="my-5 flex  w-full items-center justify-between gap-10  ">
          <div className="mb-6 w-full  md:mb-0 md:w-1/2">
            <Controller
              render={({ field, fieldState: { error }, formState }) => (
                <TextField
                  error={!!error}
                  {...field}
                  aria-placeholder="Height"
                  placeholder=" Height in cms"
                />
              )}
              rules={{ required: true }}
              name="height"
            />

            {false && (
              <p className="text-xs italic text-red-500">
                Please fill out this field.
              </p>
            )}
          </div>
          <div className="w-full  md:w-1/2">
            <Controller
              render={({ field, fieldState: { error }, formState }) => (
                <TextField
                  error={!!error}
                  aria-placeholder="Width"
                  placeholder="Width in cms"
                  {...field}
                />
              )}
              name="width"
              rules={{ required: true }}
            />
          </div>
          <div className="w-full  ">
            <Controller
              render={({ field, fieldState: { error }, formState }) => (
                <TextField
                  error={!!error}
                  aria-placeholder="Price"
                  placeholder="Price"
                  {...field}
                />
              )}
              name="price"
              rules={{ required: true }}
            />
          </div>
          <div className="mt-6 w-full">
            <Controller
              render={({ field, fieldState: { error }, formState }) => (
                <Checkbox
                  {...field}
                  checked={field.value || false}
                  inputRef={field.ref}
                  aria-placeholder="in stock"
                />
              )}
              name="inStock"
            />
            <div>In Stock</div>
          </div>
        </div>

        <div className="my-3 w-full ">
          <Controller
            render={({ field, fieldState: { error }, formState }) => (
              <CustomSelect
                {...field}
                placeholder="Category"
                {...field}
                onChange={field.onChange}
                options={[]}
              />
            )}
            name="category"
          />
        </div>
        {/* <div className="my-3 w-full ">
          <Controller
            render={({ field, fieldState: { error }, formState }) => (
              <CustomSelect
                {...field}
                aria-placeholder="Gender"
                {...field}
                onChange={field.onChange}
                options={[]}
              />
            )}
            name="gender"
            rules={{ required: true }}
          />
        </div>
        <div className="my-3 w-full ">
          <Controller
            render={({ field, fieldState: { error }, formState }) => (
              <CustomSelect
                {...field}
                aria-placeholder="Colors"
                {...field}
                onChange={field.onChange}
                options={[]}
              />
            )}
            name="colors"
            rules={{ required: true }}
          />
        </div> */}
        <div className="my-3 w-full ">
          <UploadImages files={files} setFiles={setFiles} onChange={setItems} />
        </div>
      </div>
      <Button
        onClick={handleSubmit(onSubmit)}
        className="flex w-full justify-center  align-middle"
      >
        {id ? "Edit" : "Save"}
      </Button>
    </form>
  );
};

export default AddProductForm;
