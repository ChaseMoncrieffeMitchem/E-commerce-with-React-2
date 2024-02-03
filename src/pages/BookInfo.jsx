import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Rating from "../components/ui/Rating";
import Price from "../components/Price";

const BookInfo = ({ books }) => {
  return (
    <div>
      <main className="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selectedfigure">
                <img src="" alt="" className="book__selected--img" />
              </figure>
              <div className="book__selcted--description">
                <h2 className="book__selected--title">Crack the Interview</h2>
                <Rating rating="4.5" />
                <div className="book__selected--price">
                  <Price originalPrice={50} salePrice={null} />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Summary</div>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore molestiae odio vitae fuga vel numquam earum,
                    doloribus perspiciatis veniam, consequuntur quasi explicabo
                    perferendis? Cumque voluptate doloremque architecto?
                    Eligendi, deserunt error!
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore molestiae odio vitae fuga vel numquam earum,
                    doloribus perspiciatis veniam, consequuntur quasi explicabo
                    perferendis? Cumque voluptate doloremque architecto?
                    Eligendi, deserunt error!
                  </p>
                </div>
                <button className="btn">
                    Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
            <div className="row">
                <div className="book__selected--top">
                    <h2 className="book__selected--title--top">
                        Recommended Books
                    </h2>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
