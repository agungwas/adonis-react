import React, { useEffect, useState } from 'react';
import client from '@/request'
import { Button, Spinner } from 'react-bootstrap';


const Food: React.FC<{}> = () => {
  const [isLoading, setisLoading] = useState(false)
  const [cities, setcities] = useState([])
  const [selectedCity, setselectedCity] = useState(0)
  const [foods, setfoods] = useState([])
  const [food, setfood] = useState('')
  const [editFood, seteditFood] = useState({ id: 0, name: '', tblKotaId: 0 })

  useEffect(() => {
    (async () => {
      const { data, status } = await client.apiMakanan.getAll()
      if (status) setfoods((data as []))
    })();
    (async () => {
      const { data, status } = await client.apiKota.getAll()
      if (status) setcities((data as []))
    })();
  }, [isLoading])

  useEffect(() => {
    setfood(editFood.name)
  }, [editFood])

  const submitAddCity = async (e) => {
    e.preventDefault()
    if (!selectedCity || !food) return alert('Please enter valid ' + (food ? 'city' : 'name'))
    setisLoading(true)
    try {
      const { data, status } = await client.apiMakanan.addFood({ name: food, tblKotaId: selectedCity })
      if (status) {
        setfood('')
        setselectedCity(0)
      }
      else alert(data)
    } finally {
      setisLoading(false)
    }
  }

  const submiteditFood = async (e) => {
    e.preventDefault()
    setisLoading(true)

    if (!editFood.name || !editFood.tblKotaId) return alert('Please enter valid ' + (editFood.name ? 'city' : 'name'))

    try {
      const { data, status } = await client.apiMakanan.editFood(editFood)
      console.log(data, 'data dari submit');

      if (status) setfood('')
      else alert(data)
    } finally {
      setisLoading(false)
      seteditFood({ name: '', id: 0, tblKotaId: 0 })
    }
  }

  const submitDeleteCity = async (id) => {
    setisLoading(true)
    try {
      const { data, status } = await client.apiMakanan.deleteFood(id)
      if (status) alert(data)
      else alert(data)
    } finally {
      setisLoading(false)
    }
  }


  return (
    <React.Fragment>
      {!editFood.id &&
        <form action="" onSubmit={submitAddCity}>
          <input type="text" name="" value={food} onChange={e => setfood(e.target.value)} id="" />
          <select name="" id="" value={selectedCity} onChange={e => setselectedCity(parseInt(e.target.value))}>
            <option disabled value="0" >Choose city</option>
            {cities.length && cities.map((el: any) => (
              <option value={el.id} key={el.id}>{el.name}</option>
            ))}
          </select>
          <Button variant="primary" disabled={isLoading} type="submit">
            {isLoading && (<>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span></>)}
            {!isLoading && 'Add Food'}
          </Button>
        </form>
      }
      {editFood.id !== 0 &&
        <form action="" onSubmit={submiteditFood}>
          <input type="text" name="" value={editFood.name} onChange={e => seteditFood({ ...editFood, name: e.target.value })} id="" />
          <select name="" id="" value={editFood.tblKotaId} onChange={e => seteditFood({ ...editFood, tblKotaId: parseInt(e.target.value) })}>
            {cities.length && cities.map((el: any) => (
              <option value={el.id} key={el.id}>{el.name}</option>
            ))}
          </select>
          <Button variant="primary" disabled={isLoading} type="submit">
            {isLoading && (<>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span></>)}
            {!isLoading && 'Edit Food'}
          </Button>
          {!isLoading && (
            <Button onClick={() => seteditFood({ id: 0, name: '', tblKotaId: 0 })}>
              Cancel
            </Button>
          )}
        </form>
      }
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>kota</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {foods.length > 0 && foods.map((el: any) => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.kota.name}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => seteditFood({ id: el.id, name: el.name, tblKotaId: el.tbl_kota_id })}>
                    edit
                  </button>
                  <button className="btn btn-danger" onClick={() => submitDeleteCity(el.id)}>
                    delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </React.Fragment>
  )
}

export default Food