import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const faqs = [
  {
    question: "What programs do you offer?",
    answer:
      "We offer a wide range of undergraduate and graduate programs in fields like Engineering, Business, Healthcare, Technology, and the Arts. You can explore all our programs on the dedicated programs page.",
  },
  {
    question: "What are the admission requirements?",
    answer:
      "Admission requirements vary by program. Generally, we require a completed application form, official transcripts, and letters of recommendation. Specific programs may have additional requirements like portfolios or entrance exams.",
  },
  {
    question: "Is financial aid available?",
    answer:
      "Yes, we are committed to making education accessible. We offer a variety of scholarships, grants, and work-study programs. We encourage all prospective students to apply for financial aid.",
  },
  {
    question: "Do you offer on-campus housing?",
    answer:
      "Absolutely. We have several modern and comfortable residence halls for our students. Living on campus is a great way to immerse yourself in the college community and have easy access to all facilities.",
  },
  {
    question: "Can I schedule a campus tour?",
    answer:
      "We would love to show you around! We offer guided campus tours on weekdays and have virtual tour options available on our website. Please visit our admissions page to schedule your visit.",
  },
];

export default function FaqAndInquiry() {
  return (
    <section className="py-24 bg-slate-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions? We're here to help. If you don't find your answer
            below, feel free to reach out to us.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 lg:gap-16">
          {/* FAQ Accordion (60% width) */}
          <div className="lg:col-span-3">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-slate-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Inquiry Form (40% width) */}
          <div className="lg:col-span-2 mt-12 lg:mt-0">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Have a Question?
              </h3>
              <p className="text-slate-600 mb-6">
                Fill out the form below and our team will get back to you soon.
              </p>
              <form>
                <div className="space-y-5">
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="name">Full Name</Label>
                    <Input type="text" id="name" placeholder="John Doe" />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      placeholder="I'd like to know more about..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Send Inquiry
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
