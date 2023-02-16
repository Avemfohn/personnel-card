import React from 'react';
import PersonelForm, {getBase64} from "../components/PersonelForm";
import {Personel, PersonalEducation, PersonelRequest} from "../types/types";
import {useRouter} from "next/router";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {getApiPersonaleducation, postApiPersonel} from "../types/services";


const New = (props:InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter();

        const onSubmit = async (data: Personel) => {
     try {
         const personelData ={
             ...data,
             image: await getBase64(data.image[0] as unknown as File),
             end_date: data.end_date ? data.end_date : null,

         }
    await postApiPersonel(personelData as unknown as PersonelRequest),
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
        const schoolList = await getApiPersonaleducation()
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