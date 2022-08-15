/* eslint-disable prettier/prettier */

import React from 'react'
import './personalbss.css'
// import { link } from 'react-router-dom'

function personalbss(props) {
  const { values, onChange, setValues } = props
  // const persanalinitialState = {
  // companylogo: '',
  //   businessitem:'',
  //   categoryitem:'',
  // }
  // const clearState = () => {
  //   setValues(persanalinitialState)
  // }
  console.log(values)

  const personalState = {
    businessitem: '',
    categoryitem: '',
    companylogo: '',
    country:'',
    province:'',
  }

  const emptyState = (e) => {
    setValues(personalState)
    e.preventDefault()
  }
  return (
    <div className="personalbss">
      {/* table header for personalbss */}
      {/* <table>
        <thead>
          <tr>
            <th>
              {' '}
              <input type="radio" /> CREATE ACCOUNT
            </th>

            <th>
              {' '}
              <input type="radio" />
              CREATE BUSINESS
            </th>

            <th>
              {' '}
              <input type="radio" />
              PERSONAL PROFILE
            </th>

            <th>
              {' '}
              <input type="radio" />
              DONE
            </th>
          </tr>
        </thead>
      </table> */}
      <p className="businessinfo">Business Information Personalbss </p>
      {/* form */}
      {/* <div className="form__container"> */}
      {/* <form> */}
      <div className="flex-container1">
        <span className="businessform">business name</span>
        <input
          // onChange={onChange} value={values.countryitem} name="countryitem" required
          // type="text"
          onChange={onChange}
          value={values.businessitem}
          name="businessitem"
          placeholder="business name"
          className="inputbusiness"
          required
        />
      </div>
      <div className="flex-container2">
        <div className="formcategory">
          <span className="categoryselect">select category</span>
          <select
            className="inputselect"
            onChange={onChange}
            value={values.categoryitem}
            name="categoryitem"
            required
          >
            {/* onChange={onChange} value={values.categoryitem} */}
            <option value="">--Please Choose an option--</option>
            <option value="1">business </option>
            <option value="2">business personalbss</option>
          </select>
        </div>
        <div className="companylogo">
          <span className="logoform">company logo</span>
          <input
            type="file"
            name="companylogo"
            onChange={onChange}
            value={values.companylogo}
            alt="companylogo"
            placeholder="no file selected"
            className="inputlogo"
          />
        
      {/* this code is in comments */}
      <div className="flex-container3">
        <div className="countryitem">
          <span className="countryform">
            country
            <input type="text" placeholder="country" className="inputcountry" onChange={onChange}  value={values.country}  name="country"/>
          </span>
        </div>
        <div className="provinceitem">
          <span className="provinceform">
            province
            <input type="text" placeholder="province" className="inputprovince"  onChange={onChange}  value={values.province}  name="province"/>
          </span>
        </div>
      </div>
      {/* <div className="flex-container4">
        <div className="districtitem">
          <span className="districtform">
            district
            <input type="text" placeholder="district" className="inputdistrict" />
          </span>
        </div>
        <div className="cellitem">
          <span className="cellform">
            cell
            <input type="text" placeholder="cell" className="inputcell" />
          </span>
        </div>
      </div> */}
      {/* <div className="flex-container5">
        <div className="villageitem">
          <span className="villageform">
            village
            <input type="text" placeholder="village" className="inputvillage" />
          </span>
        </div>
        <div className="streetitem">
          <span className="streetform">
            street number
            <input type="text" placeholder="street number" className="inputstreet" />
          </span>
        </div>
      </div> */}

      {/* <div className="flex-container6">
        <div className="phoneitem">
          <span className="phoneform">
            business phone number
            <input type="number" placeholder="name" className="inputphonenumber" />
          </span>
        </div>
        <div className="currencyitem">
          <span className="currencyform">
            currency
            <input type="text" placeholder="name" className="inputcurrency" />
          </span>
        </div>
      </div> */}
      {/* <div className="flex-container7">
        <div className="tinitem">
          <span className="tinform">
            TIN number
            <input type="text" placeholder="Tin" className="inputtinnumber" />{' '}
          </span>
        </div>
        <div className="websiteitem">
          <span className="websiteform">
            website
            <input type="text" placeholder="website" className="inputwebsite" />
          </span>
        </div>
      </div> */}
      {/* <div className="flex-container8">
        <span className="workspace">workspace</span> */}
      {/*  workspace */}
      {/* <div className="workspacecheck">
          <div className="radioform">
            <input type="radio" className="checkowned" />
            <span className="radiowned">owned</span>
          </div>
          <div className="radioform">
            <input type="radio" className="checkrental" />
            <span className="radiorental">rental</span>
          </div>
        </div>
      </div> */}
      {/* <div className="flex-container9">
        <p className="aboutbusiness">about business</p>
        <input type="text" className="inputaboutbusiness" />
      </div> */}
      {/* <div className="flex-container10">
            <button className="clearbuton">
              {' '}
              <span className="textbutton">CLEAR</span>
            </button>
            <button className="continuebuton">
              {' '}
              <span className="textbutton">CONTINUE</span>
            </button>
          </div> */}
      {/* </form> */}
      {/* </div> */}
      </div>
      </div>
      <button onClick={emptyState} className="clearbutton">
        {' '}
        CLEAR
      </button>
    </div>
  )
}

export default personalbss
