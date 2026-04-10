import React from 'react'
import mobile from './mobile'
import laptop from './laptop'
import electronics from './electronics'
import { useLocation, useParams } from 'react-router-dom'
function Products(){
  const{name} = useParams();
  const location = useLocation();
  const queryparams = new URLSearchParams(location.search);
  const search = queryparams.get("search") || "";

  let data=[];
  if(name==="mobile"){
    data=mobile;
  }
  else if(name==="laptop"){
    data=laptop;
  }
  else if(name==="electronics"){
    data=electronics;
  }
  else if (!name){
    data = [...mobile, ...electronics, ...laptop];
  }
  else{
    data=[];
  }

   const filteredData = data.filter((item) =>item.name&& item?.name?.toLowerCase().includes(search.toLowerCase()) );
  return (
    <div style={{ padding: "20px" }}>
      {
        filteredData.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredData.map((item) => (
            <div key={item.id} style={{
              border: "1px solid #ddd",
              margin: "10px",
              padding: "10px",
              borderRadius: "5px"
            }}>
              <p>{item.id}</p>
              <p>₹{item.name}</p>
              <img src={item.image} height="100px" width="100px"/>
            </div>
          ))
        )
      }
{/* ()?():(); */}
    </div>
  )
}

export default Products;