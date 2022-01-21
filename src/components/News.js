import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {

    static defaultProps = {
      country: 'in',
      pageSize: 5,
      category: 'general'
    }

    static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
    }

    capitalize = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props); 
        this.state = {
            articles: [],
            loading: false,
            page: 1
        } 
        document.title = `${this.capitalize(this.props.category)} - News Monkey`;
    }

    async updateNews(pageNo) {
      const url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c1a24c6c801d4b83be9b9860a3cd840e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page,
        totalArticles: parsedData.totalResults,
        loading: false
      });
    }

    async componentDidMount() {
      let url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c1a24c6c801d4b83be9b9860a3cd840e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page -1,
        totalArticles: parsedData.totalResults,
        loading: false
      });
    }

    handleNextClick = async () => {
     /* let url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c1a24c6c801d4b83be9b9860a3cd840e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false
      }); */
      this.setState({
        page: this.state.page + 1
      });
      this.updateNews()
    }

    handlePreviousClick = async () => {
    /*  let url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c1a24c6c801d4b83be9b9860a3cd840e&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page - 1,
        loading: false
      }); */
      this.setState({
        page: this.state.page - 1
      });
      this.updateNews();
    }

    render() {
        return (
            <div className="container my-3">
              <h1 className="text-center" style={{margin: '35px 0'}}>NewsMonkey - Top {this.capitalize(this.props.category)} Headlines</h1>
              {this.state.loading && <Spinner />}
              <div className="row">
              {this.state.articles.map((item, index) => {
                 return (<div className="col-md-4" key={index}>
                  <NewsItem title={item.title} description={item.description} imageUrl={item.urlToImage} newsUrl={item.url} author={item.author} date={item.publishedAt} source={item.source.name}/>
                </div>);
              })}
              </div> 
              <div className="d-flex justify-content-between">
                <button className="btn btn-dark" disabled={this.state.page <=1} onClick={this.handlePreviousClick}>&larr; Previous</button>
                <button className="btn btn-dark" disabled={(this.state.page + 1) > Math.ceil(this.state.totalArticles/this.props.pageSize)} onClick={this.handleNextClick}>Next &rarr;</button>
              </div> 
            </div>
        )
    }
}

export default News
