import { motion } from 'framer-motion';

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <p>
          Open source chatbot template built with Next.js and the AI SDK by Vercel.
        </p>
      </div>
    </motion.div>
  );
};
