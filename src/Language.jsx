import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Language() {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        async function fetchData() {

            try {
                let userData = await axios.get("https://sls.magzter.com/magservices/prod/getLanguages")
                setUserList(userData.data)
                console.log(userData)
            } catch (error) {
                console.log(error)
            }


        }
        fetchData();
    }, [])



    return (
        <>
            <div>
                {
                    userList.map((all) => {
                        return <div className="card mb-3">
                            <div className="card-body">
                                <p><span className='fw-bold fs-5'>Language: </span>{all.lang}</p>
                                <hr />
                                <p><span className='fw-bold fs-5'>lang_code: </span>{all.lang_code}</p>
                                <hr />
                                <p><span className='fw-bold fs-5'>display_name: </span>{all.display_name}</p>
                                <hr />
                                <p><span className='fw-bold fs-5'>_lang: </span>{all._lang}</p>
                                <hr />
                                <p><span className='fw-bold fs-5'>store_id: </span>{all.store_id}</p>
                                

                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Language
