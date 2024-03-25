import React from 'react'

const Input = ({ controls, formData, setFormData }) => {
  return (
    <>
      {
        controls && controls.map((item) => (


          <div key={item?.id} className="mb-5">
            <label htmlFor={item?.name} className="block mb-2 text-sm font-medium text-purple-500 w-fit">{item.label}</label>
            <input type={item?.type} className="bg-purple-50 px-2 py-1 w-full outline-none text-purple-900 text-sm rounded-lg "
              name={item?.name}
              id={item?.name}
              value={formData[item?.name]}
              onChange={(e) => setFormData({ ...formData, [item?.name]: e.target.value })}
            />
          </div>

        ))
      }
    </>
  )
}

export default Input