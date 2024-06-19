"use client"
import TodaysSales from '@components/TodaysSales';
import { Card } from '@material-tailwind/react';
import { requests } from '@services/api-requests';
import { useEffect, useState } from 'react';

const Computers = () => {
  

  return (
    <section className="flex">

      <TodaysSales categorie={"laptops"}/>
      
      </section>
  )
}

export default Computers