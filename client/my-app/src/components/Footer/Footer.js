import React, { useEffect } from 'react';
import {TweenMax,Power3} from 'gsap';
import "./Footer.css";

export default function Footer(){



  useEffect(()=>{

    TweenMax.staggerFromTo('#coded',3,{opacity:.4,x:-80, ease:Power3.easeOut,repeat:-1},{opacity:1,x:0, ease:Power3.easeOut,repeat:-1} );
    TweenMax.staggerFromTo('#life',3,{opacity:.4,x:0, ease:Power3.easeOut,repeat:-1},{opacity:1,x:-80, ease:Power3.easeOut,repeat:-1} );
    TweenMax.staggerFromTo('#Path_3',3,{fill:"#91FFFF",repeat:-1},{fill:"#35E5E5",repeat:-1} );
    TweenMax.staggerFromTo('#Path_4',3,{fill:"#A6E8E6",repeat:-1},{fill:"#28CEC9",repeat:-1} );

  },[])
    return(
        <footer className="page-footer" style={{backgroundColor:"#4661EC"}}>


          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">DESIGN & DEVELOPMENT</h5>
                <h6 className="black-text" style={{paddingBottom:"20px"}}>Coded_Life(Pvt) Ltd</h6>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25%" viewBox="0 0 512 684">
                    <g id="logo" transform="translate(-359 -233)">
                      <g id="laptop" transform="translate(359 173.799)">
                        <path id="Path_1" data-name="Path 1" d="M463.577,353.5H48.423V73.72A7.018,7.018,0,0,1,55.441,66.7H456.559a7.018,7.018,0,0,1,7.018,7.018V353.5Z" fill="#dfeaef"/>
                        <path id="Path_2" data-name="Path 2" d="M456.559,66.7h-52.2a7.018,7.018,0,0,1,7.018,7.018V312.251a8.249,8.249,0,0,1-8.249,8.249H48.423v33H463.578V73.72A7.02,7.02,0,0,0,456.559,66.7Z" fill="#bfcfd6"/>
                        <path id="Path_3" data-name="Path 3" d="M79.423,300.55V101.962A4.261,4.261,0,0,1,83.684,97.7H428.317a4.261,4.261,0,0,1,4.261,4.261V300.55a4.261,4.261,0,0,1-4.261,4.261H83.684A4.26,4.26,0,0,1,79.423,300.55Z" fill="#35e5e5"/>
                        <path id="Path_4" data-name="Path 4" d="M428.316,97.7H411.379V280.576a4.261,4.261,0,0,1-4.261,4.261H79.423v15.714a4.261,4.261,0,0,0,4.261,4.261H428.317a4.261,4.261,0,0,0,4.261-4.261V101.962A4.261,4.261,0,0,0,428.316,97.7Z" fill="#28cec9"/>
                        <path id="Path_5" data-name="Path 5" d="M494.756,445.3H17.244A9.744,9.744,0,0,1,7.5,435.554V416.528h497v19.026A9.744,9.744,0,0,1,494.756,445.3Z" fill="#6f98a3"/>
                        <path id="Path_6" data-name="Path 6" d="M504.5,416.529H7.5l40.923-80.718H463.577Z" fill="#9ebecc"/>
                        <path id="Path_7" data-name="Path 7" d="M463.577,335.811H404.91L431.8,388.855a8.913,8.913,0,0,1-7.95,12.944H14.967L7.5,416.529h497Z" fill="#86aebc"/>
                        <path id="Path_8" data-name="Path 8" d="M321.8,416.529l-9.789-35.5a6.623,6.623,0,0,0-6.384-4.862H206.377a6.623,6.623,0,0,0-6.384,4.862l-9.789,35.5Z" fill="#dfeaef"/>
                        <path id="Path_9" data-name="Path 9" d="M194.265,401.8l-4.062,14.73H321.8l-4.062-14.73Z" fill="#bfcfd6"/>
                        <path id="Path_10" data-name="Path 10" d="M511.976,416.063c-.005-.075,0-.149-.011-.224a7.343,7.343,0,0,0-.131-.873c-.006-.028-.015-.056-.022-.084a7.267,7.267,0,0,0-.218-.768c-.023-.067-.048-.132-.073-.2q-.126-.34-.284-.663c-.018-.038-.03-.077-.049-.115L471.076,334.02V73.72A14.535,14.535,0,0,0,456.557,59.2H55.441A14.535,14.535,0,0,0,40.922,73.72v260.3L.811,413.136c-.019.038-.031.077-.049.115-.105.215-.2.436-.284.662-.025.066-.05.132-.073.2a7.626,7.626,0,0,0-.218.77c-.006.027-.015.054-.021.081a7.391,7.391,0,0,0-.131.874c-.007.074-.007.149-.011.223-.01.157-.024.31-.024.469v19.026A17.263,17.263,0,0,0,17.244,452.8H494.756A17.263,17.263,0,0,0,512,435.555V416.529C512,416.37,511.986,416.217,511.976,416.063ZM55.923,74.2H456.077V328.311H55.923ZM53.029,343.311H458.97l33.318,65.717H327.508l-8.271-29.989a14.161,14.161,0,0,0-13.615-10.369H206.376a14.161,14.161,0,0,0-13.615,10.368l-8.271,29.99H19.711Zm258.919,65.718h-111.9l6.993-25.358h97.91ZM497,435.554a2.247,2.247,0,0,1-2.244,2.244H17.244A2.247,2.247,0,0,1,15,435.554V424.028H497Z"/>
                        <path id="Path_11" data-name="Path 11" d="M432.577,213.756a7.5,7.5,0,0,0-7.5,7.5v76.055H86.923V221.256a7.5,7.5,0,0,0-15,0V300.55a11.774,11.774,0,0,0,11.761,11.761H428.317a11.774,11.774,0,0,0,11.761-11.761V221.256A7.5,7.5,0,0,0,432.577,213.756Z"/>
                        <path id="Path_12" data-name="Path 12" d="M428.316,90.2H83.684a11.774,11.774,0,0,0-11.761,11.761v79.294a7.5,7.5,0,0,0,15,0V105.2H425.077v76.055a7.5,7.5,0,0,0,15,0V101.963A11.773,11.773,0,0,0,428.316,90.2Z"/>
                      </g>
                      <path id="cursor" d="M205.823,140.142l5.736-1.564a2.719,2.719,0,0,0,.249-5.165l-26.447-10.031a2.719,2.719,0,0,0-3.506,3.506l10.031,26.447a2.719,2.719,0,0,0,5.165-.248l1.564-5.736L212,160.731a2.717,2.717,0,0,0,3.844,0l3.364-3.364a2.719,2.719,0,0,0,0-3.845Z" transform="translate(414 241.408)"/>
                      <g id="coded" transform="translate(25 74)">
                        <text id="_.C" data-name=".C" transform="translate(457 693)" fontSize="119" fontFamily="SegoeUI-Bold, Segoe UI" fontWeight="700"><tspan x="0" y="0">.C</tspan></text>
                        <text id="oded" transform="translate(570 692)" fontSize="64" fontFamily="SegoeUI-Bold, Segoe UI" fontWeight="700"><tspan x="0" y="0">oded</tspan></text>
                      </g>
                      <g id="life" transform="translate(-126 78)">
                        <text id="L_" transform="translate(625 809)" fontSize="119" fontFamily="SegoeUI-Bold, Segoe UI" fontWeight="700"><tspan x="0" y="0">L_</tspan></text>
                        <text id="if_e_:" data-name="if (e):" transform="translate(735 813)" fontSize="64" fontFamily="SegoeUI-Bold, Segoe UI" fontWeight="700"><tspan x="0" y="0">if (e):</tspan></text>
                      </g>
                      <text id="Text" transform="translate(482 317)" fontSize="18" fontFamily="SegoeUI-Bold, Segoe UI" fontWeight="700"><tspan x="0" y="0">System.out.println(&quot;Coded_Life&quot;)</tspan></text>
                    </g>
                  </svg>

                <p className="grey-text text-lighten-4">Developers :</p>
                <ul>
                  <li><a style={{color:"white"}} href="https://github.com/SupunHD96">⦿ Supun Hewa Dewage</a></li>
                  <li><a style={{color:"white"}} href="https://github.com/IshankaDSenevirathne">⦿ Ishanka D Senevirathne</a></li>
                  <li><a style={{color:"white"}} href="https://github.com/vae97">⦿ V Akash Ekanayaka</a></li>
                  <li><a style={{color:"white"}} href="https://github.com/KisalRojitha">⦿ Kisal Rojitha</a></li>
                </ul>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Referances</h5>
                <ul>
                  <li><a className="links" target="_blank" rel="noreferrer" href="https://www.covid19api.dev/">Global Coronavirus API</a></li>
                  <li><a className="links" target="_blank" rel="noreferrer" href="https://hpb.health.gov.lk/ta/api-documentation">Sri Lanka Health Promotion Bureau</a></li>
                </ul>
              </div>
            </div>
          </div>




          <div className="footer-copyright">
            <div className="container">
            Copyright &copy; {new Date().getFullYear()}
            <a className="links right" target="_blank" rel="noreferrer" href="https://github.com/SupunHD96/SLCovidApp">
            Github</a>
            </div>
          </div>
        </footer>
    );
}
