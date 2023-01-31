import React from 'react';
import PersonelForm, {getBase64} from "../components/PersonelForm";
import {Personel} from "../types/Personel";
import axios from "axios";
import {useRouter} from "next/router";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {PersonelEducationType} from "../types/PersonelEducationType";

const New = (props:InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter();

        const onSubmit = async (data: Personel) => {
     try {
         const personelData ={
             ...data,
             image: await getBase64(data.image[0] as unknown as File),
             end_date: data.end_date ? data.end_date : null,

         }
    await axios.post(
          "http://127.0.0.1:8000/api/personel/",
            personelData
      )
        router.push('/')

     } catch (e) {
            console.log("server error",e)
     }
    }

    

    return (
        <div>

            <PersonelForm onSubmit={onSubmit} schoolList={props.schoolList}/>
        </div>
    );
};

export default New;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const params = context.params;

    try {
        const pageUrl = "http://127.0.0.1:8000/api/personaleducation/"
        const data = await fetch(pageUrl);
        const schoolList = await data.json() as PersonelEducationType[]

        return {
            props: {
                schoolList
            }
        }
    } catch (e) {
        return {
            notFound: true
        } as const
    }
}