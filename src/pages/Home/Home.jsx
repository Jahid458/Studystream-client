
import AssignmentPromo from '../../components/AssignmentPromo';
import AssignmentsBlog from '../../components/AssignmentsBlog';
import Banner from '../Banner/Banner';
import EducationJourney from '../EducationJourney';
import FAQSection from '../FAQSection';
import ResourceLibrary from '../ResourceLibrary';

const Home = () => {
    return (
        <div className='mt-14 mb-10'>
          
            <Banner></Banner>
            <EducationJourney></EducationJourney>
            <AssignmentsBlog></AssignmentsBlog>
            <AssignmentPromo></AssignmentPromo>
            <ResourceLibrary></ResourceLibrary>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;