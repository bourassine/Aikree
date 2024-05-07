import React from 'react';
import Slider from '../../components/slider/Slider';
import Map from '../../components/map/Map';
import './SinglePage.scss';
import { singlePostData, userData } from '../../lib/dummydata';

function singlePage() {
    return (  
        <div className="singlePage">
            <div className='details'>
                <div className='wrapper'>
                    <Slider images={singlePostData.images} />
                    <div className='info'>
                        <div className='top'>
                            <div className='post'>
                                <h1>{singlePostData.title}</h1>
                                <div className='address'>
                                    <img src='/pin.png' alt='' />
                                    <span>{singlePostData.address}</span>
                                </div>
                                <div className='price'>
                                    $ {singlePostData.price}
                                </div>
                                
                            </div>
                            <div className='user'>
                                    <img src={userData.img} alt='' />
                                    <span>{userData.name}</span>
                            </div>
                        </div>
                        <div className='bottom'>
                            {singlePostData.description}
                        </div>
                    </div>
                </div>
            </div>
            <div className='features'>
                <div className='wrapper'>
                    <p className='title'>General</p>
                    <div className='listVertical'>
                        <div className='feature'>
                            <img src='/utility.png' alt=''/>
                            <div className='featureText'>
                            <p>Le propriétaire est responsable</p>
                           {/*  <span>Services publics</span>
                           {post.postDetail.utilities === "owner" ? (
                                <p>Le propriétaire est responsable</p>
                            ) : (
                                <p>Le locataire est responsable</p>
                            )} */}
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/pet.png" alt="" />
                            <div className="featureText">
                            <p>Animaux autorisés</p>
                               {/*  <span>Politique concernant les animaux domestiques</span>
                                {post.postDetail.pet === "allowed" ? (
                                    <p>Animaux autorisés</p>
                                ) : (
                                    <p>Animaux non autorisés</p>
                                )} */}
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/fee.png" alt="" />
                            <span>Politique de revenu</span>
                            {/* <div className="featureText">
                                <span>Politique de revenu</span>
                                <p>{post.postDetail.income}</p>
                            </div> */}
                        </div>
                    </div>
                    <p className='title'>Superficie</p>
                    <div className="sizes">
                        <div className="size">
                        <img src="/size.png" alt="" />
                        <span>80 m²</span>
                        </div>
                        <div className="size">
                        <img src="/bed.png" alt="" />
                        <span>2 Lits</span>
                        </div>
                        <div className="size">
                        <img src="/bath.png" alt="" />
                        <span>1 toilette</span>
                        </div>
                    </div>

                    

                    <p className='title'>Lieux à proximité</p>
                    <div className="listHorizontal">
                    <div className="feature">
                        <img src="/school.png" alt="" />
                        <div className="featureText">
                        <span>École</span>
                        <p> 1 km de distance
                            {/* {post.postDetail.school > 999
                            ? post.postDetail.school / 1000 + "km"
                            : post.postDetail.school + "m"}{" "}
                            de distance */}
                        </p>
                        </div>
                    </div>
                    <div className="feature">
                        <img src="/pet.png" alt="" />
                        <div className="featureText">
                        <span>Arrêt de bus</span>
                        <p>{/* {post.postDetail.bus */}45 m de distance</p>
                        </div>
                    </div>
                    <div className="feature">
                        <img src="/fee.png" alt="" />
                        <div className="featureText">
                        <span>Restaurant</span>
                        <p>{/* {post.postDetail.restaurant} */}20 m de distance</p>
                        </div>
                    </div>
                    </div>
                    <p className='title'>Emplacement</p>
                    <div className='mapContainer'>
                        <Map items={[singlePostData]}/>
                    </div>
                    <div className='buttons'>
                        <button>
                            <img src='/chat.png' alt='' />
                            Envoyer un Message
                        </button>
                        <button>
                            <img src='/save.png' alt='' />
                            Enregistrer 
                        </button>
                    </div>
                   
                   
                </div>
                
            </div>
        </div>
        
    )
}

export default singlePage;