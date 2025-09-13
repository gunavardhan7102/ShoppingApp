import React from 'react'

const Womancollection = (props) => {
    const{title,image1,image2,image3,image4,image5,image6} = props.ladiesFashion
  return (
     <div className='collectionSection'>
      <h2>{title}</h2>
       <div className='bannersection'>
      <div className='bannerbox'>
      <img src='https://images.all-free-download.com/images/graphiclarge/shopping_banner_design_with_lady_with_shopping_bags_6825851.jpg' alt='Women Shopping'/>
      </div></div>
      <div className='menImages'>
<img src={image1} alt={title}/>
<img src={image2} alt={title}/>
<img src={image3} alt={title}/>
<img src={image4} alt={title}/>
<img src={image5} alt={title}/>
<img src={image6} alt={title}/>
      </div>
    </div>
  )
}

export default Womancollection