import React from "react";
import Rating from '@mui/material/Rating';
import moment from 'moment';
const index = (props) => {
    const { val } = props;

        return (
          <>
           
          <div className="personPollCard">
          <div className="row">
            <div className="col">
              <img src={val.cover_image} alt="og_imsge" className="personImg" />
              
            </div>
            <div className="col">
             
              <div className="pollCarouselContent">
                <div className="flex">
                  
                    <h4 className="personName">{val.movie_name}</h4>
                 
                </div>
               
                <div className="flex ratingbox">
                  
                  <Rating name="read-only" value={val.rating} readOnly />
                </div>
                <div className="flex">
               
                  <span className="ttleVoteCOunt">{moment(val.released_date).format('MMM DD, YYYY')}</span>
                
                </div>
                <div className="flex">
                  <button
                    className="shareBtn"
                   
                  >
                    Watch Now
                  </button>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        </>
        );
    
};

export default index;