import React from 'react';
import { useProductContext } from '../../../../context/ProductContext/ProductContext';

const ShopDetailsDesc = () => {
   const { oneProduct } = useProductContext();
   return (
      <>
         <section className="product-desc-area pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="bakix-details-tab">
                        <ul className="nav text-center justify-content-center pb-30 mb-50" id="myTab" role="tablist">
                           <li className="nav-item">
                              <a className="nav-link active" id="desc-tab" data-bs-toggle="tab" href="#id-desc" role="tab"
                                 aria-controls="home" aria-selected="true">Deskripsi </a>
                           </li>
                        </ul>
                     </div>
                     <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="id-desc" role="tabpanel" aria-labelledby="desc-tab">
                           <div className="event-text mb-40">
                              <p>{oneProduct.description}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ShopDetailsDesc;