import React from 'react';
import {UseFormRegister} from "react-hook-form";
import {Personel} from "../types/Personel";

const PersonelRow = ({register, index}: {
    register: UseFormRegister<Personel>, index: number
}) => {
    return (
        <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="school" className="block text-sm font-medium text-gray-700">
                    School
                </label>
                <input
                    type="text"
                    {...register(`rows.${index}.school`, {required: {value: true, message: "School is required"}})}
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
            </div>

            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="school_start_date" className="block text-sm font-medium text-gray-700">
                    School Start Date
                </label>
                <input
                    type="text"
                    {...register(`rows.${index}.school_start_date`, {required: {value: true, message: "School Start Date is required"}})}
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
            </div>

            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="school_end_date" className="block text-sm font-medium text-gray-700">
                    School End Date
                </label>
                <input
                    type="text"
                    {...register(`rows.${index}.school_end_date`, {required: {value: true, message: "School End Date is required"}})}
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
            </div>
        </div>
    );

};

export default PersonelRow;