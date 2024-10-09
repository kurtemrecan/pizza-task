export default function Card(props) {
  const { title, className, headingLevel, subtitle } = props;

  const Heading = headingLevel === 'h1' ? 'h1' : 'h3';

  return (
    <div className={`card ${className}`}>
      <Heading>{title}</Heading>
      {subtitle && <p>{subtitle}</p>}
      <a className="btn order-btn" href="#">
        SİPARİŞ VER
      </a>
    </div>
  );
}
