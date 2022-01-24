/// <reference types="react" />
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
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
