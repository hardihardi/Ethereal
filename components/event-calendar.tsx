"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const events = [
  { date: "2024-06-15", title: "ETH Global Hackathon", location: "Virtual" },
  { date: "2024-07-22", title: "Ethereum Developer Conference", location: "Berlin, Germany" },
  { date: "2024-08-10", title: "DeFi Summit", location: "New York, USA" },
]

export default function EventCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>{currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}</CardTitle>
        <div>
          <Button variant="outline" size="sm" onClick={prevMonth} className="mr-2">
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={nextMonth}>
            Next
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {events.map((event, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{event.title}</span>
              <span className="text-sm text-gray-500">{event.date}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

