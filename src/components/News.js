import React,{useState,useEffect} from 'react'
import Newsitems from './Newsitems'
import PropTypes from 'prop-types'
import Spinner from './spinner'     //first letter always uppercase
import imageNotFound from '../imageNotFound.jpg'
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
    const[articles,setArticles]=useState([]);
    const[loading,setLoading]=useState(true);
    const[page,setPage]=useState(1);
    const[totalResults,setTotalResults]=useState(0);
    
    const capitalizeFirstLetter=(string)=> {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
  const updateNews=async ()=>{
    setLoading(true);
    props.setProgress(0);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data=await fetch(url);
    props.setProgress(30);
    let parsedData=await data.json();
    props.setProgress(60);
    setTotalResults(parsedData.totalResults);
    setArticles(parsedData.articles);
    setLoading(false);
    props.setProgress(100);
  } 

  useEffect(() => {
    document.title=`${capitalizeFirstLetter(props.category)}- NewsMonkey`;
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 
  
  const fetchMoreData = async () => {
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    setLoading(true);
    let data=await fetch(url);
    let parsedData=await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    }
    return (
      <div>
          <h2 className='text-center' style={{ margin: '3em 0 3em 0' }}>  MonkeyNews-
           Top {capitalizeFirstLetter(props.category)} Headlines  </h2>
           {loading && <Spinner />}
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
          >
          <div className="container">
          <div className="row">
            {
              articles.map(
                (element,index) => {
                  return <div className="col-md-4 my-1" key={index}>
                    <Newsitems title={element.title ? element.title.slice(0, 40) : ""}
                      description={element.description ? element.description.slice(0, 80) : ""}
                      imageUrl={element.urlToImage ? element.urlToImage : imageNotFound}
                      newsUrl={element.url} source={element.source["name"]}
                      author={element.author} publishedAt={element.publishedAt} />
                  </div>
                }
              )
            }
          </div>
          </div>
          </InfiniteScroll>
        </div>
    )
  }
export default News

News.defaultProps = {
  pageSize:18,
  category: "business",
  country:"in"
}
News.propTypes={
pageSize:PropTypes.number,
category:PropTypes.string,
country:PropTypes.string
}




// class based Component
// 'strict mode';
// import React, { Component } from 'react'
// import Newsitems from './Newsitems'
// import PropTypes from 'prop-types'
// import Spinner from './spinner' //first letter always uppercase
// import imageNotFound from '../imageNotFound.jpg'
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static defaultProps = {
//           pageSize:18,
//           category: "business",
//           country:"in"
//   }
//   static propTypes={
//     pageSize:PropTypes.number,
//     category:PropTypes.string,
//     country:PropTypes.string
//   }
//     // articles= [
//     //     {
//     //       "source": {
//     //         "id": null,
//     //         "name": "Zoom"
//     //       },
//     //       "author": "TN Sports Desk",
//     //       "title": "3-time IPL Winner Snubs Hardik Pandya & Dhoni, Picks 29-year-old Star As Best Captain Of IPL 2023 - Times Now",
//     //       "description": "MS Dhoni inspired the Chennai Super Kings to their record-equaling fifth IPL title this year. The Men in Yellow completed a stunning comeback this year, and with the same set of players with whom they finished second last in 2022, they went on to win the trop…",
//     //       "url": "https://www.timesnownews.com/sports/cricket/3-time-ipl-winner-snubs-hardik-pandya-dhoni-picks-29-year-old-star-as-best-captain-of-ipl-2023-article-100646033",
//     //       "urlToImage": "https://static.tnn.in/thumb/msid-100646033,updatedat-1685524708624,width-1280,height-720,resizemode-75/100646033.jpg",
//     //       "publishedAt": "2023-05-31T09:33:00Z",
//     //       "content": "Bihar School Teacher Recruitment 2023: Notification for 1,70,461 Vacancies Released, Application from June"
//     //     },
//     //     {
//     //       "source": {
//     //         "id": null,
//     //         "name": "The Indian Express"
//     //       },
//     //       "author": "The Indian Express",
//     //       "title": "Watch: Ravindra Jadeja’s wife touches his feet post Chennai’s fifth IPL triumph - The Indian Express",
//     //       "description": "Ravindra Jadeja’s wife touches his feet post Chennai’s fifth IPL triumph - The Indian Express",
//     //       "url": "https://indianexpress.com/article/sports/ipl/watch-ravindra-jadejas-wife-touches-his-feet-post-chennais-fifth-ipl-triumph-8638338/",
//     //       "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/05/31/1210647-dhoniknee1.jpg",
//     //       "publishedAt": "2023-05-31T07:02:16Z",
//     //       "content": null
//     //     },
//     //     {
//     //       "source": {
//     //         "id": null,
//     //         "name": "India.com"
//     //       },
//     //       "author": "Devadyuti Das",
//     //       "title": "MS Dhoni Set To Be Admitted In Hospital, Days After CSK`s IPL 2023 Title Win: Report - Zee News",
//     //       "description": "“Jaha se chorte hai wahi se fir se shuru hoti hai Hamari dosti. Never been a time where we met and didn’t remember our good old days. Some funny memories comes back to the life every time we meet.” Jaha se chorte hai wahi se fir se shuru hoti hai Hamari dosti…",
//     //       "url": "https://zeenews.india.com/cricket/ms-dhoni-set-to-be-admitted-in-hospital-days-after-csk-s-ipl-2023-title-win-report-2615943.html",
//     //       "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/05/31/1210647-dhoniknee1.jpg",
//     //       "publishedAt": "2023-05-31T06:18:41Z",
//     //       "content": "Chennai Super Kings (CSK) skipper MS Dhoni is set to be admitted at Kolkilaben Hospital in Mumbai, just days after winning a record-equalling fifth IPL title on Monday night. CSK defeated defending c… [+2728 chars]"
//     //     },
//     //     {
//     //         "source": {
//     //           "id": null,
//     //           "name": "India.com"
//     //         },
//     //         "author": "Devadyuti Das",
//     //         "title": "MS Dhoni Set To Be Admitted In Hospital, Days After CSK`s IPL 2023 Title Win: Report - Zee News",
//     //         "description": "“Jaha se chorte hai wahi se fir se shuru hoti hai Hamari dosti. Never been a time where we met and didn’t remember our good old days. Some funny memories comes back to the life every time we meet.” Jaha se chorte hai wahi se fir se shuru hoti hai Hamari dosti…",
//     //         "url": "https://zeene.india.com/cricket/ms-dhoni-set-to-be-admitted-in-hospital-days-after-csk-s-ipl-2023-title-win-report-2615943.html",
//     //         "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/05/31/1210647-dhoniknee1.jpg",
//     //         "publishedAt": "2023-05-31T06:18:41Z",
//     //         "content": "Chennai Super Kings (CSK) skipper MS Dhoni is set to be admitted at Kolkilaben Hospital in Mumbai, just days after winning a record-equalling fifth IPL title on Monday night. CSK defeated defending c… [+2728 chars]"
//     //       },
//     //       {
//     //         "source": {
//     //           "id": null,
//     //           "name": "India.com"
//     //         },
//     //         "author": "Devadyuti Das",
//     //         "title": "MS Dhoni Set To Be Admitted In Hospital, Days After CSK`s IPL 2023 Title Win: Report - Zee News",
//     //         "description": "“Jaha se chorte hai wahi se fir se shuru hoti hai Hamari dosti. Never been a time where we met and didn’t remember our good old days. Some funny memories comes back to the life every time we meet.” Jaha se chorte hai wahi se fir se shuru hoti hai Hamari dosti…",
//     //         "url": "https://zeenew.india.com/cricket/ms-dhoni-set-to-be-admitted-in-hospital-days-after-csk-s-ipl-2023-title-win-report-2615943.html",
//     //         "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/05/31/1210647-dhoniknee1.jpg",
//     //         "publishedAt": "2023-05-31T06:18:41Z",
//     //         "content": "Chennai Super Kings (CSK) skipper MS Dhoni is set to be admitted at Kolkilaben Hospital in Mumbai, just days after winning a record-equalling fifth IPL title on Monday night. CSK defeated defending c… [+2728 chars]"
//     //       }
//     //   ]
//     articles=[];
//     capitalizeFirstLetter(string) {
//       return string.charAt(0).toUpperCase() + string.slice(1);
//     }
//     constructor(props) {
//         super(props);
//         state = {
//             articles:articles,
//             loading: false,
//             page:1
//         };
//         document.title=`${capitalizeFirstLetter(props.category)}- NewsMonkey`;
//       }
//   totalResults=0;

//   async updateNews(){
//     props.setProgress(0);
//     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
//     setState({loading:true})
//     let data=await fetch(url);
//     props.setProgress(30);
//     let parsedData=await data.json();
//     props.setProgress(60);
//     // console.log(parsedData.articles.length,totalResults);
//     totalResults=parsedData.totalResults;
//     setState({
//       articles:parsedData.articles,
//       loading:false
//     })
//     props.setProgress(100);
//   }

//   async componentDidMount(){
//     updateNews();
//   }

//   // handleNextClick= async ()=>{
//   //   setState({page:page+1})
//   //   updateNews();
//   // }
//   // handlePrevClick= async ()=>{
//   //   setState({page:page-1})
//   //   updateNews();
//   // }

//   fetchMoreData = async () => {
//     setState({page:page+1});
//     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
//     setState({loading:true})
//     let data=await fetch(url);
//     let parsedData=await data.json();
//     // totalResults=parsedData.totalResults;
//     setState({
//       articles:articles.concat(parsedData.articles),
//       loading:false
//     })
//   }

//   render() {
//     return (
      
//       <div>
//         {/* <div className="container my-3"> */}
//           <h2 className='text-center' style={{ margin: '1em 0 3em 0' }}>  MonkeyNews- Top 
//           {capitalizeFirstLetter(props.category)} Headlines  </h2>
//           {/* {loading && <Spinner/>} */}

//           {/* infinite scrolling */}
//           <InfiniteScroll
//           dataLength={articles.length}
//           next={fetchMoreData}
//           hasMore={articles.length !== totalResults}
//           loader={<Spinner/>}
//           >
//           <div className="container">
//           <div className="row">
//             {/* <div className="col-md-4">
//                         <Newsitems title="temp_title" description="temp_desc" imageUrl="https://english.cdn.zeenews.com/sites/default/files/2023/05/31/1210647-dhoniknee1.jpg" newsUrl="todo"/>
//                     </div>
//                     <div className="col-md-4">
//                        <Newsitems title="temp_title" description="temp_desc"
//                        imageUrl="image.jpg" newsUrl="todo" />
//                     </div>
//                     <div className="col-md-4">
//                        <Newsitems title="temp_title" description="temp_desc"
//                        imageUrl="image.jpg" newsUrl="todo" />
//                     </div> */}
//             {
//               // !loading &&
//               articles.map(
//                 (element,index) => {
//                   // console.log("map method working");
//                   return <div className="col-md-4 my-1" key={index}>
//                     <Newsitems title={element.title ? element.title.slice(0, 40) : ""}
//                       description={element.description ? element.description.slice(0, 80) : ""}
//                       imageUrl={element.urlToImage ? element.urlToImage : imageNotFound}
//                       newsUrl={element.url} source={element.source["name"]}
//                       author={element.author} publishedAt={element.publishedAt} />
//                   </div>
//                 }
//               )
//             }
//           </div>
//           </div>
//           </InfiniteScroll>

//         {/* <div className='d-flex justify-content-between'>
//             <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
//             <button disabled={page >= (Math.ceil(totalResults / props.pageSize))} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
//           </div> */}
//         </div>
        
//       // </div>
        
    
//     )
//   }
// }

// export default News
