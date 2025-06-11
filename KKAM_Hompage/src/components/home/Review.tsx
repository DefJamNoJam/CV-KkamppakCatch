import { useMemo } from 'react';
import { UseLanguage } from '@hooks/UseLanguage';
import { ReviewsData } from '@constants/ReviewsData';
import * as RS from '@styles/home/ReviewStyles';
import { FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { slideInVariant, cardInVariant } from '@constants/animationVariants';

export default function Review() {
  const { lang } = UseLanguage();
  const { header, reviews } = useMemo(
    () => ReviewsData.translations[lang],
    [lang]
  );

  const groupedReviews = useMemo(
    () => [
      [reviews[0], reviews[3]],
      [reviews[1], reviews[4]],
      [reviews[2], reviews[5]],
    ],
    [reviews]
  );

  return (
    <RS.ReviewContainer>
      <RS.Header>
        <motion.div
          variants={slideInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <RS.Subtitle>{header.subtitle}</RS.Subtitle>
        </motion.div>
        <motion.div
          variants={slideInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <RS.Title>{header.title}</RS.Title>
        </motion.div>
      </RS.Header>

      <RS.List>
        {groupedReviews.map((group, gIdx) => (
          <RS.ListItem key={gIdx}>
            {group.map(({ id, image, cardTitle, cardText, name }, rIdx) => {
              const customIndex = gIdx * group.length + rIdx;
              return (
                <motion.div
                  key={id}
                  custom={customIndex}
                  variants={cardInVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <RS.Card key={id} hasImage={!!image}>
                    {!!image && (
                      <RS.CardImage src={image} alt={cardTitle} />
                    )}
                    <RS.CardContent>
                      <RS.CardTitle>{cardTitle}</RS.CardTitle>
                      <RS.CardText>{cardText}</RS.CardText>
                    </RS.CardContent>
                    <RS.CardFooter>
                      <RS.Avatar>
                        <FaUser />
                      </RS.Avatar>
                      <RS.Name>{name}</RS.Name>
                      <RS.Stars>
                        {[...Array(5)].map((_, i) => (
                          <RS.Star key={i}>&#9733;</RS.Star>
                        ))}
                      </RS.Stars>
                    </RS.CardFooter>
                  </RS.Card>
                </motion.div>
              );
            })}
          </RS.ListItem>
        ))}
      </RS.List>
    </RS.ReviewContainer>
  );
}
