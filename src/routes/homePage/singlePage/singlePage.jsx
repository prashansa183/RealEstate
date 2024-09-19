import "./singlePage.scss";

// import Map from "../../../components/map/map";
import Map from "../../../components/map/map";
import "leaflet/dist/leaflet.css";
import Slider from "../../../components/Slider/Slider";

import { singlePostData } from "../../../lib/dummyData";

import { userData } from "../../../lib/dummyData";

const SinglePage = () => {

  // console.log("single")
  // console.log(singlePostData)
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">${singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property fee</span>
                <p>Must have 3X the rent in total household income</p>
              </div>
            </div>
          </div>

          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 Beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 Bathroom</span>
            </div>
          </div>

          <p className="title">Nearby Place</p>

          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />

              <div className="featureText">
                <span>Schoolwh</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bus.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/restaurant.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>

          <p className="title">Location</p>

          <div className="map-container">
           
        <Map items={[singlePostData]}/>
          
           
          </div>

          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              send a Message
            </button>

            <button>
              <img src="/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
