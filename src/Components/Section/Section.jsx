import style from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <Section>
      <hi className={style.title}>{title}</hi>
      {children}
    </Section>
  );
};

export default Section;
