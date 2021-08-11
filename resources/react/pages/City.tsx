import React, { useEffect, useState } from 'react';
import client from '@/request'
import { Button, Spinner } from 'react-bootstrap';
import '@style/City.scss';


const City: React.FC<{}> = () => {
  const [cities, setCities] = useState([])
  const [city, setcity] = useState('')
  const [isLoading, setisLoading] = useState(false)
  const [editCity, seteditCity] = useState({ id: 0, name: '' })

  useEffect(() => {
    (async () => {
      const { data, status } = await client.apiKota.getAll()
      if (status) setCities((data as []))
    })()
  }, [isLoading])

  useEffect(() => {
    setcity(editCity.name)
  }, [editCity])

  const submitAddCity = async (e) => {
    e.preventDefault()
    setisLoading(true)
    try {

      const { data, status } = await client.apiKota.addCity(city)
      if (status) setcity('')
      else alert(data)
    } finally {
      setisLoading(false)
    }
  }

  const submitEditCity = async (e) => {
    e.preventDefault()
    setisLoading(true)
    try {
      const { data, status } = await client.apiKota.editCity({ id: editCity.id, name: city })
      if (status) setcity('')
      else alert(data)
    } finally {
      setisLoading(false)
      seteditCity({ name: '', id: 0 })
    }
  }

  const submitDeleteCity = async (id) => {
    setisLoading(true)
    try {
      const { data, status } = await client.apiKota.deleteCity(id)
      if (status) alert(data)
      else alert(data)
    } finally {
      setisLoading(false)
      // seteditCity({ name: '', id: 0 })
    }
  }

  return (
    <div className="d-flex flex-column align-items-center">
      {!editCity.id &&
        <form action="" onSubmit={submitAddCity} className="w-25 card card-body shadow">
          <input type="text" placeholder="ie. Jakarta" className="form form-control mb-3" value={city} onChange={e => setcity(e.target.value)}/>
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
            {!isLoading && 'Add City'}
          </Button>
        </form>
      }
      {editCity.id !== 0 &&
        <form action="" onSubmit={submitEditCity} className="w-25 card card-body shadow">
          <input type="text" value={city} onChange={e => setcity(e.target.value)} className="form form-control mb-3" />
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
            {!isLoading && 'Edit City'}
          </Button>
          {!isLoading && (
            <Button onClick={() => seteditCity({ id: 0, name: '' })} className="mt-3 btn-secondary">
              Cancel
            </Button>
          )}
        </form>
      }
      <table className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {cities.length > 0 && cities.map((el: any) => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td className="d-flex flex-column">
                  <button className="btn btn-info mb-1" onClick={() => seteditCity({ id: el.id, name: el.name })}>
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

    </div>
  )
}

export default City