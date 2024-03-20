import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchItem, fetchItemDescription } from "../../redux/itemSlice";



const Item = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const item = useSelector((state: any)=> state.item.data.item)
  const itemDescription = useSelector((state: any)=> state.item.itemDescription)
  const dispatch = useDispatch<any>();

  useEffect(()=> {
    if(id){ 
     dispatch(fetchItem(id))
     dispatch(fetchItemDescription(id))
    }
    console.log(itemDescription)
  },[])
  return<>
      <section className="container panel">
        <article className="row p-3">
            {item &&
                <article className="col-12" key={item.id}>
                  {item.id} 
                </article>
            }
        </article>
      </section>
  </>
};

export default Item;
