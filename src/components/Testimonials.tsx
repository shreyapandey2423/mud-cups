import { useState } from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface AdditionalRating {
  label: string;
  icon: string;
  rating: number;
}

interface Review {
  id: number;
  author_name: string;
  rating: number;
  text: string;
  additional_ratings?: AdditionalRating[];
}

const reviewsData: Review[] = [
  {
    id: 1,
    author_name: "Asim Anand",
    rating: 5,
    text: "Very good snacks options, good for evening outing. The hot chocolate here is one of the best we ever had. Apart from that, French fries, crispy baby corn and potato wedges are some of the go-to items. A great place for an informal get-together with friends."
  },
  {
    id: 2,
    author_name: "Vaishnavi Pednekar",
    rating: 5,
    text: "We live nearby and often visit for the French fries. Their loaded fries are crispy and full of flavour. The hot chocolate is absolutely amazing and easily one of the best. A wonderful place to spend a relaxing evening with a beautiful open ambience."
  },
  {
    id: 3,
    author_name: "Vishnuraj M",
    rating: 4,
    text: "Newly opened Mud Cups café in Ananth Nagar. It has spacious seating on both the ground floor and rooftop. The lighting creates a wonderful atmosphere. The food is good, but the hot chocolate is definitely a must-try."
  },
  {
    id: 4,
    author_name: "Soujanya Hatture",
    rating: 5,
    text: "Amazing place with delicious food. The hygiene is very well maintained. Definitely worth visiting.",
    additional_ratings: [
      { label: "Food", icon: "🍽", rating: 5 },
      { label: "Service", icon: "👨‍🍳", rating: 5 },
      { label: "Atmosphere", icon: "✨", rating: 5 }
    ]
  },
  {
    id: 5,
    author_name: "Vivek Jacob",
    rating: 5,
    text: "Tried the Double Cheese Pizza and it was loaded with cheese and tasted amazing. The French fries were great, and the tea served in a clay cup made the experience even better. Highly recommended.",
    additional_ratings: [
      { label: "Food", icon: "🍽", rating: 5 },
      { label: "Service", icon: "👨‍🍳", rating: 5 },
      { label: "Atmosphere", icon: "✨", rating: 5 }
    ]
  },
  {
    id: 6,
    author_name: "Abhishek Anand",
    rating: 5,
    text: "Without a doubt, this place serves one of the best hot chocolates. It's thick, creamy and rich in flavour. The Peri Peri Fries paired with the hot chocolate are highly recommended. The café offers many delicious snacks at very reasonable prices considering the quality. Parking can be limited due to traffic near Ananth Nagar, so visiting on a two-wheeler is more convenient. Overall, a fantastic café experience."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

const ReviewCard = ({ review }: { review: Review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongText = review.text.length > 150;

  const renderStars = (rating: number, size: 'normal' | 'small' = 'normal') => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`${size === 'normal' ? 'w-[14px] h-[14px]' : 'w-2.5 h-2.5'} ${
          i < rating ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-gray-200 fill-gray-200'
        }`}
      />
    ));
  };

  return (
    <div
      className="bg-[#FFFDF9] border border-[#D4C4B4]/40 rounded-[24px] p-[32px] shadow-[0_12px_32px_-12px_rgba(45,36,31,0.06)] transition-all duration-[400ms] ease-[0.22,1,0.36,1] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-16px_rgba(45,36,31,0.12)] hover:border-[#8B6B4D]/30 flex flex-col h-full ring-1 ring-white/60"
    >
      {/* Top of Card */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-[16px] font-semibold text-[#2D241F] leading-tight mb-1 tracking-tight">
            {review.author_name}
          </h3>
          <div className="flex items-center space-x-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-[#8B6B4D]" />
            <span className="text-[11px] text-[#6A5A4D] font-medium tracking-widest uppercase">
              Verified Guest
            </span>
          </div>
        </div>
        <div className="flex space-x-[3px] pt-1">
          {renderStars(review.rating)}
        </div>
      </div>

      {/* Review Content */}
      <div className="relative flex-grow flex flex-col">
        <span className="absolute -top-4 -left-3 text-[56px] leading-none text-[#8B6B4D] opacity-[0.08] font-serif select-none pointer-events-none">
          ❝
        </span>

        <div className="relative z-10 flex-grow">
          <p className={`text-[15px] text-[#4A3F35] font-normal leading-[1.8] ${!isExpanded && isLongText ? 'line-clamp-5' : ''}`}>
            {review.text}
          </p>

          {isLongText && (
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)} aria-expanded={isExpanded} aria-label={isExpanded ? "Show less of the review" : "Read more of the review"}
              className="mt-3 text-[12px] font-medium text-[#8B6B4D] hover:text-[#2D241F] transition-colors inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-[2px] px-1 -ml-1 uppercase tracking-wider"
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
          )}

          {/* Additional Ratings */}
          {review.additional_ratings && (
            <div className="flex flex-wrap gap-2.5 mt-6">
              {review.additional_ratings.map((rating, i) => (
                <div key={i} className="inline-flex items-center space-x-1.5 bg-[#F7F2EB]/60 px-3 py-1.5 rounded-full border border-[#D4C4B4]/40 backdrop-blur-sm will-change-transform translate-z-0">
                  <span className="text-[11px]">{rating.icon}</span>
                  <span className="text-[11px] font-medium text-[#4A3F35] tracking-wide">{rating.label}</span>
                  <div className="flex space-x-[1px] ml-1.5 opacity-80">
                    {renderStars(rating.rating, 'small')}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Review Footer */}
      <div className="mt-8 pt-5 border-t border-[#D4C4B4]/40 flex items-center space-x-2.5">
        <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <span className="text-[11px] text-[#8B6B4D] font-semibold uppercase tracking-[0.2em]">
          Reviewed on Google
        </span>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-[#F7F2EB] py-24 lg:py-32 relative border-b border-[#DDD2C2]/40 overflow-hidden">
      {/* Subtle Texture overlay & Depth */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("/images/noise.svg")', backgroundSize: '150px' }}></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,253,249,0.5)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-left max-w-3xl mb-20 space-y-6"
        >
          <span className="text-[11px] font-bold font-mono uppercase tracking-[0.25em] text-[#8B6B4D] flex items-center space-x-3 opacity-90">
            <span>WHAT OUR CUSTOMERS SAY</span>
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-[44px] font-semibold text-[#2D241F] tracking-tight leading-[1.12]">
            Loved by Our Guests
          </h2>
          <div className="h-[1px] w-16 bg-[#D4C4B4]/60 my-6" />
          <p className="text-[#6A5A4D] text-lg font-normal leading-[1.8] max-w-xl">
            Real experiences from customers who have visited Mud Cups.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px]"
        >
          {reviewsData.map((review) => (
            <motion.div variants={itemVariants} key={review.id} className="h-full">
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
