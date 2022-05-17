import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Category() {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        async function fetchData() {

            try {
                let userData = await axios.get("https://sls.magzter.com/magservices/prod/getCategories?lang=en")
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
                                <p><span className='fw-bold fs-5'>category_id: </span>{all.category_id}</p>
                                <hr/>
                                <p><span className='fw-bold fs-5'>Name: </span>{all.name}</p>
                                <hr />
                                <p><span className='fw-bold fs-5'>is_fav: </span>{all.is_fav}</p>
                                <hr />
                                <p><span className='fw-bold fs-5'>cat_slug: </span>{all.cat_slug}</p>
                                <hr />
                               <div className='col-sm '>
                               <p>
                                    <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        Read more.....
                                    </a>
                                </p>
                                <div className="collapse" id="collapseExample">
                                        <h5>Image</h5>
                                        <img src={all.image} alt="img" classNameName='w-50 h-50' />
                                        <hr />
                                        <h5>cat_icon</h5>
                                        <img src={all.cat_icon} alt="img" />
                                  
                                </div>
                               </div>


                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Category
