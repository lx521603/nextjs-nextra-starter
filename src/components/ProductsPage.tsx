'use client'

import DopiAd from './DopiAd'
import DopiYuyan from './DopiYuyan'
import DopiCushion from './DopiCushion'
import DopiMakeupOil from './DopiMakeupOil'
import DopiCleanser from './DopiCleanser'
import DopiCentellaWater from './DopiCentellaWater'
import DopiCentellaCream from './DopiCentellaCream'
import DopiShampoo from './DopiShampoo'
import DopiConditioner from './DopiConditioner'
import DopiLipstick from './DopiLipstick'

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-16 px-6 md:px-12 py-12">
      <DopiAd />
      <DopiYuyan />
      <DopiCushion />
      <DopiMakeupOil />
      <DopiCleanser />
      <DopiCentellaWater />
      <DopiCentellaCream />
      <DopiShampoo />
      <DopiConditioner />
      <DopiLipstick />
    </div>
  )
}
