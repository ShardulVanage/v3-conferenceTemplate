import { motion } from "framer-motion"
export function FeatureCard({ category, title, description }) {
  return (
    <div className="w-auto max-w-[24rem] bg-white shadow-lg rounded-lg overflow-hidden ">
      <div className="p-6">
        <p className="text-sm font-medium text-gray-600">
          {category}
        </p>
        <h2 className="mt-1 mb-2 text-xl font-bold text-gray-900">
          {title}
        </h2>
        <p className="text-base font-normal text-gray-600">
          {description}
        </p>
      </div>
      <div className="px-6 pb-6">
        <motion.a
            
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-400 to-purple-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md">
                Read more
              </span>
            </motion.a>
      </div>
    </div>
  );
}

export default FeatureCard;