import React from "react";
import './key.css';

interface IProps {
  label?: string;
  id: string;
  mod?: string;
}

export const Key: React.FC<IProps> = ({ label = '', id, mod }) =>
  <div id={`key_${id}`} className={`key ${mod ? `key_${mod}` : ''}`}>{label}</div>