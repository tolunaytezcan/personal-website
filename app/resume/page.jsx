import PageTitle from '@/components/common/PageTitle';
import Experience from '@/components/resume/Experience';
import Education from '@/components/resume/Education';
import Skills from '@/components/resume/Skills';
import AnimatedContainer from '@/components/common/AnimatedContainer';

const Resume = () => {
  return (
    <div className="relative h-screen w-full flex justify-center overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center">
        <AnimatedContainer>
          <div className="w-full max-w-[1440px] mx-auto">
            <PageTitle title="Resume" subtitle="My Professional Background" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-16">
                <Experience />
                <Education />
              </div>
              
              {/* Right Column */}
              <div className="lg:col-span-1">
                <Skills />
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default Resume;
