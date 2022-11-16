import './MostPopular.css'
import Card from "../../components/Card/Card";

import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import mostPopularDataItems from "../../Data/mostPopularData";

const MostPopular = (props) => {

    const cards = mostPopularDataItems.map(card => {
        return <Card key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate}
                     download={card.download}/>
    })
    return (
        <>
            <SectionWrapper>
                <SectionHeader>Most Popular</SectionHeader>
                <div className="most-popular-items">
                    {cards}
                </div>
            </SectionWrapper>
        </>
    );
}

export default MostPopular;