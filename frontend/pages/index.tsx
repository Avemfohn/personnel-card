import React, {useEffect, useState} from 'react';
import {Personel} from "../types/Personel";
import {InferGetServerSidePropsType} from "next";
import {PaginatedData} from "../types/generics";
import Link from "next/link";
import {useRouter} from "next/router";
import useDebounce from "../utils/hooks";
import {useTheme} from "next-themes";
import {BsFillMoonFill, BsSun} from "react-icons/bs";

const Index =(props:InferGetServerSidePropsType<typeof getServerSideProps>)=>{

    const [data, setData] = useState(props.personels)
     const [search, setSearch] = useState(null)
    const [pageUrl, setPageUrl] = useState(null)
    const [limit, setLimit] = useState(null)
     const debouncedSearch = useDebounce(search, 500)
     const router = useRouter()
    const handleOnCreate = () => {
        router.push('/new')
    }

    const handleChangePage = async (pageUrl) => {
            const response = await fetch(pageUrl)
            const data = await response.json() as PaginatedData<Personel>
            setData(data)
    }

    const onSearch = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        if (pageUrl || limit || debouncedSearch!==null) {
            const url = pageUrl ? pageUrl : props.pageUrl
            const urlParams = new URLSearchParams(url.split("?")[1])
            limit && urlParams.set('limit', limit)
            debouncedSearch && urlParams.set('search', debouncedSearch)

            const newUrl = props.pageUrl + "?" + urlParams.toString()

            handleChangePage(newUrl)
        }
    }, [limit, pageUrl,debouncedSearch])

    //delete personel
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/personel/${id}/`, {
                method: "DELETE"
            })
            window.location.reload()

    }
    catch (e) {
            console.log("error", e)
        }
    }

    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {setMounted(true)}, [])

    const renderTheme = () => {

        if (!mounted) return null;


        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === "dark") {
            return <BsSun className="w-7 h-7 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none" role="button" onClick={() => setTheme('light')}/>
        } else {
            return <BsFillMoonFill className="w-7 h-7 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none" role="button" onClick={() => setTheme('dark')}/>
        }
    }

return (
    <div>
    <div className="dark:bg-gray-900 bg-green-200 border-green-300 transition duration-200 dark:border-gray-400 rounded-b-xl border-8 flex flex-wrap justify-between items-center h-32 mx-auto px-4 z-10">
        <h3 className="text-lg leading-6 font-medium text-green dark:text-white flex"> Personel List</h3>
        <div className="mt-2 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
            <div className="mt-3 sm:mt-0 sm:ml-4 flex justify-between items-center  ">
                <button onClick={handleOnCreate} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black transition duration-200 dark:bg-gray-400 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                    Create Personel
                </button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-4 flex justify-between items-center  ">
                {renderTheme()}
            </div>
        </div>
    </div>
        <div className="grid grid-cols-4 gap-4 rounded-tl-lg shadow-sm bg-gray-300 transition duration-200 dark:bg-gray-900">
                        <div className="relative flex-grow focus-within:z-10 border-gray-400 pl-4 ">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            </div>

                            <input
                                type="text"
                                id="search"
                                name="search"
                                onChange={onSearch}
                                value={search}
                                className=" w-full rounded-none rounded-l-md border-gray-300 pl-2 focus:border-indigo-500 focus:ring-indigo-500 text-black dark:text-white"
                                placeholder="Search"
                            />
                        </div>
                </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md bg-gray-300 transition duration-200 dark:bg-gray-900">
                <ul>
                    {data.results.map((personel) => (
                        <li key={personel.id} className="">
                            <Link href={`/${personel.id}`}>
                                <a className="block hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <div className="px-4 py-4 sm:px-6">
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm font-medium text-red-600 truncate dark:text-gray-400">
                                                {personel.name} {personel.surname}
                                            </p>
                                            <div className="ml-2 flex-shrink-0 flex">
                                                <p className="px-2 inline-flex text-sm leading-5 font-semibold  text-green-800 dark:text-gray-400">
                                                    {personel.email}
                                                </p>
                                            </div>
                                            <div className="ml-2 flex-shrink-0 flex">
                                                <button
                        onClick={() => handleDelete(personel.id)}
                        type="button"
                        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs
                        font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2
                        focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-400">
                        Delete
                    </button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
        <nav
                className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 transition duration-200 dark:bg-gray-900"
                aria-label="Pagination"
            >
                <div className="hidden sm:block">
                    <p className="text-sm text-gray-700 dark:text-white">
                        Showing <span className="font-medium">{data.offset + 1}</span> to <span className="font-medium">

            {data.offset + data.results.length}
        </span> of{' '}
                        <span className="font-medium">{data.count}</span> results
                    </p>
                </div>
                <div className="flex flex-1 justify-between sm:justify-end">
                    <button
                        disabled={data.previous === null}
                        onClick={() => setPageUrl(data.previous)}
                        type="button"
                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-white hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-700"
                    >
                        Previous
                    </button>
                    <select value={limit} onChange={(e) => setLimit(parseInt(e.target.value))}
                            className="rounded outline-gray-200 border-gray-300 ml-3">
                        <option selected>5</option>
                        <option>10</option>
                        <option>50</option>
                    </select>


                    <button
                        onClick={() => setPageUrl(data.next)}
                        type="button"
                        disabled={data.next === null}
                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-white font-medium text-white hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-700"
                    >
                        Next
                    </button>
                </div>
            </nav>
    </div>
)
}
export default Index;

export const getServerSideProps = async () => {
    const pageUrl = "http://127.0.0.1:8000/api/personel/"
    const data = await fetch(pageUrl);
    const personels = await data.json() as PaginatedData<Personel>

    return {
        props: {
            personels,
            pageUrl
        }
    }
}