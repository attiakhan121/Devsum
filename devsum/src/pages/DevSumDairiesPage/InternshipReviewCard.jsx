import { motion } from "framer-motion";
import TechIcon from "../../components/TechIcon";
const InternshipReviewCard = ({ item, onPlayVideo }) => {
  const {
    companyImage,
    studentImage,
    studentName,
    duration,
    companyName,
    technologies,
    description,
    rating,
    category,
  } = item;

  return (
    <div className="flex flex-col h-full overflow-hidden shadow-lg bg-dark-blue transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="relative overflow-hidden h-70 group flex-shrink-0">
        <img
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          src="https://validthemes.net/site-template/lerna/assets/img/courses/12.jpg"
          alt={companyImage}
        />

        <div
          onClick={onPlayVideo}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            className="relative w-18 h-18 bg-accent/90 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: 0.3,
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#ff9900",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className="absolute inset-0 border-2 border-soft-white rounded-full"
              initial={{ scale: 1, opacity: 0 }}
              animate={{
                scale: 1.5,
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <motion.span
              className="absolute inset-0 border-2 border-white rounded-full"
              initial={{ scale: 1, opacity: 0 }}
              animate={{
                scale: 1.8,
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.5,
              }}
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-11 w-11 text-white ml-1 z-20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-accent text-[17px] font-medium">
              {duration}
            </span>
            <span className="text-border-blue mx-1">at</span>
            <span className="font-medium">{companyName}</span>
          </div>
          <div className="flex items-center mb-2 gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                className="cursor-pointer text-[#FBB040]"
                whileHover={{
                  scale: 1.3,
                  rotate: 10,
                  color: "#F97316",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <TechIcon
                  name="star"
                  className={`w-4 h-4 transition-all duration-200 ${
                    i < rating ? "fill-current" : "opacity-40"
                  }`}
                />
              </motion.span>
            ))}
            <span className="text-border-blue text-sm ml-1">
              {`(${rating.toFixed(1)})`}
            </span>
          </div>
        </div>

        <div className="my-3">
          <h3 className="text-md font-medium mb-2">What I learned</h3>

          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 4).map((tech) => (
              <span
                key={tech.name}
                className="flex items-center gap-1 px-2 py-1 bg-border-blue/40 rounded-md text-xs"
              >
                <TechIcon name={tech.icon} className="w-3 h-3" />
                {tech.name}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="text-xs text-border-blue self-center">
                +{technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        <div className="border-b border-border-blue flex-grow">
          <p className="text-border-blue mb-2 line-clamp-3 text-sm">
            {description}
          </p>
        </div>

        <motion.a
          href="#"
          className="flex items-center gap-4 group pt-3"
          whileHover={{ x: 5 }}
        >
          <motion.div
            className="rounded-full overflow-hidden border-2 border-transparent group-hover:border-orange-400 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 10px rgba(251, 146, 60, 0.5)",
            }}
          >
            {studentImage ? (
              <motion.img
                src={studentImage}
                alt="author"
                className="w-12.5 h-12.5 rounded-full object-cover group-hover:ring-2 group-hover:ring-orange-300 transition-all duration-300"
                width={50}
                height={50}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
            ) : (
              <TechIcon
                name="user"
                className="w-16 h-16 p-4 bg-border-blue/40 rounded-full transition-all duration-300 group-hover:bg-orange-400/20 group-hover:text-orange-500"
              />
            )}
          </motion.div>

          <motion.div
            initial={{ x: -10 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-medium text-soft-white group-hover:text-orange-500 transition-colors duration-300">
              {studentName}
            </h3>
            <p className="text-sm text-border-blue transition-colors duration-300">
              {category}
            </p>
          </motion.div>
        </motion.a>
      </div>
    </div>
  );
};

export default InternshipReviewCard;
