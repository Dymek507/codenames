import duelImage from '../assets/duel_page.png'
import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <div className="bg-center bg-cover wh-full flex-center" style={{ backgroundImage: `url(${duelImage})` }}>
      <motion.div
        className="text-[8rem] font-bold text-white transform transition-transform duration-500 hover:scale-110"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p
          style={{
            textShadow: '0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.3)'
          }}
        >Tajniacy</p>
      </motion.div>
    </div >
  )

}

export default HomePage