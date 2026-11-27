import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let {title,description,imageurl,newsurl}=this.props;
    return (
      <div className="my-8">
        <section className="card" style={{maxWidth: '350px',width:'350px',height:'200px'}}>
          <img src={imageurl} className="card-img-top" alt="not found" />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
            <a href="/newsDetail" className="btn-solid btn-sm theme-primary">
              Read More
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Newsitem;
