import React from 'react';
import {UseFormRegister} from "react-hook-form";
import {Personel, PersonalEducation} from "../types/types";

const PersonelRow = ({register, index, schoolList, removeRow}: {
    register: UseFormRegister<Personel>, index: number, schoolList: PersonalEducation[], removeRow: (index: number) => void;

}) => {

    const handleDelete = () => {
    removeRow(index);
  };

    return (

        <div className="grid grid-cols-6 gap-6">
            {/*<div className="col-span-6 sm:col-span-3">*/}
            {/*    <label htmlFor="school" className="block text-sm font-medium text-gray-700">*/}
            {/*        School*/}
            {/*    </label>*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        {...register(`rows.${index}.school`, {required: {value: true, message: "School is required"}})}*/}
            {/*        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"*/}
            {/*    />*/}
            {/*</div>*/}

             <div className="col-span-6 sm:col-span-3">
                <select {...register(`rows.${index}.school`, {
                        required: {value: true, message: "School Name is required"}

                    })} //className=" text-black font-serif mt-6 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    className="mt-6 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-900 dark:text-gray-200 dark:border-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-500 dark:placeholder-gray-400">

                    {schoolList.map(school => (
                    <option key={school.id} value={school.school}  >
                      {school.school}
                    </option>

                  ))}
                    </select>
            </div>

            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="school_start_date" className="block text-sm font-medium text-gray-700">
                    School Start Date
                </label>
                <input
                    type="text"
                    {...register(`rows.${index}.school_start_date`, {required: {value: true, message: "School Start Date is required"}})}
                    //className="text-black font-serif mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-900 dark:text-gray-200 dark:border-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-500 dark:placeholder-gray-400"

                />
            </div>

            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="school_end_date" className="block text-sm font-medium text-gray-700">
                    School End Date
                </label>
                <input
                    type="text"
                    {...register(`rows.${index}.school_end_date`, {required: {value: true, message: "School End Date is required"}})}
                    //className="text-black font-serif mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-900 dark:text-gray-200 dark:border-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-500 dark:placeholder-gray-400"

                />
            </div>

            <div className="col-span-6 sm:col-span-3">
                <button
                    type="button"
                    onClick={handleDelete}
                    className="mt-5 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:bg-gray-800 dark:text-gray-200"
                >
                    Delete
                </button>
            </div>

            <div className="col-span-12">
                <div className="border-t-2 border-gray-200 dark:border-gray-700"></div>
            </div>


        </div>

    );

};

export default PersonelRow;

