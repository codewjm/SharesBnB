import { Link } from 'react-router-dom';
import './SpotCard.css';

const SpotCard = ({ spot }) => {

  // added to stop that empty spot from showing
  if (!spot) return null

  return (
    <div className="card-container">
      <Link to={`/spots/${spot?.id}`}>
        <div className="preview-image-container">
          <img src={spot?.previewImage} className="preview-image"></img>
        </div>
        <div className="spot-card-details">
          <div className="top-details-bar">
            <div className="spot-cty-st">{spot?.city}, {spot?.state}</div>
            <div>
              <i className="fa fa-star fa-xs"></i><span className="spot-card-rating">{spot?.avgRating}</span>
            </div>
          </div>
          <div className="spot-night-price">
            <div className="spt-price">${spot?.price}</div>
            <div>night</div>
            </div>
        </div>
      </Link>
    </div>
  )
}

export default SpotCard;
