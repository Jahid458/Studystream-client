
import Banner from '../Banner/Banner';
import EducationJourney from '../EducationJourney';
import FAQSection from '../FAQSection';
import ResourceLibrary from '../ResourceLibrary';

const Home = () => {
    return (
        <div className='mt-14'>
            <Banner></Banner>
            <EducationJourney></EducationJourney>
            <ResourceLibrary></ResourceLibrary>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;