/* eslint-disable prettier/prettier */
import React from 'react'
// {useState}
// { useEffect,  }
// useEffect
import Ownerform from './Ownerform'
import './owner.css'
// import { useSelector} from 'react-redux'
// useDispatch 
// import { useNavigate } from 'react-router-dom'
// what is needed to be done?
// make owner submit the formdata to the api
import { inputs } from './ownerInputs'
import Textarea from './textarea'
export default function Owner() {
  // const [focused, setFocused] = useState(false)
  // const handleFocus = (e) => {
  //   setFocused(true)
  // }

  // useEffect(() => {
  //   if (setFocused) {
  //     setFocused(true)
  //   }
  // }, [focused])
  // const navigate = useNavigate()

  // const [values, setValues] = useState({
  //   businessname: '',
  //   categoryselect: '',
  //   companylogo: '',
  //   countryitem: '',
  //   districtitem: '',
  //   cellitem: '',
  //   villageitem: '',
  //   streetitem: '',
  //   phoneitem: '',
  //   currencyitem: '',
  //   tinitem: '',
  //   websiteitem: '',
  //   checkowned: '',
  //   checkrental: '',
  //   aboutbusiness: '',
  // })
  // isSuccess
  // const { ownerData } = useSelector((state) => state.auth)
  // useEffect(() => {
    // if (isSuccess) {
    //   navigate('/Personalbss')
    // }
  //   if (ownerData) {
  //     navigate('/Personalbss')
  //   }
  // })

  // const onChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value })
  // }

  

  return (
    <>
      <div className="owner">
        {/* table header for owner */}
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
        {/* <p className="business__info">Business Information </p> */}

          {/* form */}
            <div className="flex-container1">
              {inputs.map((input, index) => {
                return (
                  <div key={index}>
                    {input.type === 'select' ? (
                      <div className="selectinput">
                        <label className="labelselect">{input.label}</label>
                        <select
                          // onChange={onChange}
                          value={inputs[input.name]}
                          required
                          className="selectcategory"
                        >
                          {input.options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    ) : input.type === 'radio' ? (
                      <>
                        <label>{input.label}</label>
                        <span> owner</span>
                        <input type="radio" name="my-input" id="no" value={inputs[input.name]}  />
                        {/* onChange={onChange} */}
                        <span>rental </span>

                        <input type="radio" name="my-input" id="yes" value={inputs[input.name]}/>
                        {/*  onChange={onChange}  */}
                      </>
                    ) : input.type === 'textarea' ? (
                      <div>
                        <label>{input.label}</label>
                        <Textarea value={inputs[input.name]} />
                      </div>
                    ) : (
                      <Ownerform
                        key={input.id}
                        {...input}
                        value={inputs[input.name]}
                        // onChange={onChange}
                      />
                    )}
                  </div>
                )
              })}
              {/* <button type="reset" className="clearbutton">
                CLEAR
              </button>
              <button className="continuebutton" type="submit">
                {/* onclick it will go to the next page */}
                {/* CONTINUE
              </button> */} 
            </div>
          
      </div>
    </>
  )
}
