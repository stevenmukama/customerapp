/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import axios from 'axios'
import Owner from '../owner/Owner'
import Personalbss from '../personalbss/Personalbss'
import './businessForm.css'


function Business() {
  const [page, setPage] = useState(0)

  const url = process.env.REACT_APP_API_URL + '/owner'

  const [values, setValues] = useState({
    businessname: '',
    categoryselect: '',
    countryitem: '',
    provinceitem: '',
    districtitem: '',
    cellitem: '',
    villageitem: '',
    streetitem: '',
    currencyitem: '',
    tinitem: '',
    websiteitem: '',
    companylogo: '',
    businessitem: '',
    categoryitem: '',
    owneditem: '',
    rentalitem: '',
    textareaitem: '',
    country:'',
    province:'',
  })

  
  const onChange = (e) => {
    console.log('formdataj', e.target.value)
    setValues({ ...values, [e.target.name]: e.target.value })
    // console.log('formdata')
    e.preventDefault()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(url, {
        businessname: values.businessname,
        categoryselect: values.categoryselect,
        countryitem: values.countryitem,
        businessitem: values.businessitem,
        category: values.categoryitem,
        companylogo: values.companylogo,
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch(function (error) {
        console.log(error)
      })
    // dispatch(values)
  }

  const FormComponents = ['Owner', 'Personal']

  const PageDisplay = () => {
    if (page === 0) {
      return <Owner values={values} onChange={onChange} setValues={setValues} />
      // formData={formData} setFormData={setFormData}
    } else {
      console.log(values)
      return <Personalbss values={values} onChange={onChange} setValues={setValues} />
      // formData={formData} setFormData={setFormData}
    }
  }
  return (
    <>
      <img className="mainimage" src="./fimboo.png" alt="fimboo" />
      <div className="business-Form">
        {/* <div className="progressbar">
        <div
          style={{
            width: page === 0 ? '33.3%' : '100%',
          }}
        ></div>
      </div> */}
        <div>
          {/* table header for owner */}
          <div>
            {page === 0 ? (
              // if (page === 0 )
              <table>
                <tbody>
                  {/* <thead> */}
                  <tr>
                    <td>
                      {' '}
                      <i className="cis-circle" /> CREATE ACCOUNT
                    </td>

                    <td className="create-business">
                      {' '}
                      <input type="checkbox" />
                      CREATE BUSINESS
                    </td>

                    <td>
                      {' '}
                      <input type="checkbox" />
                      PERSONAL PROFILE
                    </td>

                    <td>
                      {' '}
                      <input type="checkbox" />
                      DONE
                    </td>
                  </tr>
                  {/* </thead> */}
                </tbody>
              </table>
            ) : (
              <table>
                <tbody>
                  {/* <thead> */}
                  <tr>
                    <td>
                      {' '}
                      <input type="checkbox" /> CREATE ACCOUNT
                    </td>

                    <td>
                      {' '}
                      <input type="checkbox" defaultChecked />
                      CREATE BUSINESS
                    </td>
                    <td>
                      {' '}
                      <input type="checkbox" />
                      PERSONAL PROFILE
                    </td>
                    <td>
                      {' '}
                      <input type="checkbox" />
                      DONE
                    </td>
                  </tr>
                  {/* </thead> */}
                </tbody>
              </table>
            )}
          </div>

          <div className="form-container">
            {/* <p className="business__info">Business Information </p> */}
            <form className="flex-container1">
              <div className="body">{PageDisplay()}</div>

              {page === FormComponents.length - 1 ? (
                <>
                  {/* <button
                    onClick={(e) => {
                      setPage((currPage) => currPage - 1)
                      console.log('draft')
                      e.preventDefault()
                    }}
                  >
                    DRAFT
                  </button> */}
                  <button onClick={handleSubmit}>FINISH</button>
                </>
              ) : (
                <>
                  <button
                    className="continuebutton"
                    onClick={(e) => {
                      console.log('numberr')
                      setPage((currPage) => currPage + 1)
                      e.preventDefault()
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
export default Business
