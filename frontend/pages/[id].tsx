import React from 'react';
import {Personel} from "../types/Personel";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import PersonelForm, {getBase64} from "../components/PersonelForm";
import axios from "axios";

const PersonelEdit = (props:InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const onSubmit = async (data: Personel) => {
        console.log("submit data",data)
        try {
            const rows = data.rows.map((row) => {
                return {
                    ...row,
                    personel: data.id

                }
            }
            )
            const personelData = {
                ...data,
                rows: rows,

            }
            if (data.image[0]) {
                console.log("image", data.image)
                personelData["image"] = await getBase64(data.image[0] as unknown as File) as string

            }
            await axios.patch(
                `http://127.0.0.1:8000/api/personel/${props.personel.id}/`,
                personelData
            )
        } catch (e) {
            console.log("error", e)
        }
    }

    return (
        <div>
            <PersonelForm personel={props.personel} onSubmit={onSubmit}/>
        </div>
    );
};

export default PersonelEdit;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const params = context.params;
    const id = params.id;
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/personel/${id}/`);
        const personel = await response.json() as Personel;

        return {
            props: {
                personel
            }
        }
} catch (e) {
        return {
            notFound: true
        } as const
    }
}