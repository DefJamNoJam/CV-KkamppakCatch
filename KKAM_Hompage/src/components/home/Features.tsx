import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { UseLanguage } from "@hooks/UseLanguage";
import {
  FeaturesContainer,
  PlanCard,
  PlanTitle,
  PlanPrice,
  PlanFeatures,
  SubscribeButton,
  Header,
  Title,
  Body,
} from "@styles/home/FeaturesStyles";
import { FeaturesData } from "@constants/FeaturesData";
import { motion } from "framer-motion";
import { slideInVariant, cardInVariant } from "@constants/animationVariants";

export default function Features() {
  const { lang } = UseLanguage();
  const data = useMemo(() => FeaturesData.translations[lang], [lang]);
  const navigate = useNavigate();

  const handleSubscribe = () => {
    navigate('/new');
  };

  return (
    <FeaturesContainer>
      <Header>
        <motion.div
          variants={slideInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Title>{data.sectionTitle}</Title>
        </motion.div>
      </Header>
      <Body>
        {data.plans.map((plan, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={cardInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <PlanCard>
              <PlanTitle>{plan.title}</PlanTitle>
              <PlanPrice>{plan.price}</PlanPrice>
              <PlanFeatures>
                {plan.features.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </PlanFeatures>
              <SubscribeButton onClick={handleSubscribe}>
                {data.button}
              </SubscribeButton>
            </PlanCard>
          </motion.div>
        ))}
      </Body>
    </FeaturesContainer>
  );
}
