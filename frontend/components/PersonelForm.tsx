import React, {useEffect} from 'react';
import {useFieldArray, useForm} from "react-hook-form";
import PersonelRow from "./PersonelRow";
import {useRouter} from "next/router";
import Image from "next/image";
import {HiOutlineArrowLeftOnRectangle} from "react-icons/hi2"
import {PersonalEducation, Personel} from "../types/types";

type PersonelFormPropsType = {
    personel?: Personel
    onSubmit: (data: Personel) => void
    schoolList : PersonalEducation[]
}

export const getBase64 = async (file:File) => {
    return new Promise(resolve => {
        // if (!file) {
        //     resolve(null)
        // }
        // console.log("file",file)
      let fileInfo;
      let baseURL = null
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load something...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result as string;
        resolve(baseURL);
      };
    });
  };



const PersonelForm = (props: PersonelFormPropsType) => {

    let defaultValues

    if (props.personel) {
        const {image, ...personelValues} = props.personel

        defaultValues = personelValues
    } else {

        defaultValues = {
            end_date: "",
            start_date: "",
            name: "",
            surname: "",
            position: "",
            email: "",
            phone: "",
            address: "",
            salary: 0,
        }
    }

        const {
            register,
            handleSubmit,
            formState: {errors, isSubmitting, isDirty, isSubmitSuccessful},
            control,
            setValue,
            watch,
            getValues,
            reset
        } = useForm<Personel>({
            defaultValues
        });

        useEffect(() => {
            reset({keepValues: true})
        }, [isSubmitSuccessful])

        const rowsArray = useFieldArray({
            control: control,
            name: "rows"
        })
        const watchFile = watch("image")

        console.log("watchFile", watchFile)
        console.log("values", getValues())
        const onError = (errors: any) => {
            console.log("error", errors)
        }
        const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files[0];
            const base64 = await getBase64(file) as string;
            setValue("image", base64);
        }

        const router = useRouter()

        function handleClick() {
            //if url is /localhost:3000/new
            if (router.pathname.includes("new")) {


                if (window.confirm('Are you sure you wish to go back?')) {
                    router.back()
                }
            } else {
                router.back()
            }
        }


        return (
            <form onSubmit={handleSubmit(props.onSubmit, onError)}>
                <div
                    className="dark:bg-gray-900 dark:border-gray-400 bg-green-200 border-green-300 rounded-b-xl border-8 flex flex-wrap justify-between items-center h-32 mx-auto px-4 z-10">
                    <h3 className="text-lg leading-6 font-medium text-black flex dark:text-white"> Personel
                        Information</h3>
                    <div className="mt-2 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                        <div className="mt-3 sm:mt-0 sm:ml-4">
                            <button onClick={() => handleClick()} type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white bg-black dark:bg-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                                <HiOutlineArrowLeftOnRectangle size={35} color="white"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="space-y-6 bg-white py-6 px-4 sm:p-6 dark:bg-gray-900">

                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-2 bg">
                                <label htmlFor="name"
                                       className="block text-sm font-medium text-gray-700 dark:text-white">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is required"
                                        }
                                    })}
                                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-black font-serif"
                                />
                                <span className="text-red-600 font-semibold">{errors.name?.message}</span>
                            </div>

                            <div className="col-span-6 sm:col-span-2">
                                <label htmlFor="surname"
                                       className="block text-sm font-medium text-gray-700 dark:text-white">
                                    Surname
                                </label>
                                <input
                                    type="text"
                                    {...register("surname", {
                                        required: {
                                            value: true,
                                            message: "Surname is required"

                                        }
                                    })}
                                    className="text-black font-serif mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                                <span className="text-red-600 font-semibold">{errors.surname?.message}</span>
                            </div>

                            <div className="col-span-6 sm:col-span-2">
                                <label htmlFor="image"
                                       className="font-serif block text-sm font-medium dark:text-white">
                                    Image
                                </label>
                                <div className="flex items-center">
                                    {props.personel?.image &&
                                        <Image src={props.personel?.image} width={100} height={100}/>}
                                </div>
                                <input
                                    type="file"
                                    {...register("image",
                                        {
                                            // setValueAs: async (fileList) => await getBase64(fileList),


                                        })}
                                    //onChange={handleFileChange}
                                    className="text-black font-serif mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                                <span className="text-red-600 font-semibold">{errors.image?.message}</span>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="email"
                                       className="block text-sm font-medium text-gray-700 dark:text-white">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is required"

                                        }
                                    })}
                                    className="text-black font-serif mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                                <span className="text-black font-serif text-red-600 font-semibold">{errors.email?.message}</span>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="phone"
                                       className="block text-sm font-medium text-gray-700 dark:text-white">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: "Phone is required"

                                        }
                                    })}
                                    className="text-black font-serif mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                                <span className="text-red-600 font-semibold">{errors.phone?.message}</span>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="address"
                                       className="block text-sm font-medium text-gray-700 dark:text-white">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: "Address is required"

                                        }
                                    })}
                                    className="text-black font-serif mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                                <span className="text-red-600 font-semibold">{errors.address?.message}</span>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="department"
                                       className="block text-sm font-medium text-gray-700 dark:text-white">
                                    Department
                                </label>
                                <input
                                    type="text"
                                    {...register("department", {
                                        required: {
                                            value: true,
                                            message: "Department is required"

                                        }
                                    })}
                                    className="text-black font-serif mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                                <span className="text-red-600 font-semibold">{errors.department?.message}</span>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="position"
                                       className="block text-sm font-medium text-gray-700 dark:text-white">
                                    Position
                                </label>
                                <input
                                    type="text"
                                    {...register("position", {
                                        required: {
                                            value: true,
                                            message: "Position is required"
                                        }
                                    })}
                                    className="text-black font-serif mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                                <span className="text-red-600 font-semibold">{errors.position?.message}</span>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="salary"
                                       className="block text-sm font-medium text-gray-700 dark:text-white">
                                    Salary
                                </label>
                                <input
                                    type="text"
                                    {...register("salary", {
                                        required: {
                                            value: true,
                                            message: "Salary is required"
                                        }
                                    })}
                                    className="text-black font-serif mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                                <span className="text-red-600 font-semibold">{errors.salary?.message}</span>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="start_date"
                                       className="block text-sm font-medium text-gray-700 dark:text-white">
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    {...register("start_date", {
                                        required: {
                                            value: true,
                                            message: "Start Date is required"
                                        }
                                    })}
                                    className="text-black font-serif mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                                <span className="text-red-600 font-semibold">{errors.start_date?.message}</span>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="end_date"
                                       className="block text-sm font-medium text-gray-700 dark:text-white">
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    defaultValue={null}
                                    {...register("end_date",)}
                                    className="text-black font-serif mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>


                            <button type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-1 px-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    onClick={() => rowsArray.append({
                                        school: null,
                                        school_start_date: null,
                                        school_end_date: null,

                                    })}>Add School
                            </button>

                        </div>
                    </div>
                    {/*<div className="space-y-2 bg-white py-6 px-4 sm:p-6 dark:bg-gray-900 ">*/}
                    {/*    {*/}
                    {/*        rowsArray.fields.map((item, index) => {*/}
                    {/*            return (*/}
                    {/*                <PersonelRow register={register} index={index} key={item.id} />*/}
                    {/*            )*/}


                    {/*        })*/}
                    {/*    }*/}
                    {/*</div>*/}
                    <div className="space-y-2 bg-white py-6 px-4 sm:p-6 dark:bg-gray-900 ">
                        <div className="border-t-2 border-gray-200 dark:border-gray-700"></div>
                        {
                            rowsArray.fields.map((item, index,) => {
                                return (
                                    <PersonelRow register={register} index={index} key={item.id} schoolList={props.schoolList}/>

                                )


                            })
                        }
                    </div>
                    <div className="dark:bg-gray-800 bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                            disabled={isSubmitting || !isDirty}
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        );

};
export default PersonelForm;

