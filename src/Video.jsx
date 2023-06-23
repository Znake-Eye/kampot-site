import { useState } from "react"


const Video = () => {

    const [video, setVideo] = useState([
        {
            id:1,
            src : "https://www.youtube.com/embed/GgcDLvBrNtE",
            title :  "YouTube video player",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ,
        },
        {
            id:2,
            src : "https://www.youtube.com/embed/VKDg94IXSPs",
            title :  "YouTube video player",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ,
        }

    ])


    return (
        <article className="container" id="1">
            <h1>វីដេអូ</h1>

            <div className="video-container" >
            {
                video.map(item => (
                    
                        <div className="each-video" key={item.id} 
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom">
                            <iframe width="560" height="315" 
                                src={item.src}
                                title={item.title} frameBorder="0" 
                                allow={item.allow}
                                allowFullScreen>
                            </iframe>

                        </div>
                    
                ))
            }
            </div>


            {/* <div className="video-container">
                <div className="each-video"  
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                >
                    <iframe width="560" height="315" 
                        src={video.src}
                        title={video.title} frameBorder="0" 
                        allow={video.allow}
                        allowFullScreen></iframe>
                </div>
                <div className="each-video" 
                 data-aos="fade-up"
                 data-aos-anchor-placement="center-bottom"
                >
                    <iframe width="560" height="315" 
                        src={video.src}
                        title={video.title} frameBorder="0" 
                        allow={video.allow}
                        allowFullScreen></iframe>
                </div>
            </div> */}
            

         
            <div>
         
            </div>
        </article>
    )
}
export default Video