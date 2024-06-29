import ThemeToggler from "@/components/ThemeToggler";
import MainTitle from "@/components/MainTitle";
import StartButton from "@/components/StartButton";
import Settlement from "@/components/Settlement";
import Privacy from "@/components/Privacy";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import {GetServerSideProps} from "next";
import { google } from 'googleapis';

const Home = ({client}) => {
    console.log(client)
    return (
        <>
        <div className="text-darkbg dark:text-white h-full overflow-y-auto">
            <div className="w-full h-full">
                {/*<div className="w-full -mb-12 flex justify-end -ml-10 md:-ml-2 mt-4">*/}
                {/*    <ThemeToggler />*/}
                {/*</div>*/}
                <MainTitle state={client[16]} count={client[20]}/>
                <div className="-mt-12 pt-10 gap-4 px-7 flex flex-col rounded-t-[40px] bg-white dark:bg-darkbg w-full h-96">
                    <p className="sm:text-sm">
                        Fill out this 30-second survey to see what you qualify for:
                    </p>
                    <StartButton title={"Start survey now"}/>
                    <Settlement/>
                    <Privacy/>
                    <br/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home


export const getServerSideProps: GetServerSideProps = async context => {
    if (!context.params?.UUID)
        return { redirect: { destination: '/', permanent: false } }

    const UUID = context.params.UUID.toString()
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        const sheetId = process.env.SPREAD_SHEET_ID;
        // @ts-ignore
        const sheets = google.sheets({ version: 'v4', auth: auth });
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: sheetId as string,
            range: 'Clients!A1:Z',
        });

        const rows = response.data.values;
        if (rows && rows.length) {
            const client = rows.find((row: any) => row[22] == UUID);
            if (client) {
                return {
                    props: {
                        client,
                    },
                };
            }
        }
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    } catch (error: any) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }
}
