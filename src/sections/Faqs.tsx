'use client';
import Faq from "@/components/Faq";
import Tag from "@/components/Tag";
import { useState } from "react";

const faqs = [
  {
    question: "How is Layers different from other design tools?",
    answer:
      "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
  },
  {
    question: "Is there a learning curve?",
    answer:
      "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
  },
  {
    question: "How do you handle version control?",
    answer:
      "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
  },
  {
    question: "Can I work offline?",
    answer:
      "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
  },
  {
    question: "How does Layers handle collaboration?",
    answer:
      "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
  },
];

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  return (
    <section id="faqs" className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>FAQs</Tag>
        </div>
        <h2 className="text-6xl text-center font-medium mt-6 max-w-xl mx-auto">
          Questions? We&apos;ve got{" "}
          <span className="text-lime-400">answers</span>
        </h2>
        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
          {faqs.map((faq, index) => (
            <Faq key={index} activeIndex={activeIndex} setActiveIndex={setActiveIndex} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
