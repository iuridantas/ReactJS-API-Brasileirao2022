import { Card } from '../../components/card/card';
import './home.css';
import { api } from '../../utils/api/api';
import { useState, useEffect } from 'react';

export function Home() {
  const [timeList, setTimeList] = useState([]);

  async function getTime() {
    const times = await api.getAllTimes();
    setTimeList(times);
  }

  useEffect (() => {
    getTime();
  }, [])

  return (
    <>
      <div className="card-list">
        {timeList.map((item, index) => { 
          return <Card key={index} />
        })}
      </div>
    </>
  );
}
