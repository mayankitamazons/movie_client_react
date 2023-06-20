import React, { useState, useEffect } from "react";
import { BarWave } from "react-cssfx-loading";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import CardContainer from "../../components/CardContainer";
import { GET } from "../../Services/httpClient";
import { APIs } from "../../Services/apis";
import { Link } from "react-router-dom";
import SingleCardContainer from "../../components/SingleCardContainer";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    let param;
    
    var res = await GET(APIs.MOVIELIST, param);
   
    if (res.status === 200) {
      if (res.data) setData(res.data);
    }
    setLoading(true);
  };
    return (
        <>
          <Header />
          {loading ? (
        <>
        <div className="container homepage">
         {data.map((val, index) => {
            return (
              
                <SingleCardContainer val={val} key={index}  />
                
            
            );
          })}
          </div>
          
        </>
      ) : (
        <div className="loadingDiv">
          <BarWave color="#4BD97E" width="100px" height="100px" duration="3s" />
        
        </div>
      )}
       <Footer />
        </>
    )
};

export default Home;
