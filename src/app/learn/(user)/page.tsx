import WhayUs from '@/app/_components/pages/landing/WhayUs';
import HeroSection from '../../_components/pages/landing/HeroSection';
import LastCourses from '../../_components/pages/landing/LastCourses/LastCourses';
import LandingComments from '../../_components/pages/landing/LandingComments/LandingComments';
import InfoSection from '../../_components/pages/landing/InfoSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhayUs />
      <LastCourses />
      <LandingComments />
      <InfoSection />
    </>
  );
}
