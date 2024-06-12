import React, { useEffect, useState} from 'react'
import NewsItem from './NewsItem.js';
import Spiner from './Spiner.js';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

 const News = (props) =>  {
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalArticels, setTotalArticels] = useState(0);
  const [page, setPage] = useState(1);
 


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  

 const updateNews = async() => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=56d87ef8fb1641b79ab40ab2bf8778d7&page=${page }&pageSize=${props.pageSize}`
    setLoading(true);
    setArticles([]);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles)
    setTotalArticels(parseData.totalArticels)
    setLoading(false)
    props.setProgress(100);
  }

 useEffect(() => {
 updateNews();
 document.title = `${capitalizeFirstLetter(props.category)} - NebNews`;
 // eslint-disable-next-line
  },[])
 

  // const showPrevius = async () => {
  //   setPage(page-1)
  //  updateNews()
  // }


  // const showNext = async () => {
  //   setPage(page+1)
  //   updateNews()
  // }

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=56d87ef8fb1641b79ab40ab2bf8778d7&page=${page + 1}&pageSize=${props.pageSize}`
    setPage(page+1)
    
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData)
    setArticles(articles.concat(parseData.articles));
    setTotalArticels(parseData.totalResults)
    
  };



  
    return (
      <>
        <h1 className='text-center' style={{marginTop: '100px'}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headline    </h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalArticels}
          loader={<Spiner />}
        >
          {loading && <Spiner />}
          <div className='container' >
          <div className='row my-4'>
            {articles.map((element) => {
              return <div className='col-md my-4' style={{ display: 'flex', justifyContent: 'center' }}>
                <NewsItem title={element.title ? element.title: "" } description={element.description} imageUrl={!element.urlToImage ? "https://s.yimg.com/ny/api/res/1.2/L26.7DZi8EHS_Vt3ZWBHNA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MjE-/https://media.zenfs.com/en/motleyfool.com/e1a0772eb728004f09a773cb1aecbb3d" : element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} />
              </div>
            })}
             </div >
             </div>
        </InfiniteScroll>

        </>
     
    );
  }


News.defaultProps = {
  country: 'in',
  pageSize: 24,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
