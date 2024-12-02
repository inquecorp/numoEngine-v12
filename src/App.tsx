import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import LengthConverter from './pages/LengthConverter';
import AreaConverter from './pages/AreaConverter';
import WeightConverter from './pages/WeightConverter';
import TemperatureConverter from './pages/TemperatureConverter';
import TimeConverter from './pages/TimeConverter';
import KilometerConverter from './pages/length/KilometerConverter';
import MeterConverter from './pages/length/MeterConverter';
import CentimeterConverter from './pages/length/CentimeterConverter';
import MillimeterConverter from './pages/length/MillimeterConverter';
import MicrometerConverter from './pages/length/MicrometerConverter';
import NanometerConverter from './pages/length/NanometerConverter';
import MileConverter from './pages/length/MileConverter';
import YardConverter from './pages/length/YardConverter';
import FeetConverter from './pages/length/FeetConverter';
import InchConverter from './pages/length/InchConverter';
import NauticalMileConverter from './pages/length/NauticalMileConverter';
import SquareKilometerConverter from './pages/area/SquareKilometerConverter';
import SquareMeterConverter from './pages/area/SquareMeterConverter';
import SquareCentimeterConverter from './pages/area/SquareCentimeterConverter';
import SquareMillimeterConverter from './pages/area/SquareMillimeterConverter';
import HectareConverter from './pages/area/HectareConverter';
import AcreConverter from './pages/area/AcreConverter';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/convert/length" element={<LengthConverter />} />
            <Route path="/convert/area" element={<AreaConverter />} />
            <Route path="/convert/weight" element={<WeightConverter />} />
            <Route path="/convert/temperature" element={<TemperatureConverter />} />
            <Route path="/convert/time" element={<TimeConverter />} />
            
            {/* Length conversions */}
            <Route path="/convert/length/kilometers-to-meters" element={<KilometerConverter type="meters" />} />
            <Route path="/convert/length/kilometers-to-centimeters" element={<KilometerConverter type="centimeters" />} />
            <Route path="/convert/length/kilometers-to-millimeters" element={<KilometerConverter type="millimeters" />} />
            <Route path="/convert/length/kilometers-to-micrometers" element={<KilometerConverter type="micrometers" />} />
            <Route path="/convert/length/kilometers-to-nanometers" element={<KilometerConverter type="nanometers" />} />
            <Route path="/convert/length/kilometers-to-miles" element={<KilometerConverter type="miles" />} />
            <Route path="/convert/length/kilometers-to-yards" element={<KilometerConverter type="yards" />} />
            <Route path="/convert/length/kilometers-to-feet" element={<KilometerConverter type="feet" />} />
            <Route path="/convert/length/kilometers-to-inches" element={<KilometerConverter type="inches" />} />
            <Route path="/convert/length/kilometers-to-nautical-miles" element={<KilometerConverter type="nautical-miles" />} />
            
            {/* Area conversions */}
            {/* Square Kilometer conversions */}
            <Route path="/convert/area/square-kilometers-to-square-meters" element={<SquareKilometerConverter type="m2" />} />
            <Route path="/convert/area/square-kilometers-to-square-centimeters" element={<SquareKilometerConverter type="cm2" />} />
            <Route path="/convert/area/square-kilometers-to-square-millimeters" element={<SquareKilometerConverter type="mm2" />} />
            <Route path="/convert/area/square-kilometers-to-hectares" element={<SquareKilometerConverter type="ha" />} />
            <Route path="/convert/area/square-kilometers-to-acres" element={<SquareKilometerConverter type="acre" />} />
            <Route path="/convert/area/square-kilometers-to-square-miles" element={<SquareKilometerConverter type="mi2" />} />
            <Route path="/convert/area/square-kilometers-to-square-yards" element={<SquareKilometerConverter type="yd2" />} />
            <Route path="/convert/area/square-kilometers-to-square-feet" element={<SquareKilometerConverter type="ft2" />} />
            <Route path="/convert/area/square-kilometers-to-square-inches" element={<SquareKilometerConverter type="in2" />} />

            {/* Square Meter conversions */}
            <Route path="/convert/area/square-meters-to-square-kilometers" element={<SquareMeterConverter type="km2" />} />
            <Route path="/convert/area/square-meters-to-square-centimeters" element={<SquareMeterConverter type="cm2" />} />
            <Route path="/convert/area/square-meters-to-square-millimeters" element={<SquareMeterConverter type="mm2" />} />
            <Route path="/convert/area/square-meters-to-hectares" element={<SquareMeterConverter type="ha" />} />
            <Route path="/convert/area/square-meters-to-acres" element={<SquareMeterConverter type="acre" />} />
            <Route path="/convert/area/square-meters-to-square-miles" element={<SquareMeterConverter type="mi2" />} />
            <Route path="/convert/area/square-meters-to-square-yards" element={<SquareMeterConverter type="yd2" />} />
            <Route path="/convert/area/square-meters-to-square-feet" element={<SquareMeterConverter type="ft2" />} />
            <Route path="/convert/area/square-meters-to-square-inches" element={<SquareMeterConverter type="in2" />} />

            {/* Square Centimeter conversions */}
            <Route path="/convert/area/square-centimeters-to-square-kilometers" element={<SquareCentimeterConverter type="km2" />} />
            <Route path="/convert/area/square-centimeters-to-square-meters" element={<SquareCentimeterConverter type="m2" />} />
            <Route path="/convert/area/square-centimeters-to-square-millimeters" element={<SquareCentimeterConverter type="mm2" />} />
            <Route path="/convert/area/square-centimeters-to-hectares" element={<SquareCentimeterConverter type="ha" />} />
            <Route path="/convert/area/square-centimeters-to-acres" element={<SquareCentimeterConverter type="acre" />} />
            <Route path="/convert/area/square-centimeters-to-square-miles" element={<SquareCentimeterConverter type="mi2" />} />
            <Route path="/convert/area/square-centimeters-to-square-yards" element={<SquareCentimeterConverter type="yd2" />} />
            <Route path="/convert/area/square-centimeters-to-square-feet" element={<SquareCentimeterConverter type="ft2" />} />
            <Route path="/convert/area/square-centimeters-to-square-inches" element={<SquareCentimeterConverter type="in2" />} />

            {/* Square Millimeter conversions */}
            <Route path="/convert/area/square-millimeters-to-square-kilometers" element={<SquareMillimeterConverter type="km2" />} />
            <Route path="/convert/area/square-millimeters-to-square-meters" element={<SquareMillimeterConverter type="m2" />} />
            <Route path="/convert/area/square-millimeters-to-square-centimeters" element={<SquareMillimeterConverter type="cm2" />} />
            <Route path="/convert/area/square-millimeters-to-hectares" element={<SquareMillimeterConverter type="ha" />} />
            <Route path="/convert/area/square-millimeters-to-acres" element={<SquareMillimeterConverter type="acre" />} />
            <Route path="/convert/area/square-millimeters-to-square-miles" element={<SquareMillimeterConverter type="mi2" />} />
            <Route path="/convert/area/square-millimeters-to-square-yards" element={<SquareMillimeterConverter type="yd2" />} />
            <Route path="/convert/area/square-millimeters-to-square-feet" element={<SquareMillimeterConverter type="ft2" />} />
            <Route path="/convert/area/square-millimeters-to-square-inches" element={<SquareMillimeterConverter type="in2" />} />

            {/* Hectare conversions */}
            <Route path="/convert/area/hectares-to-square-kilometers" element={<HectareConverter type="km2" />} />
            <Route path="/convert/area/hectares-to-square-meters" element={<HectareConverter type="m2" />} />
            <Route path="/convert/area/hectares-to-square-centimeters" element={<HectareConverter type="cm2" />} />
            <Route path="/convert/area/hectares-to-square-millimeters" element={<HectareConverter type="mm2" />} />
            <Route path="/convert/area/hectares-to-acres" element={<HectareConverter type="acre" />} />
            <Route path="/convert/area/hectares-to-square-miles" element={<HectareConverter type="mi2" />} />
            <Route path="/convert/area/hectares-to-square-yards" element={<HectareConverter type="yd2" />} />
            <Route path="/convert/area/hectares-to-square-feet" element={<HectareConverter type="ft2" />} />
            <Route path="/convert/area/hectares-to-square-inches" element={<HectareConverter type="in2" />} />

            {/* Acre conversions */}
            <Route path="/convert/area/acres-to-square-kilometers" element={<AcreConverter type="km2" />} />
            <Route path="/convert/area/acres-to-square-meters" element={<AcreConverter type="m2" />} />
            <Route path="/convert/area/acres-to-square-centimeters" element={<AcreConverter type="cm2" />} />
            <Route path="/convert/area/acres-to-square-millimeters" element={<AcreConverter type="mm2" />} />
            <Route path="/convert/area/acres-to-hectares" element={<AcreConverter type="ha" />} />
            <Route path="/convert/area/acres-to-square-miles" element={<AcreConverter type="mi2" />} />
            <Route path="/convert/area/acres-to-square-yards" element={<AcreConverter type="yd2" />} />
            <Route path="/convert/area/acres-to-square-feet" element={<AcreConverter type="ft2" />} />
            <Route path="/convert/area/acres-to-square-inches" element={<AcreConverter type="in2" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}