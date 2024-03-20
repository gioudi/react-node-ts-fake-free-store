import React from "react";
import { useSelector } from "react-redux";
import MlCard from "../../components/MlCard";
import { Item } from "../../types/apiTypes";

const Home = (): JSX.Element => {
  const {items} = useSelector((state: any)=> state.sites.data)
  return   <>
   
      <section className="container panel">
        <article className="row p-3">
            {items && items.slice(0,4).map((item: Item)=>
                <article className="col-12" key={item.id}>
                   <MlCard payload={item}/>
                </article>
            )}
        </article>
      </section>
  </>
};

export default Home;
