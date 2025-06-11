import { useMemo } from "react";
import { UseLanguage } from "@hooks/UseLanguage";
import * as SS from "@styles/home/ServiceStyles";
import {
  FaDatabase,
  FaShieldAlt,
  FaMicrochip,
  FaLayerGroup,
  FaEye,
  FaWifi,
} from "react-icons/fa";
import { ServiceData } from "@constants/ServiceData";
import { motion } from "framer-motion";
import { slideInVariant, cardInVariant } from "@constants/animationVariants";

const iconMap = {
  Data: <FaDatabase size={16} />, 
  Privacy: <FaShieldAlt size={16} />, 
  AI: <FaMicrochip size={16} />, 
  Space: <FaLayerGroup size={16} />, 
  Vision: <FaEye size={16} />, 
  RealTime: <FaWifi size={16} />,
};

export default function Service() {
  const { lang } = UseLanguage();
  const t = useMemo(() => ServiceData.translations[lang], [lang]);

  return (
    <>
      <SS.ServiceContainer>
        <motion.h1
          variants={slideInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {t.sectionTitle1}
          <br />
          {t.sectionTitle2}
        </motion.h1>

        {t.slides.map((slide, idx) => (
          <motion.div
            key={idx}
            variants={slideInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SS.SlideContent reverse={idx % 2 === 1}>
              <SS.TextArea>
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>
                <SS.Tags>
                  {slide.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </SS.Tags>
              </SS.TextArea>
              <SS.ImageArea>
                <video
                  src={slide.imageUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  style={
                    idx % 2 === 1
                      ? { borderRadius: "16px 0 0 16px" }
                      : { borderRadius: "0 16px 16px 0" }
                  }
                />
              </SS.ImageArea>
            </SS.SlideContent>
          </motion.div>
        ))}
      </SS.ServiceContainer>

      <SS.TechnologyContainer>
        <motion.h2
          variants={slideInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {t.techSection.title}
        </motion.h2>
        <motion.p
          className="subtitle"
          variants={slideInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {t.techSection.subtitle}
        </motion.p>

        <SS.CardsGrid>
          {t.techItems.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <SS.TechCard>
                <SS.ImagePair>
                  <img src={item.frontSrc} alt={`${item.title} 전`} />
                  <span className="arrow">→</span>
                  <img src={item.backSrc} alt={`${item.title} 후`} />
                </SS.ImagePair>
                <SS.CardTitle>{item.title}</SS.CardTitle>
                <SS.CardDesc>{item.desc}</SS.CardDesc>
                <SS.CardTags>
                  {item.tags.map((tag) => (
                    <SS.TagItem key={tag.label}>
                      {iconMap[tag.iconKey]}
                      <span>{tag.label}</span>
                    </SS.TagItem>
                  ))}
                </SS.CardTags>
              </SS.TechCard>
            </motion.div>
          ))}
        </SS.CardsGrid>
      </SS.TechnologyContainer>
    </>
  );
}
