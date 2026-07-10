import { m } from 'motion/react';
import { CheckCircle } from 'lucide-react';

interface Review {
  id: number;
  author_name: string;
  rating: number;
  text: string;
}

const reviewsData: Review[] = [
  {
    id: 1,
    author_name: "Rahul M",
    rating: 5,
    text: "Mud Cups is a fantastic spot to hang out! The cafe has a cozy and welcoming vibe, making it perfect for catching up with friends or just relaxing. The ambiance is charming, and the food is absolutely delicious. I highly recommend trying their signature Mud Cup cold coffee—it's incredibly refreshing and unique. Plus, the service is prompt and friendly. Definitely a must-visit in Ananth Nagar!"
  },
  {
    id: 3,
    author_name: "Gaurav Srivastava",
    rating: 5,
    text: "I recently visited Mudcups and had an amazing experience. First of all, the vibe and ambiance of the place were so peaceful and aesthetic. Loved the background music, and overall seating arrangements were great. Highly recommend."
  },
  {
    id: 4,
    author_name: "Sayak Sinha",
    rating: 5,
    text: "Ordered a Corn and Cheese Pizza and it was loaded with cheese and tasted amazing. The French fries were great, and the tea served in a clay cup made the experience even better. Highly recommended."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.6, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  }
};

const EditorialPullQuote = ({ review }: { review: Review }) => {
  return (
    <div className="relative flex flex-col h-full pl-6 md:pl-12 pt-8">
      <div className="absolute top-[-20px] left-[-10px] md:left-[-20px] text-[140px] leading-none text-[var(--color-border-custom)] opacity-[0.4] font-serif select-none pointer-events-none">
        ❝
      </div>
      
      <div className="relative z-10 flex-grow mb-12">
        <p className="text-[1.35rem] md:text-[1.5rem] text-[var(--color-text-primary)] font-serif font-normal leading-[1.65] md:leading-[1.75] mb-8">
          {review.text}
        </p>
      </div>
      
      <div className="mt-auto flex items-center">
        <div>
          <h3 className="text-[11px] font-sans font-bold text-[var(--color-text-primary)] tracking-[0.2em] uppercase mb-2">
            {review.author_name}
          </h3>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-3.5 h-3.5 text-[var(--color-text-muted)]" strokeWidth={1.5} />
            <span className="text-[10px] text-[var(--color-text-secondary)] font-sans font-medium tracking-widest uppercase">
              Verified Guest
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-editorial bg-[var(--color-bg-primary)]">
      <div className="max-w-[90rem] mx-auto relative z-10">
        <m.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-left max-w-4xl mb-24 md:mb-32 space-y-8 pl-6 md:pl-12"
        >
          <span className="label-editorial">
            Community
          </span>
          <h2 className="text-display-3">
            Words from our guests.
          </h2>
          <div className="divider-hairline w-24 my-8" />
          <p className="chef-note text-xl">
            Every visit is a chance to pause, connect, and savor the moment. Here are some of the stories shared with us.
          </p>
        </m.div>

        <m.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-16"
        >
          {reviewsData.map((review) => (
            <m.div variants={itemVariants} key={review.id} className="h-full">
              <EditorialPullQuote review={review} />
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
