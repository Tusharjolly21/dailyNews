import React, { Component } from "react";
import Spinner from "../Spinner";
import NewsItem from "./NewsItem";

export class News extends Component {
  capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)}- dailyNews`
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1967b66c93304b11a990eca4983fa5aa&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
  }
  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1967b66c93304b11a990eca4983fa5aa&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ loading: false });
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false,
      });
    }
  }
    handlePrevClick = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1967b66c93304b11a990eca4983fa5aa&page=${
        this.state.page - 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page - 1,
        loading: false,
      });
    };

  render() {
    return (
      <div className="container mx-4 my-4">
        <h1 className="text-center" style={{margin:'35px 0px',marginTop:'90px'}}>dailyNews-Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="container my-7">
          <div className="row my-4 mx-5">
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col-md-3 mx-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    netUrl={element.url}
                    author={element.author}
                    date = {element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <button
            disabled={this.state.page < 1}
            onClick={this.handlePrevClick}
            type="button"
            class="btn btn-dark"
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleNextClick}
            type="button"
            class="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
