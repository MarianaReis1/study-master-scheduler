import { Link, Stack, Typography } from '@mui/material';
import Image from "next/image";
async function getData() {
  const res = await fetch(process.env.URL + '/api')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {  
  const data = await getData()
  
  return (
    <>
      <header className='mb-4 p-4'>
        <Stack direction="row" justifyContent="space-between">
          <Link href="/">
            <Image
              src={`/logo.svg`}
              alt="MyTutor"
              width={100}
              height={36}
            />
          </Link>
          <Typography>Study Master Scheduler</Typography>
        </Stack>
      </header>

      <main className="mx-auto max-w-[80%]">
        <p>{data.text}</p>
      </main>
    </>
  )
}
