import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css';

function App() {
  return (
    <section>
      <Header />
      <div>

  <section className="single_product_list" style={{backgroundColor: 'white'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="single_product_iner">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6 col-sm-6">
                <div className="single_product_img">
                  <img src="Assets/img/images//Group 410.png" className="img-fluid" alt="#" />
                </div>
              </div>
              <div className="col-lg-5 col-sm-6">
                <div className="single_product_content">
                  <h2> <a href="single-product.html">A New Approach to Custom Frame</a> </h2>
                  <div className="col-lg-12 col-sm-12" id="maintext">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <br />
                  <a href="product_list.html" className="btn" id="btn3">START FRAMING</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* product list end*/}
  {/* what are we framing */}
  <div className="container-fluid">
    <div className="jumbotron text-center" id="framing">
      <h1 id="h1text">What Are You Framing?</h1>
      <hr id="hr" />
      <p id="ptext">Design a custom frame for photos, art, and more.</p>
      <div className="container" style={{marginTop: '50px'}}>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-2" id="borderrem">
            <div className="col-item" id="item">
              <div className="photo" id="photo"> 
                <img src="Assets/img/images/pngfuel.com.png" className="img-responsive" alt="a" id="resp" />
                <div className="middle">
                  <div className="text">Frame Now</div>
                </div>
              </div>
            </div>
            <br />
            <div className="info" id="h5row">
              <div className="row">
                <div className="price col-md-12">
                  <h5 id="h5"> Orignal Art</h5>
                </div>
              </div>
              <div className="clearfix">
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-2" id="borderrem">
            <div className="col-item" id="item">
              <div className="photo" id="photo"> 
                <img src="Assets/img/images/mask.png" className="img-responsive" alt="a" />
                <div className="middle">
                  <div className="text">Frame Now</div>
                </div>
              </div>
            </div>
            <br />
            <div className="info" id="h5row">
              <div className="row">
                <div className="price col-md-12">
                  <h5 id="h5"> Object</h5>
                </div>
              </div>
              <div className="clearfix">
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-2" id="borderrem">
            <div className="col-item" id="item">
              <div className="photo" id="photo"> 
                <img src="Assets/img/images/mask14.png" className="img-responsive" alt="a" />
                <div className="middle">
                  <div className="text">Frame Now</div>
                </div>
              </div>
            </div>
            <br />
            <div className="info" id="h5row">
              <div className="row">
                <div className="price col-md-12">
                  <h5 id="h5"> Textile</h5>
                </div>
              </div>
              <div className="clearfix">
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-2" id="borderrem">
            <div className="col-item" id="item">
              <div className="photo" id="photo"> 
                <img src="Assets/img/images/mask15.png" className="img-responsive" alt="a" />
                <div className="middle">
                  <div className="text">Frame Now</div>
                </div>
              </div>
            </div>
            <br />
            <div className="info" id="h5row">
              <div className="row">
                <div className="price col-md-12">
                  <h5 id="h5"> Jersey</h5>
                </div>
              </div>
              <div className="clearfix">
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-2" id="borderrem">
            <div className="col-item" id="item">
              <div className="photo" id="photo"> 
                <img src="Assets/img/images/mask16.png" className="img-responsive" alt="a" />
                <div className="middle">
                  <div className="text">Frame Now</div>
                </div>
              </div>
            </div>
            <br />
            <div className="info" id="h5row">
              <div className="row">
                <div className="price col-md-12">
                  <h5 id="h5"> Photography</h5>
                </div>
              </div>
              <div className="clearfix">
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-2" id="borderrem">
            <div className="col-item" id="item">
              <div className="photo" id="photo"> 
                <img src="Assets/img/images/minnion.png" className="img-responsive" alt="a" />
                <div className="middle">
                  <div className="text">Frame Now</div>
                </div>
              </div>
            </div>
            <br />
            <div className="info" id="h5row">
              <div className="row">
                <div className="price col-md-12">
                  <h5 id="h5"> Something Else</h5>
                </div>
              </div>
              <div className="clearfix">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* what are we framing */}
  {/* Feature Products */}
  <div className="container-fluid">
    <div className="jumbotron text-center" id="framing">
      <h1 id="h1text">Feature Products</h1>
      <hr id="hr" />
      <p id="ptext">Design a custom frame for photos, art, and more.</p>
      <section className="single_product_list">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="single_product_iner">
                <div className="row align-items-center justify-content-between">
                  <div className="col-md-6 col-sm-6">
                    <br />
                    {/* main img size */}
                    <div className="col-xs-12 col-sm-6 col-md-8" id="borderrem">
                      <div className="col-item">
                        <div className="photo"> 
                          <img src="Assets/img/images/Component.png" className="img-responsive" alt="a" />
                        </div>
                      </div>
                      <br />
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="col-md-6 col-sm-6">
                    <div className="row">
                      {/* sub img size */}
                      <div className="col-xs-12 col-sm-6 col-md-4" id="borderrem">
                        <div className="col-item" id="item">
                          <div className="photo" id="photo"> 
                            <img src="Assets/img/images/f1.png" className="img-responsive" alt="a" />
                            <div className="middle1">
                              <div className="textm">Start Framing</div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="info" id="h5row">
                          <div className="row">
                            <div className="price col-md-12">
                              <h5 id="h5"> Dover</h5>
                            </div>
                          </div>
                          <div className="clearfix">
                          </div>
                        </div>
                        <br />
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-4" id="borderrem">
                        <div className="col-item" id="item">
                          <div className="photo" id="photo"> 
                            <img src="Assets/img/images/f2.png" className="img-responsive" alt="a" />
                            <div className="middle1">
                              <div className="textm">Start Framing</div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="info" id="h5row">
                          <div className="row">
                            <div className="price col-md-12">
                              <h5 id="h5"> Marquette</h5>
                            </div>
                          </div>
                          <div className="clearfix">
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-4" id="borderrem">
                        <div className="col-item" id="item">
                          <div className="photo" id="photo"> 
                            <img src="Assets/img/images/f3.png" className="img-responsive" alt="a" />
                            <div className="middle1">
                              <div className="textm">Start Framing</div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="info" id="h5row">
                          <div className="row">
                            <div className="price col-md-12">
                              <h5 id="h5"> Wren</h5>
                            </div>
                          </div>
                          <div className="clearfix">
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-4" id="borderrem">
                        <div className="col-item" id="item">
                          <div className="photo" id="photo"> 
                            <img src="Assets/img/images/f4.png" className="img-responsive" alt="a" />
                            <div className="middle1">
                              <div className="textm">Start Framing</div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="info" id="h5row">
                          <div className="row">
                            <div className="price col-md-12">
                              <h5 id="h5">Mercer</h5>
                            </div>
                          </div>
                          <div className="clearfix">
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-4" id="borderrem">
                        <div className="col-item" id="item">
                          <div className="photo" id="photo"> 
                            <img src="Assets/img/images/f5.png" className="img-responsive" alt="a" />
                            <div className="middle1">
                              <div className="textm">Start Framing</div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="info" id="h5row">
                          <div className="row">
                            <div className="price col-md-12">
                              <h5 id="h5"> Evrett</h5>
                            </div>
                          </div>
                          <div className="clearfix">
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-4" id="borderrem">
                        <div className="col-item" id="item">
                          <div className="photo" id="photo"> 
                            <img src="Assets/img/images/F6.png" className="img-responsive" alt="a" />
                            <div className="middle1">
                              <div className="textm">Start Framing</div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="info" id="h5row">
                          <div className="row">
                            <div className="price col-md-12">
                              <h5 id="h5"> Mandalay</h5>
                            </div>
                          </div>
                          <div className="clearfix">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></section>
    </div>
  </div>
  {/* Feature Products */}
  {/* impressive Working */}
  <div className="container-fluid">
    <div className="jumbotron text-center" id="framing">
      <h1 id="h1text">Our Impressive Works</h1>
      <hr id="hr" />
      <p id="ptext">Design a custom frame for photos, art, and more.</p>
      <div className="container">
        <br />
        {/* //changes */}
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="gallery-item">
                <img className="gallery-image" src="Assets/img/images/main.png" alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col">
                  <div className="gallery-item">
                    <img className="gallery-image" src="Assets/img/images/main1.png" alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
                  </div>
                </div>
                <div className="col">
                  <div className="gallery-item">
                    <img className="gallery-image" src="Assets/img/images/main2.png" alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img className="gallery-image" id="imageh" src="Assets/img/images/main3.png" alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* changes */}
    </div>
  </div>
  {/* impressive Working */}
  {/* choose start*/}
  <section className="single_product_list">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="single_product_iner">
          </div>
          <div className="single_product_iner">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6 col-sm-6">
                <div className="single_product_img">
                  <img src="Assets/img/images/choose.png" className="img-fluid" alt="#" />
                  <img src="Assets/img/images/overrlay.svg" alt="#" className="product_overlay img-fluid" />
                </div>
              </div>
              <div className="col-lg-5 col-sm-6">
                <div className="single_product_content">
                  <h2 id="why">Why Choose Us</h2>
                  <p>Our countless frame types are loved by global frame lovers, due<br /> to the variety, quality yet simplicity.</p>
                  <br />
                  <a href="product_list.html" className="btn_3">Start Framing</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* chooose end*/}
  {/* client */}
  <div className="container-fluid">
    <div className="jumbotron " id="framing">
      <h1 id="h1text">We Love Our Client</h1>
      <hr id="hr" />
      <p id="ptext" className="text-center">Design a custom frame for photos, art, and more.</p>
      <br />
      <section className="single_product_list">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="single_product_iner">
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-4 col-sm-6">
                    <div className="single_product_img">
                      <img src="Assets/img/images/client-img.png" className="img-fluid" alt="#" />
                       <img src="Assets/img/product_overlay.png" alt="#" class="product_overlay img-fluid"/> 
                    </div>
                  </div>
                  <div className="col-lg-8 col-sm-6">
                    <div className="single_product_content">
                      <h3> <a href="single-product.html">Jeremy Crouse</a> </h3>
                      <h6>(Graphic Designer)</h6>
                      <p><i className="fa fa-quote-left" aria-hidden="true" /> &nbsp; I was looking a way to save my University degree from getting damaged while showing to others and I found index. framing options. I have got my degree framed in stylish design which is also adding beauty to my room.
                        &nbsp; <i className="fa fa-quote-right" aria-hidden="true" /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  {/* clien */}
  {/* Blog */}
  <div className="container-fluid">
    <div className="jumbotron " id="framing">
      <h1 id="h1text">Our Blog</h1>
      <hr id="hr" />
      <p id="ptext" className="text-center">Our Countless Frame Types Are Loved By Global Frame Lovers,<br /> Due To The Variety, Quality Yet Simplicity.</p>
      <br />
      <div>
        <div className="row">
          <div className="col-sm-3" style={{backgroundColor: 'white'}}>
            <div className="span2">
              <a href="#">
                <img src="Assets/img/images/blog1.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-sm-3" style={{backgroundColor: 'white'}}>
            <br />
            <p>Catergory Blog</p>
            <p>
              <b> A Very Anthropologie Holiday with Jodie Harrison.</b>
              <br />
              <span className="lead text-muted"> By Admin</span>
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              <span className="lead text-muted"> 30/3/2020</span>
            </p>
            <p id="txt">One of my favorite illustrators, Dan who goes by the creative name of Roach Graphics,...</p>
            <br />
            <button type="button" className="btn btn-primary btn-lg">Read More</button>
            <br />
            <br />
          </div>
          <div className="col-sm-3" style={{backgroundColor: 'white'}}>
            <div className="span2">
              <a href="#" className="thumbnail">
                <img src="Assets/img/images/blog2.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-sm-3" style={{backgroundColor: 'white'}}>
            <br />
            <p>Catergory Blog</p>
            <p>
              <b> A Very Anthropologie Holiday with Jodie Harrison.</b>
              <br />
              <span className="lead text-muted"> By Admin</span>
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              <span className="lead text-muted"> 30/3/2020</span>
            </p>
            <p id="txt">One of my favorite illustrators, Dan who goes by the creative name of Roach Graphics,...</p>
            <br />
            <button type="button" className="btn btn-primary btn-lg">Read More</button>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* blog */}
  {/* client review part here */}
  {/* client review part end */}
  {/* feature part here */}
  {/* feature part end */}
  {/* subscribe part here */}
 
  {/*::footer_part end::*/}
</div>

      <Footer/>

    </section>
  );
}

export default App;
