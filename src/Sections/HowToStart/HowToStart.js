import './HowToStart.css';
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import service_01 from '../../assets/images/service-01.jpg'
import service_02 from '../../assets/images/service-02.jpg'
import service_03 from '../../assets/images/service-03.jpg'
import {SecondaryButton} from "../../components/Buttons/Buttons";

const HowToStart = () => {
    return (
        <SectionWrapper>
            <SectionHeader>How To Start Live Stream</SectionHeader>
            <div className="row start-stream">
                <div className="col-lg-4">
                    <div className="item">
                        <div className="icon">
                            <img src={service_01} alt="" style={{maxWidth: "60px", borderRadius: "50%"}}/>
                        </div>
                        <h4>Go To Your Profile</h4>
                        <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap
                            v5.2.0 layout.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="item">
                        <div className="icon">
                            <img src={service_02} alt="" style={{maxWidth: "60px", borderRadius: "50%"}}/>
                        </div>
                        <h4>Live Stream Button</h4>
                        <p>If you wish to support us, you can make a small contribution via
                            PayPal to info at templatemo.com</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="item">
                        <div className="icon">
                            <img src={service_03} alt=""
                                 style={{maxWidth: "60px", borderRadius: "50%"}}/>
                        </div>
                        <h4>You Are Live</h4>
                        <p>You are not allowed to redistribute this template's downloadable ZIP file on any other
                            template collection website.</p>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="main-button">
                        <SecondaryButton>Go To Profile</SecondaryButton>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default HowToStart;
