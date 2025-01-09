import React from "react";
export default function PopularCategoriesComponet() {
  return (
    <div className="container mt-5">
      <div className="header-main">
        <h2>Popular Categories</h2>
        <a href="#">
          View All
          <i className="fas fa-arrow-right"> </i>
        </a>
      </div>
      <div className="underline"></div>
      <div className="row mt-4">
        <div className="col-md-3 col-sm-6 col-6">
          <div className="category-card">
            <img
              alt="Accessories icon"
              height="50"
              src="https://storage.googleapis.com/a1aa/image/MNCUf4Zfl9pCjkn5VdwfuaMUbfrXg9jg4LEnTBLZme1H4qacC.jpg"
              width="50"
            />
            <div className="category-title">Accessories</div>
            <div className="category-items">2 items</div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <div className="category-card">
            <img
              alt="Air Pods icon"
              height="50"
              src="https://storage.googleapis.com/a1aa/image/Hlc9IUJeBtVbJ61g4GEu9Md3fPedVD481qS5CgpEqTD8tqGnA.jpg"
              width="50"
            />
            <div className="category-title">Air Pods</div>
            <div className="category-items">2 items</div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <div className="category-card">
            <img
              alt="Air Tag icon"
              height="50"
              src="https://storage.googleapis.com/a1aa/image/pRPSfQbLKRQSRa5GZPTeLOI27Dh6gEqOO1et4RVPzi8DuqGnA.jpg"
              width="50"
            />
            <div className="category-title">Air Tag</div>
            <div className="category-items">2 items</div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <div className="category-card">
            <img
              alt="iPhone icon"
              height="50"
              src="https://storage.googleapis.com/a1aa/image/KxrEjECPcE75BxTq5fn8PeXEqbk65k9DCudK8EqL58mEXVjTA.jpg"
              width="50"
            />
            <div className="category-title">iPhone</div>
            <div className="category-items">2 items</div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <div className="category-card">
            <img
              alt="iPhone 12 icon"
              height="50"
              src="https://storage.googleapis.com/a1aa/image/0cF2uDVFTC5PF9n0ex3XlfBo7e01UCZvPKxKFCufE1p2bVNOB.jpg"
              width="50"
            />
            <div className="category-title">iPhone 12</div>
            <div className="category-items">2 items</div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <div className="category-card">
            <img
              alt="iPhone 13 icon"
              height="50"
              src="https://storage.googleapis.com/a1aa/image/OeradbRmThS0YCQADWTPQfhVxKyfP1AfEr20FBrayA6xbVNOB.jpg"
              width="50"
            />
            <div className="category-title">iPhone 13</div>
            <div className="category-items">2 items</div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <div className="category-card">
            <img
              alt="iOS 15 icon"
              height="50"
              src="https://storage.googleapis.com/a1aa/image/BeJ6DQq5F7TGI6zPQI2bbYaW1BjMukLGbgMVZEqeYIC6WVjTA.jpg"
              width="50"
            />
            <div className="category-title">iOS 15</div>
            <div className="category-items">2 items</div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <div className="category-card">
            <img
              alt="Shop More icon"
              height="50"
              src="https://storage.googleapis.com/a1aa/image/OeKUPBL4QxTnHCThMWLZWuQqi4wDUiflIDQRkKKaFwdCXVjTA.jpg"
              width="50"
            />
            <div className="category-title">Shop More</div>
            <div className="category-items">2 items</div>
          </div>
        </div>
      </div>
    </div>
  );
}
