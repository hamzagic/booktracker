"use client";
import { useState } from "react";
import dynamic from 'next/dynamic'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const DynamicCalendar = dynamic(() => import('react-calendar'), {
  ssr: false,
});

const CalendarComponent = () => {
  const [value, onChange] = useState<Value>(new Date());
  return <DynamicCalendar onChange={onChange} value={value} />;
};

export default CalendarComponent;
