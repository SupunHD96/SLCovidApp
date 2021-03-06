import {useEffect} from 'react';
import {TweenMax,Power3,TimelineMax} from 'gsap'


export default function Intro(){


    useEffect(()=>{

        TweenMax.staggerFromTo("#covid",2,{opacity:0,x:-20,ease:Power3.easeOut},{opacity:1,x:0})
        TweenMax.staggerFromTo("#update",3,{opacity:0,x:-20,ease:Power3.easeOut},{opacity:1,x:0})
        TweenMax.staggerFromTo("#svg",4,{opacity:0,x:20,ease:Power3.easeOut},{opacity:1,x:0})

        var virus= new TimelineMax({yoyo:true,repeat:-1});
            virus.fromTo("#covid-19",{rotation:'+360',transformOrigin:"50% 50%"},{rotation:"-360"});
            virus.duration(10)
    },[]);

    return(
        <div className="container">
            <br></br>
            <br></br>
            <div className="row">
                <div className="col s12 m6 l6 xl6">
                    <h2 id="covid"><b>COVID 19</b></h2>
                    <br>
                    </br>
                    <h3 id="update">Live Situation Analysis Dashboard</h3>
                </div>

                <div className="col s12 m6 l6 xl6" style={{textAlign:"center"}}>
                    <svg id="svg"  style={{margin:"auto",paddingTop:"50px",width:"100%"}} viewBox="0 0 752.737 617.679">
                        <g id="intro" transform="translate(404.497 350)">
                            <g id="hosptal">
                            <path id="Path_1" data-name="Path 1" d="M897.957,235.99l-68.5.667c-3.22-15.851-14.038-57.443-4.3-68.787a16.674,16.674,0,0,1,17.563-14.92h0c10.617-16.62,28.3-14.124,40.255-3.745,12.029,4.151,16.565,11.525,14.979,21.532,8.909,7.8,10.552,17.285,6.553,28.085Z" transform="translate(-626 -490.947)" fill="#2f2e41"/>
                            <path id="Path_2" data-name="Path 2" d="M891.362,278.189l-49.422-6.843L832.055,256.9c13.616-9.032,18.434-21.647,12.166-38.778l34.216-.76c-1.6,15.255,3.442,27.067,17.488,34.215Z" transform="translate(-626 -490.947)" fill="#ffb9b9"/>
                            <path id="Path_3" data-name="Path 3" d="M830.255,723.966l-1.89,25.835a8.224,8.224,0,0,0,8.7,8.809l13.27-.8a4.195,4.195,0,0,0,3.815-5.2l-7.366-29.463Z" transform="translate(-626 -490.947)" fill="#e6e6e6"/>
                            <path id="Path_4" data-name="Path 4" d="M873.216,723.14,865.85,752.6a4.195,4.195,0,0,0,3.815,5.2l13.27.8a8.224,8.224,0,0,0,8.7-8.809l-1.89-25.835Z" transform="translate(-626 -490.947)" fill="#e6e6e6"/>
                            <path id="Path_5" data-name="Path 5" d="M734.6,586.606l-17.908-1.8-17.828-190.57L692.128,584.2l-17.594-.63-29.653-263.08H758.172Z" transform="translate(-470 -350)" fill="#0372f3"/>
                            <circle id="Ellipse_1" data-name="Ellipse 1" cx="34.215" cy="34.215" r="34.215" transform="translate(203.013 -329.091)" fill="#ffb9b9"/>
                            <path id="Path_6" data-name="Path 6" d="M930.9,467.515l-138.383,1.521c20.537-78.181,32.821-150.8,11.405-200.731l34.216-16.728c16.5,17.208,34.871,15.434,54.745-1.521l32.695,8.364C919.978,323.891,922.488,394.011,930.9,467.515Z" transform="translate(-626 -490.947)" fill="#0372f3"/>
                            <path id="Path_7" data-name="Path 7" d="M754.5,386.919l85.919,34.216,19.209,5.65a6.645,6.645,0,0,0,8.322-4.763h0a6.645,6.645,0,0,0-3.783-7.7l-19.946-6.113-60.067-34.976L796.7,340.158l-26.232-14.067Z" transform="translate(-626 -490.947)" fill="#ffb9b9"/>
                            <path id="Path_8" data-name="Path 8" d="M755.26,324.57c16.347,6.377,29.349,17.261,39.538,31.935l31.935-46.381L803.922,268.3Z" transform="translate(-626 -490.947)" fill="#0372f3"/>
                            <path id="Path_9" data-name="Path 9" d="M901.792,190.527c-13.887-3.578-27.54-4.069-40.813.469-8.455,4.095-18.608,3.717-29.9.344V157.2l60.959,1.626Z" transform="translate(-626 -490.947)" fill="#2f2e41"/>
                            <path id="Path_10" data-name="Path 10" d="M840.134,347.053A10.145,10.145,0,0,0,830,357.187l4,83.732a10.145,10.145,0,0,0,10.134,10.134h45.732A10.145,10.145,0,0,0,900,440.919l4-83.732a10.145,10.145,0,0,0-10.134-10.134Z" transform="translate(-626 -490.947)" fill="#3f3d56"/>
                            <path id="Path_11" data-name="Path 11" d="M969.89,380.593,895,410.413l-5.65,2.25c-.18.07-.36.13-.55.19l-18.93,5.57c-2.42.71-5.77-2.55-7.73-4.8a6.085,6.085,0,0,1-.16-7.93,6.742,6.742,0,0,1,.86-.83,5.589,5.589,0,0,1,2.5-1.1l18.91-3.72a6.335,6.335,0,0,0,1.93-.72l8.82-5.14,45.79-26.66a6.218,6.218,0,0,0,2.69-7.58l-8.74-23.05a6.211,6.211,0,0,1,2.87-7.68l14.48-7.76a6.206,6.206,0,0,1,8.94,3.9l12.57,47.88a6.219,6.219,0,0,1-3.71,7.36Z" transform="translate(-626 -490.947)" fill="#ffb9b9"/>
                            <path id="Path_12" data-name="Path 12" d="M974.24,316.206c-16.347,6.377-29.349,17.261-39.538,31.935l-31.935-46.381,22.81-43.34Z" transform="translate(-626 -490.947)" fill="#0372f3"/>
                            <path id="Path_13" data-name="Path 13" d="M886,226.526c-14.968,6.226-30.663,5.973-47,0,4.754-8.114-2.352-14.469-6-22.66l61-1.813C889.335,209.169,882.452,217.576,886,226.526Z" transform="translate(-626 -490.947)" fill="#fff"/>
                            <path id="Path_14" data-name="Path 14" d="M737.354,62.46l-.708-.707,1-1,5.974-6.972.76.65-6,7Z" transform="translate(-470 -350)" fill="#fff"/>
                            <rect id="Rectangle_1" data-name="Rectangle 1" width="1.001" height="7.81" transform="translate(202.176 -291.01) rotate(-50.195)" fill="#fff"/>
                            <rect id="Rectangle_2" data-name="Rectangle 2" width="19.558" height="1" transform="matrix(0.537, -0.844, 0.844, 0.537, 258.575, -265.163)" fill="#fff"/>
                            <rect id="Rectangle_3" data-name="Rectangle 3" width="1" height="19.558" transform="translate(203.078 -281.13) rotate(-32.471)" fill="#fff"/>
                            <path id="Path_15" data-name="Path 15" d="M897,392.768v18.117l-6.307,2.512c-.2.078-.4.145-.614.212l-21.13,6.217c-2.7.792-6.441-2.846-8.628-5.358a6.792,6.792,0,0,1-.179-8.852,7.533,7.533,0,0,1,.96-.926,6.238,6.238,0,0,1,2.791-1.228L885,399.31a7.071,7.071,0,0,0,2.154-.8Z" transform="translate(-626 -490.947)" fill="#fff"/>
                            <path id="Path_16" data-name="Path 16" d="M906.14,328.149h-3.614c0-51.111-10.523-86.729-20.779-86.729l-.9-3.614c9.2,0,15.06,14.824,18.36,27.26C903.677,281.926,906.14,304.329,906.14,328.149Z" transform="translate(-626 -490.947)" fill="#3f3d56"/>
                            <path id="Path_17" data-name="Path 17" d="M823.025,315.5h-3.614c0-46.809,10.6-75.888,26.2-75.888l-.9,3.614C833.914,243.227,823.025,265.575,823.025,315.5Z" transform="translate(-626 -490.947)" fill="#3f3d56"/>
                            <circle id="Ellipse_2" data-name="Ellipse 2" cx="9.034" cy="9.034" r="9.034" transform="translate(269.299 -170.93)" fill="#3f3d56"/>
                            <path id="Path_18" data-name="Path 18" d="M808.57,337.183h-3.614c0-12.952,7.295-23.489,16.262-23.489v3.614C814.244,317.308,808.57,326.224,808.57,337.183Z" transform="translate(-626 -490.947)" fill="#3f3d56"/>
                            <path id="Path_19" data-name="Path 19" d="M837.479,337.183h-3.614c0-10.959-5.674-19.875-12.648-19.875v-3.614C830.185,313.694,837.479,324.231,837.479,337.183Z" transform="translate(-626 -490.947)" fill="#3f3d56"/>
                            <circle id="Ellipse_3" data-name="Ellipse 3" cx="3.614" cy="3.614" r="3.614" transform="translate(206.059 -156.474)" fill="#3f3d56"/>
                            <circle id="Ellipse_4" data-name="Ellipse 4" cx="3.614" cy="3.614" r="3.614" transform="translate(177.149 -156.474)" fill="#3f3d56"/>
                            <path id="Path_20" data-name="Path 20" d="M371.271,216.644,307.8,227.392a6.424,6.424,0,0,1-7.27-4.613c-4.585-16.549-14.172-38.139-4.864-48.977a17.805,17.805,0,0,1,18.755-15.933h0c11.338-17.747,30.222-15.083,42.986-4,12.845,4.432,17.688,12.307,15.995,22.992,5.549,4.857,8.459,10.329,9.072,16.334a23.589,23.589,0,0,1-6.454,18.351Z" transform="translate(-626 -490.947)" fill="#2f2e41"/>
                            <path id="Path_21" data-name="Path 21" d="M361.4,266.609l-49.2-2.894c4.822-11.067,6.748-21.724,4.824-31.836h36.659C353.6,239.644,357.466,253.074,361.4,266.609Z" transform="translate(-626 -490.947)" fill="#9f616a"/>
                            <path id="Path_22" data-name="Path 22" d="M302.18,721.236l-2.018,27.588a8.782,8.782,0,0,0,9.29,9.407l14.17-.858a4.479,4.479,0,0,0,4.074-5.557l-7.866-31.462Z" transform="translate(-626 -490.947)" fill="#e6e6e6"/>
                            <path id="Path_23" data-name="Path 23" d="M348.055,720.353l-7.866,31.462a4.48,4.48,0,0,0,4.074,5.558l14.17.858a8.782,8.782,0,0,0,9.29-9.407l-2.018-27.588Z" transform="translate(-626 -490.947)" fill="#e6e6e6"/>
                            <path id="Path_24" data-name="Path 24" d="M210.62,584.119,191.5,582.2,172.46,378.7l-7.2,202.843-18.787-.673L114.813,299.944H235.79Z" transform="translate(-470 -350)" fill="#0372f3"/>
                            <circle id="Ellipse_5" data-name="Ellipse 5" cx="36.537" cy="36.537" r="36.537" transform="translate(-326.214 -320.43)" fill="#9f616a"/>
                            <path id="Path_25" data-name="Path 25" d="M377.5,189.6c-14.829-2.583-29.409-2.937-43.582.339-9.028,2.955-19.87,2.683-31.928.248V165.548l65.094,1.173Z" transform="translate(-626 -490.947)" fill="#2f2e41"/>
                            <path id="Path_26" data-name="Path 26" d="M360.639,236.37c-15.984,6.649-32.744,6.379-50.189,0,5.076-8.664-2.512-15.45-6.407-24.2l65.138-1.936C364.2,217.836,356.85,226.813,360.639,236.37Z" transform="translate(-626 -490.947)" fill="#fff"/>
                            <rect id="Rectangle_4" data-name="Rectangle 4" width="1.001" height="8.34" transform="translate(-327.082 -282.996) rotate(-50.195)" fill="#fff"/>
                            <rect id="Rectangle_5" data-name="Rectangle 5" width="20.885" height="1" transform="matrix(0.537, -0.844, 0.844, 0.537, -266.853, -255.351)" fill="#fff"/>
                            <rect id="Rectangle_6" data-name="Rectangle 6" width="1" height="20.885" transform="translate(-326.117 -272.433) rotate(-32.471)" fill="#fff"/>
                            <path id="Path_27" data-name="Path 27" d="M266.861,373.693l-27.977-17.365,23.859-69.879a32.966,32.966,0,0,1,14.41-17.116l8.037-4.653.7,70.495Z" transform="translate(-626 -490.947)" fill="#0372f3"/>
                            <path id="Path_28" data-name="Path 28" d="M387.789,407.631l-4.139-35.452c-.221-18.713,2.962-36.8,10.554-53.475l3.859-52.095-42.447-17.365c-.13.865-.241,1.729-.365,2.594l-19.894,9.947-19.4-4.409.107-6.2-38.589,17.365c12.761,59.328,5.8,120.938-16.144,193.709l50.837,13.9.423-24.41L357.9,448.5c.467,7.92.842,15.7,1.059,23.305,25.565,9.412,26.443,9.256,49.737-4.22C399.415,448.084,392.07,427.79,387.789,407.631Z" transform="translate(-626 -490.947)" fill="#0372f3"/>
                            <path id="Path_29" data-name="Path 29" d="M297.051,224.063,271,215.381l-41.664-48.5,12.722-41.215L299.945,206.7Z" transform="translate(-470 -350)" fill="#0372f3"/>
                            <path id="Path_30" data-name="Path 30" d="M371.419,402.56a7.246,7.246,0,0,0,8.655,5.459l22.111-5.007-3.2-14.113L376.878,393.9a7.237,7.237,0,0,0-5.459,8.655Z" transform="translate(-626 -490.947)" fill="#e6e6e6"/>
                            <path id="Path_31" data-name="Path 31" d="M391.309,386.234l12.541,23.153c21.094-5.883,39.376-24.431,56.918-46.306l-4.824-15.435-29.906,7.718Z" transform="translate(-626 -490.947)" fill="#0372f3"/>
                            <path id="Path_32" data-name="Path 32" d="M71.79,172.661l24.076,4.3L150.9,255.207l-29.235-6.879Z" transform="translate(-470 -350)" fill="#e6e6e6"/>
                            <path id="Path_33" data-name="Path 33" d="M223.52,312.65a2.048,2.048,0,0,0-1.68,3.173l51.439,78.046a2.041,2.041,0,0,0,1.239.865l23.933,5.631a2.044,2.044,0,0,0,2.14-3.166l-56.478-80.3a2.033,2.033,0,0,0-1.313-.836l-18.9-3.375a2.218,2.218,0,0,0-.386-.035Z" transform="translate(-626 -490.947)" fill="#3f3d56"/>
                            <path id="Path_34" data-name="Path 34" d="M255.608,368.452l1.43,14.4,22.56-2.239a7.235,7.235,0,1,0-1.429-14.4Z" transform="translate(-626 -490.947)" fill="#e6e6e6"/>
                            <path id="Path_35" data-name="Path 35" d="M235.991,366.784a18.609,18.609,0,0,0,18.587,18.485h3.71l2.7-22.505-22.36-8.05Z" transform="translate(-626 -490.947)" fill="#0372f3"/>
                            <path id="Path_36" data-name="Path 36" d="M211.4,71.78l-.707-.707L211.76,70l6.381-7.447.759.65-6.407,7.475Z" transform="translate(-470 -350)" fill="#fff"/>
                            <path id="Path_37" data-name="Path 37" d="M495,756.053H705V501.337c0-13.488-13.285-24.46-29.614-24.46H524.614c-16.33,0-29.614,10.973-29.614,24.46Z" transform="translate(-626 -490.947)" fill="#e6e6e6"/>
                            <path id="Path_38" data-name="Path 38" d="M511,745.52H689v-215.9c0-11.432-11.261-20.733-25.1-20.733H536.1c-13.842,0-25.1,9.3-25.1,20.733Z" transform="translate(-626 -490.947)" fill="#fff"/>
                            <path id="Path_39" data-name="Path 39" d="M493.414,457.053c-5.19,0-9.414,3.488-9.414,7.775v22.444c0,4.287,4.223,7.775,9.414,7.775H706.587c5.19,0,9.413-3.488,9.413-7.775V464.828c0-4.287-4.223-7.775-9.413-7.775Z" transform="translate(-626 -490.947)" fill="#3f3d56"/>
                            <path id="Path_40" data-name="Path 40" d="M537.181,717.836a9.224,9.224,0,0,0-9.2,9.2h0a9.224,9.224,0,0,0,9.2,9.2H554.4V717.836Z" transform="translate(-626 -490.947)" fill="#3f3d56"/>
                            <path id="Path_41" data-name="Path 41" d="M570.194,717.836H553.452v18.393h16.743a9.224,9.224,0,0,0,9.2-9.2h0a9.224,9.224,0,0,0-9.2-9.2Z" transform="translate(-626 -490.947)" fill="#0372f3"/>
                            <path id="Path_42" data-name="Path 42" d="M576.2,720.088a9.143,9.143,0,0,1,2.252,6h0a9.224,9.224,0,0,1-9.2,9.2h-15.8v.943h16.743a9.224,9.224,0,0,0,9.2-9.2h0a9.177,9.177,0,0,0-3.2-6.944Z" transform="translate(-626 -490.947)" opacity="0.2"/>
                            <path id="Path_43" data-name="Path 43" d="M614.861,579.31a9.224,9.224,0,0,0-13-.384h0a9.224,9.224,0,0,0-.384,13l11.808,12.526,13.384-12.617Z" transform="translate(-626 -490.947)" fill="#3f3d56"/>
                            <path id="Path_44" data-name="Path 44" d="M637.507,603.332l-11.484-12.183-13.385,12.617,11.484,12.183a9.224,9.224,0,0,0,13,.384h0a9.224,9.224,0,0,0,.384-13Z" transform="translate(-626 -490.947)" fill="#0372f3"/>
                            <path id="Path_45" data-name="Path 45" d="M639.984,609.244A9.144,9.144,0,0,1,637.162,615h0a9.224,9.224,0,0,1-13-.384l-10.838-11.5-.686.647,11.484,12.183a9.224,9.224,0,0,0,13,.384h0A9.177,9.177,0,0,0,639.984,609.244Z" transform="translate(-626 -490.947)" opacity="0.2"/>
                            <path id="Path_46" data-name="Path 46" d="M565.861,608.31a9.224,9.224,0,0,0-13-.384h0a9.224,9.224,0,0,0-.384,13l11.808,12.526,13.384-12.617Z" transform="translate(-626 -490.947)" fill="#3f3d56"/>
                            <path id="Path_47" data-name="Path 47" d="M588.507,632.332l-11.484-12.183-13.385,12.617,11.484,12.183a9.224,9.224,0,0,0,13,.384h0a9.224,9.224,0,0,0,.384-13Z" transform="translate(-626 -490.947)" fill="#0372f3"/>
                            <path id="Path_48" data-name="Path 48" d="M590.984,638.244A9.144,9.144,0,0,1,588.162,644h0a9.224,9.224,0,0,1-13-.384l-10.838-11.5-.686.647,11.484,12.183a9.224,9.224,0,0,0,13,.384h0a9.176,9.176,0,0,0,2.862-7.089Z" transform="translate(-626 -490.947)" opacity="0.2"/>
                            <path id="Path_49" data-name="Path 49" d="M614.861,635.31a9.224,9.224,0,0,0-13-.384h0a9.224,9.224,0,0,0-.384,13l11.808,12.526,13.384-12.617Z" transform="translate(-626 -490.947)" fill="#3f3d56"/>
                            <path id="Path_50" data-name="Path 50" d="M637.507,659.332l-11.484-12.183-13.385,12.617,11.484,12.183a9.224,9.224,0,0,0,13,.384h0A9.224,9.224,0,0,0,637.507,659.332Z" transform="translate(-626 -490.947)" fill="#0372f3"/>
                            <path id="Path_51" data-name="Path 51" d="M639.984,665.244A9.144,9.144,0,0,1,637.162,671h0a9.224,9.224,0,0,1-13-.384l-10.838-11.5-.686.647,11.484,12.183a9.224,9.224,0,0,0,13,.384h0a9.177,9.177,0,0,0,2.862-7.089Z" transform="translate(-626 -490.947)" opacity="0.2"/>
                            <path id="Path_52" data-name="Path 52" d="M644.754,692.777a9.224,9.224,0,0,0,.226-13h0a9.224,9.224,0,0,0-13-.226l-12.382,11.959,12.778,13.23Z" transform="translate(-626 -490.947)" fill="#3f3d56"/>
                            <path id="Path_53" data-name="Path 53" d="M621.008,715.712l12.043-11.632-12.779-13.229L608.23,702.482a9.224,9.224,0,0,0-.226,13h0a9.224,9.224,0,0,0,13,.226Z" transform="translate(-626 -490.947)" fill="#0372f3"/>
                            <path id="Path_54" data-name="Path 54" d="M615.127,718.261a9.144,9.144,0,0,1-5.789-2.752h0a9.224,9.224,0,0,1,.226-13l11.364-10.976-.655-.678L608.23,702.482a9.224,9.224,0,0,0-.226,13h0A9.177,9.177,0,0,0,615.127,718.261Z" transform="translate(-626 -490.947)" opacity="0.2"/>
                            <path id="Path_55" data-name="Path 55" d="M578.754,663.777a9.224,9.224,0,0,0,.226-13h0a9.224,9.224,0,0,0-13-.226l-12.382,11.959,12.778,13.23Z" transform="translate(-626 -490.947)" fill="#3f3d56"/>
                            <path id="Path_56" data-name="Path 56" d="M555.008,686.712l12.043-11.632-12.779-13.229L542.23,673.482a9.224,9.224,0,0,0-.226,13h0a9.224,9.224,0,0,0,13,.226Z" transform="translate(-626 -490.947)" fill="#0372f3"/>
                            <path id="Path_57" data-name="Path 57" d="M549.127,689.261a9.144,9.144,0,0,1-5.789-2.752h0a9.224,9.224,0,0,1,.226-13l11.364-10.976-.655-.678L542.23,673.482a9.224,9.224,0,0,0-.226,13h0a9.177,9.177,0,0,0,7.123,2.775Z" transform="translate(-626 -490.947)" opacity="0.2"/>
                            <path id="Path_58" data-name="Path 58" d="M672.754,628.777a9.224,9.224,0,0,0,.226-13h0a9.224,9.224,0,0,0-13-.226l-12.382,11.959,12.778,13.23Z" transform="translate(-626 -490.947)" fill="#3f3d56"/>
                            <path id="Path_59" data-name="Path 59" d="M649.008,651.712l12.043-11.632-12.779-13.229L636.23,638.482a9.224,9.224,0,0,0-.226,13h0a9.224,9.224,0,0,0,13,.226Z" transform="translate(-626 -490.947)" fill="#0372f3"/>
                            <path id="Path_60" data-name="Path 60" d="M643.127,654.261a9.144,9.144,0,0,1-5.789-2.752h0a9.224,9.224,0,0,1,.226-13l11.364-10.976-.655-.678L636.23,638.482a9.224,9.224,0,0,0-.226,13h0a9.177,9.177,0,0,0,7.123,2.775Z" transform="translate(-626 -490.947)" opacity="0.2"/>
                            <path id="Path_61" data-name="Path 61" d="M651.861,701.31a9.224,9.224,0,0,0-13-.384h0a9.224,9.224,0,0,0-.384,13l11.808,12.526,13.384-12.617Z" transform="translate(-626 -490.947)" fill="#3f3d56"/>
                            <path id="Path_62" data-name="Path 62" d="M674.507,725.332l-11.484-12.183-13.385,12.617,11.484,12.183a9.224,9.224,0,0,0,13,.384h0a9.224,9.224,0,0,0,.384-13Z" transform="translate(-626 -490.947)" fill="#0372f3"/>
                            <path id="Path_63" data-name="Path 63" d="M676.984,731.244A9.144,9.144,0,0,1,674.162,737h0a9.224,9.224,0,0,1-13-.384l-10.838-11.5-.686.647,11.484,12.183a9.224,9.224,0,0,0,13,.384h0a9.177,9.177,0,0,0,2.862-7.089Z" transform="translate(-626 -490.947)" opacity="0.2"/>
                            <path id="Path_64" data-name="Path 64" d="M586.861,700.31a9.224,9.224,0,0,0-13-.384h0a9.224,9.224,0,0,0-.384,13l11.808,12.526,13.384-12.617Z" transform="translate(-626 -490.947)" fill="#3f3d56"/>
                            <path id="Path_65" data-name="Path 65" d="M609.507,724.332l-11.484-12.183-13.385,12.617,11.484,12.183a9.224,9.224,0,0,0,13,.384h0A9.224,9.224,0,0,0,609.507,724.332Z" transform="translate(-626 -490.947)" fill="#0372f3"/>
                            <path id="Path_66" data-name="Path 66" d="M611.984,730.244A9.144,9.144,0,0,1,609.162,736h0a9.224,9.224,0,0,1-13-.384l-10.838-11.5-.686.647,11.484,12.183a9.224,9.224,0,0,0,13,.384h0A9.176,9.176,0,0,0,611.984,730.244Z" transform="translate(-626 -490.947)" opacity="0.2"/>
                            <path id="Path_67" data-name="Path 67" d="M605.158,667.316a13.264,13.264,0,1,1-10.611-13,13.264,13.264,0,0,1,10.611,13Z" transform="translate(-626 -490.947)" fill="#0372f3"/>
                            <path id="Path_68" data-name="Path 68" d="M594.547,654.318v26a13.394,13.394,0,0,1-5.305,0v-26a13.4,13.4,0,0,1,5.305,0Z" transform="translate(-626 -490.947)" opacity="0.2"/>
                            <path id="Path_69" data-name="Path 69" d="M611.158,614.316a13.263,13.263,0,1,1-15.916-13,13.4,13.4,0,0,1,5.305,0,13.263,13.263,0,0,1,10.611,13Z" transform="translate(-626 -490.947)" fill="#0372f3"/>
                            <path id="Path_70" data-name="Path 70" d="M600.547,601.318v26a13.4,13.4,0,0,1-5.305,0v-26a13.4,13.4,0,0,1,5.305,0Z" transform="translate(-626 -490.947)" opacity="0.2"/>
                            <path id="Path_71" data-name="Path 71" d="M611.158,690.316a13.264,13.264,0,1,1-10.611-13A13.264,13.264,0,0,1,611.158,690.316Z" transform="translate(-626 -490.947)" fill="#0372f3"/>
                            <path id="Path_72" data-name="Path 72" d="M600.547,677.318v26a13.394,13.394,0,0,1-5.305,0v-26a13.4,13.4,0,0,1,5.305,0Z" transform="translate(-626 -490.947)" opacity="0.2"/>
                            <path id="Path_73" data-name="Path 73" d="M644.158,727.316a13.263,13.263,0,1,1-15.916-13,13.4,13.4,0,0,1,5.305,0A13.263,13.263,0,0,1,644.158,727.316Z" transform="translate(-626 -490.947)" fill="#0372f3"/>
                            <path id="Path_74" data-name="Path 74" d="M633.547,714.318v26a13.394,13.394,0,0,1-5.305,0v-26a13.4,13.4,0,0,1,5.305,0Z" transform="translate(-626 -490.947)" opacity="0.2"/>
                            <path id="Path_75" data-name="Path 75" d="M673.31,659.24a13.263,13.263,0,1,1-16.722-1.381,13.263,13.263,0,0,1,16.722,1.381Z" transform="translate(-626 -490.947)" fill="#0372f3"/>
                            <path id="Path_76" data-name="Path 76" d="M656.588,657.86,675.3,675.9a13.393,13.393,0,0,1-3.682,3.82l-18.717-18.04A13.4,13.4,0,0,1,656.588,657.86Z" transform="translate(-626 -490.947)" opacity="0.2"/>
                            <path id="Path_77" data-name="Path 77" d="M677.31,688.24a13.263,13.263,0,1,1-20.4,2.439,13.4,13.4,0,0,1,3.682-3.82,13.263,13.263,0,0,1,16.722,1.381Z" transform="translate(-626 -490.947)" fill="#0372f3"/>
                            <path id="Path_78" data-name="Path 78" d="M660.588,686.86,679.3,704.9a13.394,13.394,0,0,1-3.682,3.82l-18.717-18.04A13.4,13.4,0,0,1,660.588,686.86Z" transform="translate(-626 -490.947)" opacity="0.2"/>
                            <path id="Path_79" data-name="Path 79" d="M558.31,695.24a13.263,13.263,0,1,1-20.4,2.439,13.263,13.263,0,0,1,20.4-2.439Z" transform="translate(-626 -490.947)" fill="#0372f3"/>
                            <path id="Path_80" data-name="Path 80" d="M541.588,693.86,560.3,711.9a13.393,13.393,0,0,1-3.682,3.82l-18.717-18.04a13.4,13.4,0,0,1,3.682-3.82Z" transform="translate(-626 -490.947)" opacity="0.2"/>
                            <rect id="Rectangle_8" data-name="Rectangle 8" width="5" height="37" transform="translate(-115.5 -33.894)" opacity="0.2"/>
                            <rect id="Rectangle_9" data-name="Rectangle 9" width="5" height="37" transform="translate(-86.5 -33.894)" opacity="0.2"/>
                            <rect id="Rectangle_10" data-name="Rectangle 10" width="5" height="37" transform="translate(-57.5 -33.894)" opacity="0.2"/>
                            <rect id="Rectangle_11" data-name="Rectangle 11" width="5" height="37" transform="translate(-28.5 -33.894)" opacity="0.2"/>
                            <rect id="Rectangle_12" data-name="Rectangle 12" width="5" height="37" transform="translate(0.5 -33.894)" opacity="0.2"/>
                            <rect id="Rectangle_13" data-name="Rectangle 13" width="5" height="37" transform="translate(29.5 -33.894)" opacity="0.2"/>
                            <rect id="Rectangle_14" data-name="Rectangle 14" width="5" height="37" transform="translate(58.5 -33.894)" opacity="0.2"/>
                            </g>
                            <path id="covid-19" d="M164.689,67.293a5.312,5.312,0,0,0-5.313,5.314v5.311H144.757a59.855,59.855,0,0,0-12.5-30.153L142.6,37.418l4.166,3.526a5.312,5.312,0,1,0,7.513-7.512L136.571,15.723a5.312,5.312,0,1,0-7.513,7.512l3.527,4.164L122.237,37.746a59.862,59.862,0,0,0-30.153-12.5V10.626H97.4A5.313,5.313,0,1,0,97.4,0H72.605a5.313,5.313,0,1,0,0,10.625h5.313V25.245a59.862,59.862,0,0,0-30.153,12.5L37.418,27.4l3.526-4.165a5.312,5.312,0,1,0-7.513-7.512l-17.3,17.709a5.312,5.312,0,1,0,7.513,7.512L27.4,37.418,37.747,47.765a59.855,59.855,0,0,0-12.5,30.153H10.626V72.605A5.313,5.313,0,1,0,0,72.605V97.4a5.313,5.313,0,0,0,10.625,0V92.085H25.245a59.855,59.855,0,0,0,12.5,30.153L27.4,132.584l-4.166-3.526a5.312,5.312,0,1,0-7.513,7.512L33.43,154.279a5.313,5.313,0,1,0,7.514-7.512L37.418,142.6l10.346-10.347a59.862,59.862,0,0,0,30.154,12.5v14.62H72.605a5.313,5.313,0,1,0,0,10.625H97.4a5.313,5.313,0,1,0,0-10.625H92.085v-14.62a59.861,59.861,0,0,0,30.153-12.5L132.584,142.6l-3.527,4.164a5.312,5.312,0,1,0,7.513,7.512l17.708-17.708a5.312,5.312,0,1,0-7.512-7.513l-4.164,3.526-10.346-10.347a59.854,59.854,0,0,0,12.5-30.153h14.619V97.4A5.313,5.313,0,1,0,170,97.4V72.605a5.312,5.312,0,0,0-5.314-5.313ZM65.522,70.836a12.4,12.4,0,1,1,12.4-12.4,12.4,12.4,0,0,1-12.4,12.4Zm40.729,46.042a7.084,7.084,0,1,1,7.084-7.084A7.084,7.084,0,0,1,106.25,116.878Z" transform="translate(-105 -244.002)" fill="#de4141"/>
                        </g>
                        </svg>
                </div>
                
            </div>
           
        </div>
    )
}