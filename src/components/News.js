import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
          "source": {
            "id": "bbc-sport",
            "name": "BBC Sport"
          },
          "author": "BBC Sport",
          "title": "'This has to be our rock bottom' - despair at England's capitulation",
          "description": "Former England cricketers and pundits reacts to the tourists' latest Ashes collapse as the England lose in Hobart and Australia complete a 4-0 series win.",
          "url": "http://www.bbc.co.uk/sport/cricket/60015667",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/0797/production/_122734910_gettyimages-1237760611.jpg",
          "publishedAt": "2022-01-16T16:52:25.0877036Z",
          "content": "\"That has to be our rock bottom.\"\r\nThose were the words of former England captain Sir Alastair Cook after the tourists' Ashes misery finally came to an end in a familiar fashion. \r\nSet 271 to win on … [+3595 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
      ];
    constructor() {
        super(); 
        this.state = {
            articles: this.articles,
            loading: false
        } 
    }

    async componentDidMount() {
      let url =  "https://newsapi.org/v2/top-headlines?country=in&apiKey=c1a24c6c801d4b83be9b9860a3cd840e";
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles: parsedData.articles});
    }

    render() {
        return (
            <div className="container my-3">
              <h2>NewsMonkey - Top Headlines</h2>
              <div className="row">
              {this.state.articles.map((item, index) => {
                 return (<div className="col-md-4" key={index}>
                  <NewsItem title={item.title} description={item.description} imageUrl={item.urlToImage} newsUrl={item.url}/>
                </div>);
              })}
              </div>  
            </div>
        )
    }
}

export default News
