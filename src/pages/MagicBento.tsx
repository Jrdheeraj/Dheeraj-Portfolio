import { motion } from "framer-motion";

const MagicBento = () => {
  return (
    <section className="w-full bg-black text-white py-32 font-sans overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Achievements Section */}
        <div className="mb-28">
          <div className="mb-12">
            <h2 className="text-5xl md:text-[5rem] font-sans font-extrabold tracking-tight uppercase">
              Achievements
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1: IIT Tirupati */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-zinc-900 rounded-[2rem] overflow-hidden relative min-h-[450px] md:min-h-[500px] group cursor-pointer"
            >
              <div className="absolute top-6 right-6 z-20">
                <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-4 py-2 rounded-full tracking-widest uppercase shadow-lg">
                  IIT TIRUPATI · E-SUMMIT
                </span>
              </div>
              <img 
                src="/IIT-Tirupati.jpg" 
                alt="IIT Tirupati Hackathon" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 w-full transform transition-transform duration-500">
                <p className="text-white font-bold text-[10px] md:text-xs tracking-widest uppercase mb-2 [text-shadow:_0_2px_4px_rgb(0_0_0_/_100%)]">
                  National Innovation Challenge
                </p>
                <h4 className="text-white font-sans font-black text-2xl md:text-3xl leading-tight mb-2 uppercase [text-shadow:_0_2px_8px_rgb(0_0_0_/_100%)]">
                  Idea Sprint
                </h4>
                <p className="text-white text-sm font-medium leading-relaxed max-w-md [text-shadow:_0_2px_4px_rgb(0_0_0_/_100%)]">
                  Qualified Round 2 of IIT Tirupati E-Summit Idea Sprint Hackathon
                </p>
              </div>
            </motion.div>

            {/* Card 2: AIC SKU */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-zinc-900 rounded-[2rem] overflow-hidden relative min-h-[450px] md:min-h-[500px] group cursor-pointer"
            >
              <div className="absolute top-6 right-6 z-20">
                <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-4 py-2 rounded-full tracking-widest uppercase shadow-lg">
                  ATAL INCUBATION CENTRE · SKU
                </span>
              </div>
              <img 
                src="/AIC-SKU.jpeg" 
                alt="AIC SKU Innovation Award" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 w-full transform transition-transform duration-500">
                <p className="text-white font-bold text-[10px] md:text-xs tracking-widest uppercase mb-2 [text-shadow:_0_2px_4px_rgb(0_0_0_/_100%)]">
                  Final Innovation Challenge
                </p>
                <h4 className="text-white font-sans font-black text-2xl md:text-3xl leading-tight mb-2 uppercase [text-shadow:_0_2px_8px_rgb(0_0_0_/_100%)]">
                  2nd Best Innovation
                </h4>
                <p className="text-white text-sm font-medium leading-relaxed max-w-md [text-shadow:_0_2px_4px_rgb(0_0_0_/_100%)]">
                  Secured 2nd Best Innovation Award at Atal Incubation Center – SK University for the OxyWalls prototype.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="mb-12">
            <h2 className="text-5xl md:text-[5rem] font-sans font-extrabold tracking-tight uppercase">
              Certifications
            </h2>
          </div>
          
          <div className="max-w-4xl">
            {/* Card 1: Scalar Certificate */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-[#f4f4f5] text-black rounded-[2rem] p-10 flex flex-col justify-between min-h-[400px] border border-gray-200 cursor-pointer transition-colors duration-300 hover:bg-white"
            >
              <div>
                <div className="w-32 h-16 bg-white rounded-2xl flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.08)] mb-8 overflow-hidden">
                  <img src="/Scaler-Logo.jpg" alt="Scaler" className="w-full h-full object-contain p-3" />
                </div>
                <p className="text-gray-600 leading-relaxed text-[15px] md:text-lg font-medium max-w-2xl">
                  Earned Python Programming Certificate from Scalar, gaining hands-on experience in building machine learning models and understanding real-world AI applications.
                </p>
              </div>
              <div className="mt-8">
                <h4 className="font-sans font-black text-2xl md:text-3xl tracking-tight uppercase mb-2">
                  Certified in Python
                </h4>
                <p className="text-gray-500 font-semibold text-sm uppercase tracking-wider">Scalar</p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MagicBento;
