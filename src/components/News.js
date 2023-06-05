import React, { Component } from 'react'
import Newsitems from './Newsitems'
// import PropTypes from 'prop-types'
import Spinner from './spinner' //first letter always uppercase
import PropTypes from 'prop-types';


export class News extends Component {
  static defaultProps = {
          pageSize:18,
          category: "business",
          country:"in"
  }
  static propTypes={
    pageSize:PropTypes.number,
    category:PropTypes.string,
    country:PropTypes.string
  }
    // articles= [
    //     {
    //       "source": {
    //         "id": null,
    //         "name": "Zoom"
    //       },
    //       "author": "TN Sports Desk",
    //       "title": "3-time IPL Winner Snubs Hardik Pandya & Dhoni, Picks 29-year-old Star As Best Captain Of IPL 2023 - Times Now",
    //       "description": "MS Dhoni inspired the Chennai Super Kings to their record-equaling fifth IPL title this year. The Men in Yellow completed a stunning comeback this year, and with the same set of players with whom they finished second last in 2022, they went on to win the trop…",
    //       "url": "https://www.timesnownews.com/sports/cricket/3-time-ipl-winner-snubs-hardik-pandya-dhoni-picks-29-year-old-star-as-best-captain-of-ipl-2023-article-100646033",
    //       "urlToImage": "https://static.tnn.in/thumb/msid-100646033,updatedat-1685524708624,width-1280,height-720,resizemode-75/100646033.jpg",
    //       "publishedAt": "2023-05-31T09:33:00Z",
    //       "content": "Bihar School Teacher Recruitment 2023: Notification for 1,70,461 Vacancies Released, Application from June"
    //     },
    //     {
    //       "source": {
    //         "id": null,
    //         "name": "The Indian Express"
    //       },
    //       "author": "The Indian Express",
    //       "title": "Watch: Ravindra Jadeja’s wife touches his feet post Chennai’s fifth IPL triumph - The Indian Express",
    //       "description": "Ravindra Jadeja’s wife touches his feet post Chennai’s fifth IPL triumph - The Indian Express",
    //       "url": "https://indianexpress.com/article/sports/ipl/watch-ravindra-jadejas-wife-touches-his-feet-post-chennais-fifth-ipl-triumph-8638338/",
    //       "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/05/31/1210647-dhoniknee1.jpg",
    //       "publishedAt": "2023-05-31T07:02:16Z",
    //       "content": null
    //     },
    //     {
    //       "source": {
    //         "id": null,
    //         "name": "India.com"
    //       },
    //       "author": "Devadyuti Das",
    //       "title": "MS Dhoni Set To Be Admitted In Hospital, Days After CSK`s IPL 2023 Title Win: Report - Zee News",
    //       "description": "“Jaha se chorte hai wahi se fir se shuru hoti hai Hamari dosti. Never been a time where we met and didn’t remember our good old days. Some funny memories comes back to the life every time we meet.” Jaha se chorte hai wahi se fir se shuru hoti hai Hamari dosti…",
    //       "url": "https://zeenews.india.com/cricket/ms-dhoni-set-to-be-admitted-in-hospital-days-after-csk-s-ipl-2023-title-win-report-2615943.html",
    //       "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/05/31/1210647-dhoniknee1.jpg",
    //       "publishedAt": "2023-05-31T06:18:41Z",
    //       "content": "Chennai Super Kings (CSK) skipper MS Dhoni is set to be admitted at Kolkilaben Hospital in Mumbai, just days after winning a record-equalling fifth IPL title on Monday night. CSK defeated defending c… [+2728 chars]"
    //     },
    //     {
    //         "source": {
    //           "id": null,
    //           "name": "India.com"
    //         },
    //         "author": "Devadyuti Das",
    //         "title": "MS Dhoni Set To Be Admitted In Hospital, Days After CSK`s IPL 2023 Title Win: Report - Zee News",
    //         "description": "“Jaha se chorte hai wahi se fir se shuru hoti hai Hamari dosti. Never been a time where we met and didn’t remember our good old days. Some funny memories comes back to the life every time we meet.” Jaha se chorte hai wahi se fir se shuru hoti hai Hamari dosti…",
    //         "url": "https://zeene.india.com/cricket/ms-dhoni-set-to-be-admitted-in-hospital-days-after-csk-s-ipl-2023-title-win-report-2615943.html",
    //         "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/05/31/1210647-dhoniknee1.jpg",
    //         "publishedAt": "2023-05-31T06:18:41Z",
    //         "content": "Chennai Super Kings (CSK) skipper MS Dhoni is set to be admitted at Kolkilaben Hospital in Mumbai, just days after winning a record-equalling fifth IPL title on Monday night. CSK defeated defending c… [+2728 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": null,
    //           "name": "India.com"
    //         },
    //         "author": "Devadyuti Das",
    //         "title": "MS Dhoni Set To Be Admitted In Hospital, Days After CSK`s IPL 2023 Title Win: Report - Zee News",
    //         "description": "“Jaha se chorte hai wahi se fir se shuru hoti hai Hamari dosti. Never been a time where we met and didn’t remember our good old days. Some funny memories comes back to the life every time we meet.” Jaha se chorte hai wahi se fir se shuru hoti hai Hamari dosti…",
    //         "url": "https://zeenew.india.com/cricket/ms-dhoni-set-to-be-admitted-in-hospital-days-after-csk-s-ipl-2023-title-win-report-2615943.html",
    //         "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/05/31/1210647-dhoniknee1.jpg",
    //         "publishedAt": "2023-05-31T06:18:41Z",
    //         "content": "Chennai Super Kings (CSK) skipper MS Dhoni is set to be admitted at Kolkilaben Hospital in Mumbai, just days after winning a record-equalling fifth IPL title on Monday night. CSK defeated defending c… [+2728 chars]"
    //       }
    //   ]
    articles=[];
    constructor() {
        super();
        console.log("news component constructor is called");
        this.state = {
            articles:this.articles,
            loading: false,
            page:1
        };
      }
  totalResults=-1;
  async componentDidMount(){
    // console.log("cdm is called");
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0a1ded3e9486467fabff76d7bd068af2&pageSize=${this.props.pageSize}`;
    this.setState(
      {
        loading:true
      }
    )
    let data=await fetch(url);
    let parsedData=await data.json();
    this.totalResults=parsedData.totalResults;
    this.setState({
      articles:parsedData.articles,
      loading:false
    })
  }

  handleNextClick= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0a1ded3e9486467fabff76d7bd068af2&pageSize=${this.props.pageSize}&page=${this.state.page+1}`;
    this.setState(
      {
        loading:true
      }
    )
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
      articles:parsedData.articles,
      page:this.state.page+1,
      loading:false
    })
  }
  handlePrevClick= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0a1ded3e9486467fabff76d7bd068af2&pageSize=${this.props.pageSize}&page=${this.state.page-1}`;
    this.setState(
      {
        loading:true
      }
    )
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
      articles:parsedData.articles,
      page:this.state.page-1,
      loading:false
    })
  }
  render() {
    return (
      
        <div>
            <div className="container my-3">
            <h2 className='text-center'>MonkeyNews- Top Headlines  </h2>
            {this.state.loading && <Spinner/>}
                <div className="row">
                    {/* <div className="col-md-4">
                        <Newsitems title="temp_title" description="temp_desc" imageUrl="https://english.cdn.zeenews.com/sites/default/files/2023/05/31/1210647-dhoniknee1.jpg" newsUrl="todo"/>
                    </div>
                    <div className="col-md-4">
                       <Newsitems title="temp_title" description="temp_desc"
                       imageUrl="image.jpg" newsUrl="todo" />
                    </div>
                    <div className="col-md-4">
                       <Newsitems title="temp_title" description="temp_desc"
                       imageUrl="image.jpg" newsUrl="todo" />
                    </div> */}
                    {
                      !this.state.loading && 
                        this.state.articles.map(
                            (element)=>{
                              // console.log("map method working");
                                return <div className="col-md-4 my-1" key={element.url}>
                                <Newsitems title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""}
                                imageUrl={element.urlToImage} newsUrl={element.url} />
                                </div>
                            }
                        )
                    }
                </div>

                <div className='d-flex justify-content-between'>
                <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button disabled={this.state.page>=(Math.ceil(this.totalResults/this.props.pageSize))}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>

        </div>
        
    
    )
  }
}

export default News
