/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import Owner from '../owner/Owner'
import Personalbss from '../personalbss/Personalbss'
import './businessForm.css'

// const dispatch = useDispatch()

function Form() {
  const [page, setPage] = useState(0)
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  //   firstName: '',
  //   lastName: '',
  //   username: '',
  //   nationality: '',
  //   other: '',
  // })
  const [values, setValues] = useState({
    businessname: '',
    categoryselect: '',
    companylogo: '',
    countryitem: '',
    districtitem: '',
    cellitem: '',
    villageitem: '',
    streetitem: '',
    phoneitem: '',
    currencyitem: '',
    tinitem: '',
    websiteitem: '',
    checkowned: '',
    checkrental: '',
    aboutbusiness: '',
  })
  const onChange = (e) => {
    console.log('formdata')
    setValues({ ...values, [e.target.name]: e.target.value })
    // console.log('formdata')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // dispatch(values)
  }
  const FormComponents = ['Owner', 'Personal']

  const PageDisplay = () => {
    if (page === 0) {
      return <Owner values={values} setValues={setValues} onChange={onChange} />
      // formData={formData} setFormData={setFormData}
    } else {
      return <Personalbss values={values} setValues={setValues} onChange={onChange}/>
      // formData={formData} setFormData={setFormData}
    }
  }

  return (<>
     <img className="mainimage" src="./fimboo.png" alt="fimboo" />
    <div className="form">
      {/* <div className="progressbar">
        <div
          style={{
            width: page === 0 ? '33.3%' : '100%',
          }}
        ></div>
      </div> */}
      <div className="form-container">
       
        {/* table header for owner */}
        <div>
          {page === 0 ? (
            // if (page === 0 )
            <table>
              <thead>
                <tr>
                  <th>
                    {' '}
                    <input type="checkbox" defaultChecked /> CREATE ACCOUNT
                  </th>

                  <th className="create-business">
                    {' '}
                    <input type="checkbox"  />
                    CREATE BUSINESS
                  </th>

                  <th>
                    {' '}
                    <input type="checkbox" />
                    PERSONAL PROFILE
                  </th>

                  <th>
                    {' '}
                    <input type="checkbox" />
                    DONE
                  </th>
                </tr>
              </thead>
            </table>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>
                    {' '}
                    <input type="checkbox" /> CREATE ACCOUNT
                  </th>

                  <th>
                    {' '}
                    <input type="checkbox" defaultChecked />
                    CREATE BUSINESS
                  </th>

                  <th>
                    {' '}
                    <input type="checkbox" />
                    PERSONAL PROFILE
                  </th>

                  <th>
                    {' '}
                    <input type="checkbox" />
                    DONE
                  </th>
                </tr>
              </thead>
            </table>
          )}
        </div>

        <div className="form__container">
          {/* <p className="business__info">Business Information </p> */}
          <form onSubmit={handleSubmit} className="flex-container1">
            <div className="body">{PageDisplay()}</div>

            {page === FormComponents.length - 1 ? (
              <>
                <button
                  onClick={() => {
                    setPage((currPage) => currPage - 1)
                    console.log('draft')
                  }}
                >
                  DRAFT
                </button>
                <button
                  onClick={() => {
                    //  (page === FormComponents.length - 1) {
                    alert('FORM SUBMITTED')
                    //  } else {
                    //    setPage((currPage) => currPage + 1)
                    //  }
                  }}
                >
                  FINISH
                </button>
              </>
            ) : (
              <>
                <button type="reset">CLEAR</button>
                <button
                  onClick={() => {
                    setPage((currPage) => currPage + 1)
                  }}
                >
                  CONTINUE
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
export default Form
