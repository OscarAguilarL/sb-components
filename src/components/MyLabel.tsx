import './MyLabel.css';

export interface MyLabelProps {
  /**
   * Texto que va a llevar el componente
   */
  label: string;
  /**
   * Tamaño que va a tener el texto
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Color que va a tener el componente
   */
  color: 'primary' | 'secondary' | 'tertiary';
  /**
   * Define si capitalizar o no el texto
   */
  allCaps: boolean;
  /**
   * Color personalizado de la fuente
   */
  fontColor?: string;
  /**
   * Color personalizado de fondo
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  color = 'primary',
  label = 'No label',
  size = 'normal',
  fontColor,
  backgroundColor = 'transparent',
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
