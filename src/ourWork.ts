import childrensMentorshipImage from '../Images/childrensmentorship.webp'
import communityImpactImage from '../Images/communitydevptandsocialimpact.jpg'
import innovationSkillsImage from '../Images/innovationskillsdevpt.webp'
import literacyImage from '../Images/kidspainting.webp'
import talentDevelopmentImage from '../Images/manpaintingsunset.webp'
import publicSpeakingImage from '../Images/publicspeaking.webp'
import womensEmpowermentImage from '../Images/womensempowerment.webp'

export const ourWorkSection = `
    <section class="core-section" id="core-areas">
      <div class="section-wrap">
        
        <div class="section-heading-row">
          <h2>Our Core Areas</h2>
          
        </div>
        <div class="core-grid">
          <article class="image-tile core-item"><img src="${literacyImage}" alt="A child smiling at a community learning event" loading="lazy" /><div class="image-tile-copy"><h3>Literacy &amp; Reading Culture</h3><p>Book clubs, reading sessions, read-alouds and storytelling that help children build a lasting relationship with books and knowledge.</p></div></article>
          <article class="image-tile core-item"><img src="${childrensMentorshipImage}" alt="A mentor encouraging a child during a foundation event" loading="lazy" /><div class="image-tile-copy"><h3>Children's Mentorship</h3><p>Structured mentorship built to nurture confidence, communication, creativity and self-expression.</p></div></article>
          <article class="image-tile core-item"><img src="${publicSpeakingImage}" alt="A young girl speaking at a foundation event" loading="lazy" /><div class="image-tile-copy"><h3>Public Speaking &amp; Communication</h3><p>Safe opportunities to practise speaking, performance and clear expression and help young voices be heard.</p></div></article>
          <article class="image-tile core-item"><img src="${talentDevelopmentImage}" alt="An art instructor guiding a young person in painting" loading="lazy" /><div class="image-tile-copy"><h3>Talent Discovery &amp; Development</h3><p>Facilitating platforms for poetry, storytelling, reading, creative arts, leadership, performance and problem-solving.</p></div></article>
          <article class="image-tile core-item"><img src="${womensEmpowermentImage}" alt="A woman mentoring a young girl at a foundation event" loading="lazy" /><div class="image-tile-copy"><h3>Girls' &amp; Women's Empowerment</h3><p>Education, mentorship, innovation and leadership opportunities to help women and girls shape their futures.</p></div></article>
          <article class="image-tile core-item"><img src="${innovationSkillsImage}" alt="A young person taking part in an innovation and skills activity" loading="lazy" /><div class="image-tile-copy"><h3>Innovation &amp; Skills Development</h3><p>Programs that expose young people to technology, entrepreneurship, critical thinking and practical skills.</p></div></article>
          <article class="image-tile core-item"><img src="${communityImpactImage}" alt="Community development and social impact activity" loading="lazy" /><div class="image-tile-copy"><h3>Community Development &amp; Social Impact</h3><p>Educational outreach, mentorship, charitable initiatives and community partnerships that extends learning beyond the classroom.</p></div></article>
        </div>
      </div>
    </section>
`