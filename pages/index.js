import Image from 'next/image'
import Head from 'next/head'
import MainHome from '@/src/pages/MainHome'


export default function Home() {
  return (
    
      <div>
        <Head>
          <title>Portfolio TP</title>
          <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
          <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
        </Head>
        <MainHome />
      </div>
      
  )
}
