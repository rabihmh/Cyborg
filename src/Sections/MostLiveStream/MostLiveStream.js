import './MostLiveStream.css';
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import avatar_01 from '../../assets/images/avatar-01.jpg';
import avatar_02 from '../../assets/images/avatar-02.jpg';
import avatar_03 from '../../assets/images/avatar-04.jpg';
import avatar_04 from '../../assets/images/avatar-04.jpg';
import stream_01 from '../../assets/images/stream-01.jpg';
import stream_02 from '../../assets/images/stream-02.jpg';
import stream_03 from '../../assets/images/stream-03.jpg';
import stream_04 from '../../assets/images/stream-04.jpg';
import PrimaryButton from "../../components/Buttons/Buttons";

const MostLiveStream = () => {
    return (
        <SectionWrapper>
            <SectionHeader>Most Popular Live Stream</SectionHeader>
            <div className="row live-stream">
                <div className="col-lg-3 col-sm-6">
                    <div className="item">
                        <div className="thumb">
                            <img src={stream_01} alt=""/>
                            <div className="hover-effect">
                                <div className="content">
                                    <div className="live">
                                        <a href="#">Live</a>
                                    </div>
                                    <ul>
                                        <li><a href="#"><i className="fa fa-eye"></i> 1.2K</a></li>
                                        <li><a href="#"><i className="fa fa-gamepad"></i> CS-GO</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="down-content">
                            <div className="avatar">
                                <img src={avatar_01} alt=""
                                     style={{maxWidth:"46px",borderRadius:"50%",float:"left"}} />
                            </div>
                            <span><i className="fa fa-check"></i> KenganC</span>
                            <h4>Just Talking With Fans</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="item">
                        <div className="thumb">
                            <img src={stream_02} alt=""/>
                            <div className="hover-effect">
                                <div className="content">
                                    <div className="live">
                                        <a href="#">Live</a>
                                    </div>
                                    <ul>
                                        <li><a href="#"><i className="fa fa-eye"></i> 1.2K</a></li>
                                        <li><a href="#"><i className="fa fa-gamepad"></i> CS-GO</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="down-content">
                            <div className="avatar">
                                <img src={avatar_02} alt=""
                                     style={{maxWidth:"46px",borderRadius:"50%",float:"left"}}/>
                            </div>
                            <span><i className="fa fa-check"></i> LunaMa</span>
                            <h4>CS-GO 36 Hours Live Stream</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="item">
                        <div className="thumb">
                            <img src={stream_03} alt=""/>
                            <div className="hover-effect">
                                <div className="content">
                                    <div className="live">
                                        <a href="#">Live</a>
                                    </div>
                                    <ul>
                                        <li><a href="#"><i className="fa fa-eye"></i> 1.2K</a></li>
                                        <li><a href="#"><i className="fa fa-gamepad"></i> CS-GO</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="down-content">
                            <div className="avatar">
                                <img src={avatar_03} alt=""
                                     style={{maxWidth:"46px",borderRadius:"50%",float:"left"}}/>
                            </div>
                            <span><i className="fa fa-check"></i> Areluwa</span>
                            <h4>Maybe Nathej Allnight Chillin'</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="item">
                        <div className="thumb">
                            <img src={stream_04} alt=""/>
                            <div className="hover-effect">
                                <div className="content">
                                    <div className="live">
                                        <a href="#">Live</a>
                                    </div>
                                    <ul>
                                        <li><a href="#"><i className="fa fa-eye"></i> 1.2K</a></li>
                                        <li><a href="#"><i className="fa fa-gamepad"></i> CS-GO</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="down-content">
                            <div className="avatar">
                                <img src={avatar_04} alt=""
                                     style={{maxWidth:"46px",borderRadius:"50%",float:"left"}}/>
                            </div>
                            <span><i className="fa fa-check"></i> GangTm</span>
                            <h4>Live Streaming Till Morning</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="main-button">
                        <PrimaryButton>Discover All Streams</PrimaryButton>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default MostLiveStream;
