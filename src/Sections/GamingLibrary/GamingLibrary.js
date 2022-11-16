import './GamingLibrary.css';
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import gaminLibraryDataItems from "../../Data/gaminLibraryData";
import GamingLibraryCard from "../../components/GamingLibraryCard/GamingLibraryCard";

const GamingLibrary = () => {
    const cards = gaminLibraryDataItems.map(card => {
        return <GamingLibraryCard key={card.id} image={card.image} title={card.title} category={card.category}
                                  rate={card.rate}
                                  download={card.download} hours_played={card.hours_played}
                                  date_added={card.date_added}/>

    })
    return (
        <>
            <SectionWrapper>
                <SectionHeader>Gaming Library</SectionHeader>
                <div className="gaming-library-cards">
                    {cards}
                </div>
            </SectionWrapper>
        </>
    );
};

export default GamingLibrary;
