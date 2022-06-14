import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defultProrps = {
    country: 'us',
    pageSize: 12,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
  }

  async update() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}
    &category=${this.props.category}&apiKey=ba7817bb863c491f8252ff5257e2ecc6&page=${this.state.page}
    &pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsData = await data.json();
    this.setState({ articles: parsData.articles, totalResults: parsData.totalResults, loading: false });
  }

  async componentDidMount() {
    this.update();
  }

  handelpreClick = async () => {
    this.setState({ page: this.state.page - 1 })
    this.update();

  }

  handelNextClick = async () => {
    this.setState({ page: this.state.page + 1 })
    this.update();
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ba7817bb863c491f8252ff5257e2ecc6&page=${this.state.page}
    &pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsData.articles),
      totalResults: parsData.totalResults, loading: false
    });

  };

  render() {
    return (
      <>
        <h1 className="text-center" style={{ color: "#F0DB8E", margin: '30px', fontFamily: "Fantasy" }}>TOP HEADLINES</h1>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalResults}
          loader={<Spinner />}
        >

          <div className="container">
            <div className="row p-4">
              {this.state.articles.map((element) => {
                return <div className="col-md-3 g-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                    element.description ? element.description.slice(0, 80) : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}

                  />
                </div>

              })}
            </div>
          </div>
        </InfiniteScroll>


      </>
    );
  }
}

export default News;
