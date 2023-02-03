import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic, Button } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import {Cryptocurrencies,News} from '../components'
import Loader from './loader'
const { Title } = Typography




const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10)
 
  // const globalStats = data.data.stats;
  const globalStats = data?.data?.stats;

  console.log(globalStats)
  if(isFetching) return <Loader />

  return (
    <>
      <div className='top-heading'>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row gutter={[32,7]}>
        <Col span={8}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={8}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={8}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={8}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={8}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
      </Row>
      </div>

      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className="show-more">
          {/* <Link to="/cryptocurrencies">Show More</Link> */}
          <Button type="default" size="large" href="/cryptocurrencies">Show More</Button>
          </Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more">
          {/* <Link to="/news">Show More</Link> */}
          <Button type="default" size="large" href="/news">Show More</Button>
          </Title>
      </div>
      <News simplified/> {/* simplified is a prop that we pass to the News component  */}
      
    </>
  )
}

export default Homepage