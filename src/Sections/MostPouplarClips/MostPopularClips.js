import './MostPopularClips.css';
import profile from '../../assets/images/profile.jpg'
import clip_1 from '../../assets/images/clip-01.jpg'
import clip_2 from '../../assets/images/clip-02.jpg'
import clip_3 from '../../assets/images/clip-03.jpg'
import clip_4 from '../../assets/images/clip-04.jpg'
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import PrimaryButton from "../../components/Buttons/Buttons";

const MostPopularClips = () => {
    return (
        <>
            <SectionWrapper>

                <div className="col-lg-12">
                    <div className="main-profile ">
                        <div className="row">
                            <div className="col-lg-4">
                                <img src={profile} alt="" style={{borderRadius: "23px"}}/>
                            </div>
                            <div className="col-lg-4 align-self-center">
                                <div className="main-info header-text">
                                    <span>Offline</span>
                                    <h4>Alan Smithee</h4>
                                    <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                                    <div className="main-border-button">
                                        <a href="#">Start Live Stream</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 align-self-center">
                                <ul>
                                    <li>Games Downloaded <span>3</span></li>
                                    <li>Friends Online <span>16</span></li>
                                    <li>Live Streams <span>None</span></li>
                                    <li>Clips <span>29</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="clips">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <SectionHeader style={{marginTop: "2px"}}>Your Most Popular</SectionHeader>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="item">
                                                <div className="thumb">
                                                    <img src={clip_1} alt="#"
                                                         style={{borderRadius: "23px"}}/>
                                                    <a href="https://www.youtube.com/watch?v=r1b03uKWk_M"
                                                       rel="noreferrer"><i className="fa fa-play"></i></a>
                                                </div>
                                                <div className="down-content">
                                                    <h4>First Clip</h4>
                                                    <span><i className="fa fa-eye"></i> 250</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="item">
                                                <div className="thumb">
                                                    <img src={clip_2} alt=""
                                                         style={{borderRadius: "23px"}}/>
                                                    <a href="#"><i className="fa fa-play"></i></a>
                                                </div>
                                                <div className="down-content">
                                                    <h4>Second Clip</h4>
                                                    <span><i className="fa fa-eye"></i> 183</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="item">
                                                <div className="thumb">
                                                    <img src={clip_3} alt=""
                                                         style={{borderRadius: "23px"}}/>
                                                    <a href="#"><i className="fa fa-play"></i></a>
                                                </div>
                                                <div className="down-content">
                                                    <h4>Third Clip</h4>
                                                    <span><i className="fa fa-eye"></i> 141</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="item">
                                                <div className="thumb">
                                                    <img src={clip_4} alt=""
                                                         style={{borderRadius: "23px"}}/>
                                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                    <a href="#"><i className="fa fa-play"></i></a>
                                                </div>
                                                <div className="down-content">
                                                    <h4>Fourth Clip</h4>
                                                    <span><i className="fa fa-eye"></i> 91</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="main-button">
                                                <PrimaryButton>Load More Clips</PrimaryButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
};

export default MostPopularClips;
