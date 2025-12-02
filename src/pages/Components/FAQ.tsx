import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="w-full py-24 px-6 bg-white text-black max-w-none">

      {/* Heading */}
      <div className="text-center mb-14 w-full">
        <h2 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-700 mt-4 text-lg">
          Everything you need to know before getting started.
        </p>
      </div>

      {/* FAQ List */}
      <div className="w-full">
        <Accordion type="single" collapsible className="space-y-4 w-full">

          {/* 1 */}
          <AccordionItem
            value="item-1"
            className="border border-gray-300 rounded-xl bg-gray-100 w-full"
          >
            <AccordionTrigger className="px-6 py-4 text-left hover:text-purple-600">
              1. What is ORN-AI?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700">
              ORN-AI is a boutique e-learning and career development platform that provides cross-technology training, personalized CV writing, interview preparation, and ethical placement services. We focus on hands-on learning and long-term career growth.
            </AccordionContent>
          </AccordionItem>

          {/* 2 */}
          <AccordionItem
            value="item-2"
            className="border border-gray-300 rounded-xl bg-gray-100 w-full"
          >
            <AccordionTrigger className="px-6 py-4 text-left hover:text-purple-600">
              2. Who can benefit from ORN-AI’s programs?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700">
              <ul className="list-disc ml-6 space-y-1">
                <li>Students and fresh graduates</li>
                <li>Working professionals seeking upskilling</li>
                <li>Career changers</li>
                <li>Expats preparing for international job markets</li>
                <li>Candidates from underserved regions</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* 3 */}
          <AccordionItem
            value="item-3"
            className="border border-gray-300 rounded-xl bg-gray-100 w-full"
          >
            <AccordionTrigger className="px-6 py-4 text-left hover:text-purple-600">
              3. What makes ORN-AI different from other platforms?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700">
              ORN-AI offers a holistic career-building approach including hands-on training, AI-powered content, ethical placements, personalized CV writing, and continuous career support.
            </AccordionContent>
          </AccordionItem>

          {/* 4 */}
          <AccordionItem
            value="item-4"
            className="border border-gray-300 rounded-xl bg-gray-100 w-full"
          >
            <AccordionTrigger className="px-6 py-4 text-left hover:text-purple-600">
              4. Does ORN-AI provide hands-on training?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700">
              Yes. Our courses emphasize hands-on practice, real-world labs, case studies, and project-based learning.
            </AccordionContent>
          </AccordionItem>

          {/* 5 */}
          <AccordionItem
            value="item-5"
            className="border border-gray-300 rounded-xl bg-gray-100 w-full"
          >
            <AccordionTrigger className="px-6 py-4 text-left hover:text-purple-600">
              5. Do you offer a job guarantee?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700">
              Yes, we offer 100% job-guaranteed programs (merit-based). Eligible learners receive ethical, transparent placement support.
            </AccordionContent>
          </AccordionItem>

          {/* 6 */}
          <AccordionItem
            value="item-6"
            className="border border-gray-300 rounded-xl bg-gray-100 w-full"
          >
            <AccordionTrigger className="px-6 py-4 text-left hover:text-purple-600">
              6. How do your placement services work?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700">
              We follow an ethical, transparent, contract-based placement process. We prepare learners through CV enhancements, mock interviews, skill assessments, and job-specific guidance.
            </AccordionContent>
          </AccordionItem>

          {/* 7 */}
          <AccordionItem
            value="item-7"
            className="border border-gray-300 rounded-xl bg-gray-100 w-full"
          >
            <AccordionTrigger className="px-6 py-4 text-left hover:text-purple-600">
              7. Is ORN-AI suitable for international job seekers?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700 space-y-1">
              <p>Yes. We support global candidates through:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Region-specific CVs</li>
                <li>Local interview preparation</li>
                <li>Market-relevant upskilling</li>
                <li>Tailored career mentoring</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* 8 */}
          <AccordionItem
            value="item-8"
            className="border border-gray-300 rounded-xl bg-gray-100 w-full"
          >
            <AccordionTrigger className="px-6 py-4 text-left hover:text-purple-600">
              8. What technologies and skills does ORN-AI train in?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700 space-y-1">
              <ul className="list-disc ml-6 space-y-1">
                <li>Cyber Security</li>
                <li>Linux & Cloud Computing</li>
                <li>Kubernetes & DevOps</li>
                <li>Red Hat Technologies</li>
                <li>Business Management</li>
                <li>Soft Skills & Corporate Readiness</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* 9 */}
          <AccordionItem
            value="item-9"
            className="border border-gray-300 rounded-xl bg-gray-100 w-full"
          >
            <AccordionTrigger className="px-6 py-4 text-left hover:text-purple-600">
              9. How does ORN-AI support learners after placement?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700 space-y-1">
              <ul className="list-disc ml-6 space-y-1">
                <li>Continuous mentoring</li>
                <li>Upskilling guidance</li>
                <li>Updated learning material</li>
                <li>Career transition help</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* 10 */}
          <AccordionItem
            value="item-10"
            className="border border-gray-300 rounded-xl bg-gray-100 w-full"
          >
            <AccordionTrigger className="px-6 py-4 text-left hover:text-purple-600">
              10. Are the CV writing & interview preparation services personalized?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700">
              Yes. We create customized CVs based on job roles and trends, along with mock interviews, Q&A guides, and expert feedback.
            </AccordionContent>
          </AccordionItem>

          {/* 11 */}
          <AccordionItem
            value="item-11"
            className="border border-gray-300 rounded-xl bg-gray-100 w-full"
          >
            <AccordionTrigger className="px-6 py-4 text-left hover:text-purple-600">
              11. Do you assist students from rural or underserved areas?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700">
              Yes. We provide accessible training, ethical placement guidance, and high-quality learning opportunities for underserved communities.
            </AccordionContent>
          </AccordionItem>

          {/* 12 */}
          <AccordionItem
            value="item-12"
            className="border border-gray-300 rounded-xl bg-gray-100 w-full"
          >
            <AccordionTrigger className="px-6 py-4 text-left hover:text-purple-600">
              12. How do I enroll in an ORN-AI program?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700">
              You can enroll through our “Join Us” or “Get Started” section. Our team guides you through orientation and onboarding.
            </AccordionContent>
          </AccordionItem>

          {/* 13 */}
          <AccordionItem
            value="item-13"
            className="border border-gray-300 rounded-xl bg-gray-100 w-full"
          >
            <AccordionTrigger className="px-6 py-4 text-left hover:text-purple-600">
              13. Are the programs beginner-friendly?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700">
              Yes. Even beginners can follow our step-by-step guidance, real labs, and personalized support.
            </AccordionContent>
          </AccordionItem>

          {/* 14 */}
          <AccordionItem
            value="item-14"
            className="border border-gray-300 rounded-xl bg-gray-100 w-full"
          >
            <AccordionTrigger className="px-6 py-4 text-left hover:text-purple-600">
              14. What should I do if I need support during the course?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700 space-y-1">
              <ul className="list-disc ml-6 space-y-1">
                <li>Live chat</li>
                <li>Email support</li>
                <li>Learner dashboard</li>
                <li>Scheduled guidance sessions</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* 15 */}
          <AccordionItem
            value="item-15"
            className="border border-gray-300 rounded-xl bg-gray-100 w-full"
          >
            <AccordionTrigger className="px-6 py-4 text-left hover:text-purple-600">
              15. How does ORN-AI ensure training quality?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700">
              We combine expert-led training, AI-powered content, practical labs, and learner feedback to maintain high-quality standards.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </section>
  );
}
