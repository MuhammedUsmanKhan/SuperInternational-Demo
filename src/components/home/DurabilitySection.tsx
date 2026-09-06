import React from 'react';
import { motion } from 'motion/react';

interface DurabilityItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const DURABILITY_ITEMS: DurabilityItem[] = [
  {
    id: 1,
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/quality1.png',
    title: 'Plastic raw material',
    description:
      'There are many types of plastics and many raw materials possible. The vast majority come from petroleum/crude oil ultimately. Many are made from crude oil and NGLs -natural Gas Liquids and other hydrocarbons.Other materials such as chlorine to make PVC, are obtained from electrolysis of seawater. Cellulosic polymers are made wood and plant materials. Quite a few rubbers are tapped from the rubber tree',
  },
  {
    id: 2,
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/quality2.png',
    title: 'Prompt delivery',
    description:
      'Plastics can meet virtually any polyethylene packaging need with our extensive selection of products and sizes and broad range of specialty items, custom packaging and printing options. Our expert staff personally analyzes your requirements and can provide a customized solution with our wide range of of caps and bottles packaging.',
  },
  {
    id: 3,
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/quality3.png',
    title: 'Modern technology',
    description:
      'Modern technology in Pakistan is a growing and rising industry that has a large potential. A matter relating to the plastic The IT industry is regarded as a successful sector of Pakistan economically, even in financial crisis. The World Economic Forum, assessing the development of modern and Communication Technology in the country ranked Pakistan.',
  },
  {
    id: 4,
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/quality4.png',
    title: 'Standard packaging',
    description:
      'Plastics standards are instrumental in specifying, testing, and assessing the physical, mechanical, and chemical properties of a wide variety of materials and products that are made of plastic and its polymeric derivatives. During processing, these synthetic or semisynthetic organic solids have a very malleable characteristic that allows them to be molded into an assortment of shapes, making them very suitable for the manufacture.',
  },
  {
    id: 5,
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/quality5.png',
    title: 'Availibility of perfect modulings',
    description:
      'The products manufactured are packed in most attractive boxes and cartons of high quality, which ensures safety, beauty and easy storability. Super International Pvt. Ltd. offers Plastic Mouldings. We know that detail can make the difference between looking good and looking perfect. As we are perfectionists, we trade only in the best quality products.',
  },
  {
    id: 6,
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/quality6.png',
    title: 'Perfect costing',
    description:
      'In the automotive industry and many other technology sectors in addition to innovation and quality product costs are decisive in determining how successful a company will be with its products in today\'s competitive global market – and in the future. Along the entire value chain, reliable costing processes, detailed knowledge of costs and maximum cost transparency are indispensable in achieving excellent cost management for products and tools.',
  },
];

export default function DurabilitySection() {
  return (
    <section id="durability-section" className="durability-sec">
      <div className="container-fluid w-full px-4 sm:px-8 lg:px-12 xl:px-14">
        <div className="title text-center max-w-[1200px] mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black text-[#222222] tracking-tight uppercase leading-[1.22] font-sans">
            SUPER INTERNATIONAL DURABILITY AND QUALITY IS APPRECIATED BY LEADING EXPORTERS OF PAKISTAN WHO NOW PREFER TO USE
          </h2>
          <p className="text-sm text-gray-500 mt-2"></p>
        </div>

        <div className="durability-row">
          {DURABILITY_ITEMS.map((item, idx) => {
            const isEven = (idx + 1) % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
                className="durability-col"
              >
                <div
                  className={`durability-box ${isEven ? 'durability-even' : ''} flex flex-col justify-start`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLElement).style.opacity = '0.8';
                    }}
                  />
                  <div className="durability-content">
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
