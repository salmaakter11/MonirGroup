import React from 'react'
import { Link } from "react-router-dom";
const LatestArticles = () => {
  return (
    <>
      <section className="latest-article-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2>Latest Articles</h2>
                <p>There are many update are happaning every moment in Monir Group. With the grace of almighty, we have many sister concern of Monir Group. We are porviding best service to setifiy our customer.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <div className="single-article">
                <div className="article-img">
                  <Link to="/LatestArticlesDetails"><img src="https://img.freepik.com/free-vector/announcement-background-design_23-2151138205.jpg" alt="" /></Link>
                  <div className="article-date">
                    <p>Feb 20, 2024</p>
                  </div>
                </div>
                <Link to="/LatestArticlesDetails"><h2>ঈদ-ঊল-মিলাদুন্নবী উপলক্ষে অফিস বন্ধ
                  মনির গ্রুপের সকল কর্মকর্তা এবং...</h2></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LatestArticles;
