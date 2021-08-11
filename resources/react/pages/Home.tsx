import React, { useEffect, useState } from "react";
import client from '@/request';

const Home: React.FC<{}> = () => {
  const [position, setposition] = useState(0)
  const [cities, setcities] = useState([{ name: null, id: null }])
  const [foods, setfoods] = useState([{ name: null, id: null, tblKotaId: null }])

  useEffect(() => {
    (async () => {
      const { data, status } = await client.apiMakanan.getAll()
      if (status) setfoods((data as []))
    })();
    (async () => {
      const { data, status } = await client.apiKota.getAll()
      if (status) setcities((data as []))
    })();
    window.addEventListener('mousewheel', handleScroll)
  }, [])

  const handleDown = () => {
    if (position == foods.length - 1) setposition(0)
    else setposition(position + 1)
  }
  const handleUp = () => {
    console.log('kesini');
    console.log(position == 0);
    console.log(foods.length - 1);
    console.log(foods);
    
    
    // if (position == 0) setposition(foods.length - 1)
    if (position == 0) setposition(2)
    else setposition(position - 1)
  }
  let flag

  console.log(foods, 'ini foods');
  

  const handleScroll = (e) => {
    clearTimeout(flag)
    flag = setTimeout(() => {
      if (e.deltaX > 0) console.log('scroll right');
      if (e.deltaX < 0) console.log('scroll left')
      if (e.deltaY < 0) console.log('scroll up');
      if (e.deltaY > 0) console.log('scroll down');      

      if (e.deltaX > 0) console.log('scroll right');
      if (e.deltaX < 0) console.log('scroll left')
      if (e.deltaY < 0) handleUp()
      if (e.deltaY > 0) handleDown()
      console.log(position);
      
    }, 50);
  }

  return (
    <div className="h-100 d-flex">

      {foods.length && foods.map((el: any, index: number) => {
        if (position === index) return (<div className="animate__animated bg-info animate__slideInUp animate__slow col-5 justify-content-center align-items-center d-flex">
          {el.name}
        </div>)
      })}
      <div className="animate__animated animate__slideInDown bg-primary animate__slow col-7 justify-content-center align-items-center d-flex" style={{ zIndex: 0}}>
        {cities[0].name}
      </div>
    </div>
  )
};

export default Home;
