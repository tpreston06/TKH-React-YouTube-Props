import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function YoutubeComponent(props) {
  return(
    <div className='container'>
      <img src={props.thumbnailImg} /> 
      <div className='content'>
        <p>{props.videoTitle}</p>
        <p>{props.videoUploader}</p>
        <p>{props.dateVideoUploaded}</p>
        <p>{props.views}</p>
      </div>
    </div>
  )
}

function App() {
  let sampleData = [
    {
      thumbnailImg: "https://via.placeholder.com/600x400",
      videoTitle: "He did WHAT?!?! (My intial reaction)",
      videoUploader: "MaxTongster",
      dateVideoUploaded: "10-31-2022",
      videoViews: 10
    },
    {
      thumbnailImg: "https://via.placeholder.com/600x400",
      videoTitle: "I bought my best friend a Tesla (EMOTIONAL)",
      videoUploader: "Dave Doughbrick",
      dateVideoUploaded: "11-02-2022",
      videoViews: 300000
    },
    {
      thumbnailImg: "https://via.placeholder.com/600x400",
      videoTitle: "React in 100 seconds",
      videoUploader: "Fireship",
      dateVideoUploaded: "2022-09-08",
      videoviews: 255
    }
  ];

 return(
<div>
{sampleData.map(function(yComponent){
  <YoutubeComponent
  thumbnailImg={yComponent.thumbnailImg}
  videoTitle={yComponent.videoTitle}
  uploader={yComponent.videoUploader}
  videoUploaded={yComponent.dateVideoUploaded}
  views={yComponent.views}
  />
})}

  <YoutubeComponent 
  thumbnailImg="https://via.placeholder.com/600x400" 
  videoTitle="He did WHAT?!?! (My intial reaction)"
  videoUploader="MaxTongster"
  dateVideoUploaded="10-31-2022"
  views="10 views" />
  
  <YoutubeComponent
  thumbnailImg="https://via.placeholder.com/600x400/000000/FFFFFF/?text=placeholderimage"
  videoTitle="Why a cheeseburger?"
  videoUploader="Mark"
  dateVideoUploaded="11/30/2022"
  views="1.4 million views" />
      
  <YoutubeComponent
  thumbnailImg="https://via.placeholder.com/600x400/000000/FFFFFF/?text=placeholderimage"
  videoTitle="Luis's big break"
  videoUploader="Luis"
  dateVideoUploaded="11/30/2022"
  views="3,789 views" />
      
  <YoutubeComponent
  thumbnailImg="https://via.placeholder.com/600x400/000000/FFFFFF/?text=placeholderimage"
  videoTitle="How to make a taco"
  videoUploader="CookingFoods"
  dateVideoUploaded="11/28/2022"
  views="24,876 views" />
</div>
 )
}

export default App
