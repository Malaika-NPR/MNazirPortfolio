import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import potteryStudio from 'figma:asset/8f3f94c5ee1ccd6640d50a95841a748365aa2df8.png';
import potteryPieces from 'figma:asset/645073854e92192e749c7d463d847a5f89326a40.png';
import playlistMrWorldwide from 'figma:asset/7e10fadcfc2553ad8db2b0e05cc5606090d99d8d.png';
import playlistEinstein from 'figma:asset/b9b1bdb0e1a2a95f8a4a0ddc2d803f16eb6b57af.png';
import playlistJazz from 'figma:asset/4c7d9cc3dcc8ef1441581d1673a7c14130b77483.png';
import playlistGonaway from 'figma:asset/57dca7eda2f486105cd2c542cfc06c1775d2e62c.png';
import playlistFeverdream from 'figma:asset/6d2b874bfeced7a142393710e5c9ca22b77e65b6.png';
import matchaClub from 'figma:asset/3b66418f59199e1ffa2ea682f888ea8ac7b3562b.png';
import delahCoffee from 'figma:asset/31ccb0037c515d321561aceabd7b2c16367d86c0.png';
import latteArt from 'figma:asset/56e6cd41d813cded03105b9c09ac2a303ba43da3.png';
import matchaLaptop from 'figma:asset/32db756ad7c108830088fc199779daab96bbd696.png';
import europeTrain from 'figma:asset/7c23a929e9e552b9faeea34c404e1fca69de9775.png';
import barcelonaStreet from 'figma:asset/d3e651bd2fbcf9082ba0fb9a27e81cbc64a39242.png';
import swissMountains from 'figma:asset/04e69483217f76d06e899360e5e75d33a3a71d42.png';

interface SideQuestModalProps {
  questId: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export function SideQuestModal({ questId, isOpen, onClose }: SideQuestModalProps) {
  if (!isOpen || !questId) return null;

  const renderQuestContent = () => {
    switch (questId) {
      case "writing":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-serif text-purple-800">Writing</h2>
              <p className="text-purple-600 font-serif italic max-w-2xl mx-auto">
                A reflection on cultural perspectives through the lens of everyday experiences.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
              <div dangerouslySetInnerHTML={{
                __html: `
                  <div class="substack-post-embed">
                    <p lang="en" style="color: #333; font-weight: 600; margin-bottom: 8px; font-size: 18px;">Liquid Threads: The Unraveling Tapestry of Our Drink Culture</p>
                    <p style="color: #666; margin-bottom: 12px; font-style: italic;">by Malaika Nazir</p>
                    <p style="color: #888; margin-bottom: 16px; font-size: 14px;">Monday Night Reflections</p>
                    <a data-post-link href="https://malaikanazir.substack.com/p/liquid-threads-the-unraveling-tapestry" 
                       style="display: inline-block; padding: 12px 24px; background: #FF6719; color: white; text-decoration: none; border-radius: 8px; font-weight: 500; transition: background 0.2s;">
                       Read on Substack
                    </a>
                  </div>
                  <script async src="https://substack.com/embedjs/embed.js" charset="utf-8"></script>
                `
              }} />
            </div>
          </div>
        );
      
      case "pottery":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-serif text-orange-800">Pottery</h2>
              <p className="text-orange-600 font-serif italic max-w-2xl mx-auto">
                Working with clay has been a meditative creative outlet.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={potteryStudio}
                  alt="Pottery studio session with pottery wheels"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-serif text-sm">At the pottery studio</p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={potteryPieces}
                  alt="Handmade pottery bowls"
                  className="w-full h-80 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-serif text-sm">My handmade bowls</p>
                </div>
              </motion.div>
            </div>
          </div>
        );

      case "travel":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-serif text-blue-800">Study Abroad + Travelling Europe</h2>
              <p className="text-blue-600 font-serif italic max-w-2xl mx-auto">
                I studied abroad at the Universidad de Barcelona and traveled + backpacked across Europe.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={barcelonaStreet}
                  alt="Beautiful Gothic architecture street view in Barcelona"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-serif text-sm">Barcelona streets & Gothic Quarter</p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={europeTrain}
                  alt="European train interior during backpacking journey"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-serif text-sm">Backpacking adventures by train</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={swissMountains}
                  alt="Swiss Alps scenic view in Grindelwald with cows grazing"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-serif text-sm">Swiss Alps in Grindelwald</p>
                </div>
              </motion.div>
            </div>
          </div>
        );

      case "caffeine":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-serif text-amber-800">Caffeine Fixes</h2>
              <p className="text-amber-600 font-serif italic max-w-2xl mx-auto">
                From Berkeley cafes to European coffee culture, documenting great coffee moments across the Bay Area and world.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={matchaClub}
                  alt="Matcha drink from The Matcha Club in Switzerland"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-serif text-sm">The best matcha I had in Switzerland</p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={delahCoffee}
                  alt="Iced coffee from Delah Coffee while coding"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-serif text-sm">Perfect coding fuel</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={latteArt}
                  alt="Beautiful latte art with cacao nibs"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-serif text-sm">Latte art perfection</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={matchaLaptop}
                  alt="Matcha drinks with laptop and stickers on wooden table"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-serif text-sm">Study session fuel</p>
                </div>
              </motion.div>
            </div>
          </div>
        );

      case "playlists":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-serif text-green-800">Curating Playlists</h2>
              <p className="text-green-600 font-serif italic max-w-2xl mx-auto">
                A collection of playlists I've curated over time, each reflecting different moods and moments. From Cal spirit to late-night focus sessions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={playlistMrWorldwide}
                    alt="Mr Worldwide playlist cover with Cal mascot"
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-serif mb-1">Mr Worldwide</h4>
                    <p className="text-xs opacity-90">Cal spirit meets global beats</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={playlistEinstein}
                    alt="Einstein 1905 playlist cover with Golden Gate Bridge sunset"
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-serif mb-1">Einstein 1905</h4>
                    <p className="text-xs opacity-90">Deep thoughts, deeper beats</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={playlistJazz}
                    alt="Jazz playlist cover with animated trumpet player"
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-serif mb-1">Jazz</h4>
                    <p className="text-xs opacity-90">Smooth vibes for coffee & code</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={playlistGonaway}
                    alt="Gonaway playlist cover with train journey"
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-serif mb-1">Gonaway</h4>
                    <p className="text-xs opacity-90">Travel vibes & wanderlust</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={playlistFeverdream}
                    alt="Feverdream playlist cover"
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-serif mb-1">Feverdream</h4>
                    <p className="text-xs opacity-90">Late night contemplations</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 p-4 flex justify-between items-center rounded-t-2xl">
              <div></div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="p-8">
              {renderQuestContent()}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}