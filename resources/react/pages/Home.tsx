import React, { useEffect, useState } from "react";
import client from '@/request';

const Home: React.FC<{}> = () => {
  const [isLoading, setisLoading] = useState(false)
  const [cities, setcities] = useState([{ name: null, id: null}])
  const [foods, setfoods] = useState([{ name: null, id: null, tblKotaId: null}])

  useEffect(() => {
    setisLoading(true);
    (async () => {
      const { data, status } = await client.apiMakanan.getAll()
      if (status) setfoods((data as []))
    })();
    (async () => {
      const { data, status } = await client.apiKota.getAll()
      if (status) setcities((data as []))
    })();
    setisLoading(false);
  }, [])

  return (
    <div className="h-100 d-flex">
      {!isLoading && (
        <div className="col-5 justify-content-center align-items-center d-flex">
          {cities[0].name}
        </div>
      )}
      <div className="col-7 justify-content-center align-items-center d-flex">
        {foods[0].name}
      </div>
    </div>
  )
};

export default Home;
