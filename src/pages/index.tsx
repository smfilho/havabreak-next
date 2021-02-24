import Head from 'next/head'

import { ExperienceBar } from "../components/ExperienceBar/ExperienceBar";

export default function Home() {
  return (
    <div className="container">
      <ExperienceBar />
    </div>
  )
}
