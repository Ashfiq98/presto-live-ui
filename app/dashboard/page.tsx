import React from 'react'
import '../styles/dashboard.css'
import Navbar from './components/Navbar'
import AnalyticsGrid from './components/AnalyticsGrid'
import ConversionChart from './components/ConversionChart'

type Props = {}

export default function dashboard({ }: Props) {
  return (
    <>
      <Navbar />
      <AnalyticsGrid />
      <ConversionChart />
    </>
  )
}