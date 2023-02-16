import React from 'react';
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import PersonelForm, {getBase64} from "../components/PersonelForm";
import axios from "axios";
import {
    getApiPersonelId,
    getApiPersonaleducationId,
    putApiPersonelId,
    putApiPersonaleducationId,
    getApiPersonaleducation
} from "../types/services";
import {PersonalEducation, Personel} from "../types/types";

const PersonelEdit = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    const onSubmit = async (fData: Personel) => {
        console.log("submit data", fData)
        const {image, ...data} = fData
        try {
            const rows = data.rows.map((row) => {
                    return {
                        ...row,
                        personel: data.id,

                    }
                }
            )
            const personelData = {
                ...data,
                rows: rows,


            }
            console.log("personel data", personelData)
            if (image[0]) {
                console.log("image", image)
                personelData["image"] = await getBase64(image[0] as unknown as File) as string

            }
            personelData["end_date"] = data.end_date ? data.end_date : null


            await putApiPersonelId(props.personel.id, personelData)
        } catch (e) {
            console.log("error", e)
        }
    }

    return (
        <div>
            <PersonelForm personel={props.personel} onSubmit={onSubmit} schoolList={props.schoolList}/>
        </div>
    );
};

export default PersonelEdit;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const params = context.params;
    const id = params.id as unknown as number
    try {

        const personel = await getApiPersonelId(id)
        const schoolList = await getApiPersonaleducation()
        return {
            props: {
                personel,
                schoolList
            }
        }
    } catch (e) {
        console.log("error", e  )
        return {
            notFound: true
        } as const
    }
}
